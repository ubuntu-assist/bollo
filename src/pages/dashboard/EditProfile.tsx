import { useState } from 'react'

const EditProfile = () => {
  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false,
  })

  const InputField = ({
    label,
    placeholder,
    type = 'text',
  }: {
    label: string
    placeholder: string
    type?: string
  }) => (
    <div className='col-span-12 sm:col-span-6'>
      <p className='pb-3 font-medium text-gray-600'>{label}:</p>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full rounded-xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 p-3 outline-none placeholder:text-gray-500 focus:border-[#E31C79] transition-colors'
      />
    </div>
  )

  const SubmitButton = ({ text }: { text: string }) => (
    <button className='relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-[#1B3B86] px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-[#E31C79] after:duration-700 hover:after:w-[calc(100%+2px)] sm:px-8'>
      <span className='relative z-10'>{text}</span>
    </button>
  )

  const PasswordInput = ({
    label,
    id,
    showPassword,
    onToggle,
  }: {
    label: string
    id: string
    showPassword: boolean
    onToggle: () => void
  }) => (
    <div className='col-span-12'>
      <p className='pb-3 font-medium text-gray-600'>{label}</p>
      <div className='relative flex items-center justify-between rounded-xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 p-3'>
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          placeholder='Enter password'
          className='w-full bg-transparent outline-none placeholder:text-gray-500'
        />
        <button onClick={onToggle} type='button'>
          <i
            className={`ph ph-eye${
              showPassword ? '' : '-slash'
            } cursor-pointer text-xl !leading-none text-[#1B3B86] hover:text-[#E31C79] transition-colors`}
          ></i>
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Profile Information Section */}
      <section>
        <div className='4xl:large-container grid grid-cols-12 gap-4 rounded-2xl bg-white p-4 max-4xl:mx-4 sm:gap-6 sm:p-10'>
          <div className='col-span-12 flex items-center justify-between gap-4'>
            <h4 className='heading-4 text-gray-900'>
              Edit Profile Information
            </h4>
          </div>

          {/* Profile Picture */}
          <div className='col-span-12 flex items-center justify-start gap-4'>
            <div className='max-md:overflow-hidden'>
              <div className='hexagon-styles my-[calc(120px*0.5/2)] h-[calc(120px*0.57736720554273)] w-[120px] rounded-[calc(120px/36.75)] bg-[#1B3B86]/5 before:rounded-[calc(120px/18.75)] after:rounded-[calc(120px/18.75)]'>
                <div className='absolute -top-[24px] left-[4px]'>
                  <div className='hexagon-styles z-10 my-[calc(110px*0.5/2)] h-[calc(110px*0.57736720554273)] w-[110px] rounded-[calc(110px/50)] bg-[#1B3B86] before:rounded-[calc(110px/50)] after:rounded-[calc(110px/50)]'>
                    <div className='absolute -top-[23px] left-1 z-20'>
                      <div className='hexagon-styles z-10 my-[calc(102px*0.5/2)] h-[calc(102px*0.57736720554273)] w-[102px] rounded-[calc(102px/50)] bg-[#1B3B86]/5 before:rounded-[calc(102px/50)] after:rounded-[calc(102px/50)]'>
                        <div className='r-hex3 absolute -left-0.5 -top-[23px] z-30 inline-block w-[105px] overflow-hidden'>
                          <div className='r-hex-inner3'>
                            <div className='expertImgBig r-hex-inner-3 before:h-[105px] before:bg-cover'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label
                className='cursor-pointer rounded-xl bg-[#1B3B86] px-5 py-2 text-white hover:bg-[#E31C79] transition-colors'
                htmlFor='profilePic'
              >
                Change
              </label>
              <input type='file' className='hidden' id='profilePic' />
            </div>
          </div>

          {/* Form Fields */}
          <InputField label='Name' placeholder='John Doe' />
          <InputField label='Area' placeholder='New York' />
          <InputField
            label='Email'
            placeholder='example@mail.com'
            type='email'
          />
          <InputField label='Post Code' placeholder='1234' />
          <InputField label='Phone' placeholder='+1234567' type='tel' />
          <InputField
            label='Address'
            placeholder='3517 W. Gray St. Utica, Pennsylvania'
          />

          {/* About Section */}
          <div className='col-span-12'>
            <p className='pb-3 font-medium text-gray-600'>About:</p>
            <textarea
              placeholder='We understand that every space is unique...'
              className='min-h-40 w-full rounded-xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 p-3 outline-none placeholder:text-gray-500 focus:border-[#E31C79] transition-colors'
            ></textarea>
          </div>

          <div className='col-span-12'>
            <SubmitButton text='Save Changes' />
          </div>
        </div>
      </section>

      {/* Email Update Section */}
      <section className='pt-6 sm:pt-10'>
        <div className='4xl:large-container grid grid-cols-12 gap-4 rounded-2xl bg-white p-4 max-4xl:mx-4 sm:gap-6 sm:p-10'>
          <div className='col-span-12'>
            <h5 className='heading-5 border-b border-[#1B3B86]/10 pb-6 text-gray-900'>
              Update email
            </h5>
            <p className='pt-6 font-medium text-gray-600'>
              Your current email address is{' '}
              <span className='text-[#1B3B86]'>sara.cruz@example.com</span>
            </p>
          </div>
          <InputField
            label='Your Email'
            placeholder='example@mail.com'
            type='email'
          />
          <div className='col-span-12'>
            <SubmitButton text='Save Changes' />
          </div>
        </div>
      </section>

      {/* Password Update Section */}
      <section className='pt-6 sm:pt-10'>
        <div className='4xl:large-container grid grid-cols-12 gap-4 rounded-2xl bg-white p-4 max-4xl:mx-4 sm:gap-6 sm:p-10'>
          <div className='col-span-12 border-b border-[#1B3B86]/10 pb-6'>
            <h5 className='heading-5 text-gray-900'>Update password</h5>
          </div>

          <PasswordInput
            label='Current Password*'
            id='oldPassword'
            showPassword={showPasswords.old}
            onToggle={() =>
              setShowPasswords((prev) => ({ ...prev, old: !prev.old }))
            }
          />

          <PasswordInput
            label='New Password*'
            id='newPassword'
            showPassword={showPasswords.new}
            onToggle={() =>
              setShowPasswords((prev) => ({ ...prev, new: !prev.new }))
            }
          />

          <PasswordInput
            label='Confirm New Password*'
            id='confirmNewPassword'
            showPassword={showPasswords.confirm}
            onToggle={() =>
              setShowPasswords((prev) => ({ ...prev, confirm: !prev.confirm }))
            }
          />

          <div className='col-span-12'>
            <SubmitButton text='Save Changes' />
          </div>
        </div>
      </section>
    </>
  )
}

export default EditProfile
