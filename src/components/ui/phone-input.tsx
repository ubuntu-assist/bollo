import React, { useState, useEffect } from 'react'
import { Check, ChevronsUpDown, Phone } from 'lucide-react'
import ReactCountryFlag from 'react-country-flag'
import {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
import { cn } from '@/lib/utils'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

// Country data with codes and dial codes
export interface CountryOption {
  value: string
  label: string
  dialCode: string
}

// Generate the country list from the library's data
const generateCountries = (): CountryOption[] => {
  return getCountries()
    .map((country) => ({
      value: country,
      label: en[country] || country,
      dialCode: `+${getCountryCallingCode(country)}`,
    }))
    .sort((a, b) => a.label.localeCompare(b.label))
}

export const countries: CountryOption[] = generateCountries()

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  onCountryChange?: (country: CountryOption) => void
  error?: string
  className?: string
  placeholder?: string
  disabled?: boolean
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  onCountryChange,
  error,
  className,
  placeholder = 'Enter phone number',
  disabled = false,
}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(() => {
    // Default to US or the first country in the list
    const usCountry = countries.find((c) => c.value === 'US')
    return usCountry || countries[0]
  })
  const [phoneNumber, setPhoneNumber] = useState<string>(
    value || selectedCountry.dialCode
  )

  useEffect(() => {
    // Initialize with dial code if empty
    if (!value && selectedCountry) {
      setPhoneNumber(selectedCountry.dialCode)
      onChange(selectedCountry.dialCode)
    }
  }, [])

  useEffect(() => {
    if (!phoneNumber.includes(selectedCountry.dialCode)) {
      const newNumber = selectedCountry.dialCode
      setPhoneNumber(newNumber)
      onChange(newNumber)
    }
  }, [selectedCountry])

  const handleCountrySelect = (country: CountryOption) => {
    setSelectedCountry(country)

    // Replace the old dial code with the new one
    const nationalNumber = phoneNumber.replace(/^\+\d+/, '').trim()
    const newNumber = `${country.dialCode}${nationalNumber}`

    setPhoneNumber(newNumber)
    onChange(newNumber)

    if (onCountryChange) {
      onCountryChange(country)
    }

    setModalOpen(false)
  }

  const handlePhoneChange = (inputValue: string) => {
    // Ensure the dial code is always part of the value
    if (!inputValue.startsWith(selectedCountry.dialCode)) {
      const newValue = selectedCountry.dialCode
      setPhoneNumber(newValue)
      onChange(newValue)
      return
    }

    setPhoneNumber(inputValue)
    onChange(inputValue)
  }

  return (
    <div className='flex flex-col gap-2 w-full'>
      <div
        className={cn(
          'flex w-full items-center justify-start gap-3 rounded-2xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 px-4 py-3 focus-within:border-[#E31C79] transition-colors',
          className
        )}
      >
        <Phone className='text-2xl !leading-none text-[#1B3B86]' size={24} />

        <div className='flex-1 flex items-center gap-2'>
          <button
            type='button'
            disabled={disabled}
            onClick={() => setModalOpen(true)}
            className='flex items-center gap-1 text-sm min-w-[85px]'
          >
            <ReactCountryFlag
              countryCode={selectedCountry.value}
              svg
              style={{
                width: '1.2em',
                height: '1.2em',
              }}
              title={selectedCountry.label}
            />
            <span className='text-gray-600 ml-1'>
              {selectedCountry.dialCode}
            </span>
            <ChevronsUpDown className='h-4 w-4 text-gray-500' />
          </button>

          <input
            type='tel'
            value={phoneNumber.replace(selectedCountry.dialCode, '')}
            onChange={(e) =>
              handlePhoneChange(
                e.target.value === ''
                  ? selectedCountry.dialCode
                  : `${selectedCountry.dialCode}${e.target.value}`
              )
            }
            placeholder={placeholder}
            disabled={disabled}
            className='w-full text-sm text-gray-600 outline-none bg-transparent placeholder:text-gray-500'
          />
        </div>
      </div>
      {error && <span className='text-xs text-red-500'>{error}</span>}

      {/* Country Selection Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className='max-w-[350px] p-0'>
          <DialogHeader className='px-4 pt-4 pb-2'>
            <DialogTitle>Select Country</DialogTitle>
          </DialogHeader>
          <Command>
            <CommandInput
              placeholder='Search country...'
              className='border-none focus:ring-0'
            />
            <CommandList className='max-h-[300px]'>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={`${country.label} ${country.dialCode}`}
                    onSelect={() => handleCountrySelect(country)}
                    className='flex items-center gap-2'
                  >
                    <ReactCountryFlag
                      countryCode={country.value}
                      svg
                      style={{
                        width: '1.2em',
                        height: '1.2em',
                      }}
                    />
                    <span className='flex-1 truncate'>{country.label}</span>
                    <span className='text-gray-500 text-xs'>
                      {country.dialCode}
                    </span>
                    {country.value === selectedCountry.value && (
                      <Check className='ml-2 h-4 w-4 text-[#E31C79]' />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PhoneInput
