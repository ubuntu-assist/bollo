import React, { useState, ChangeEvent } from 'react'

interface FilterState {
  location: string
  category: string
  minBudget: string
  maxBudget: string
}

interface TaskFilterProps {
  onFilterChange: (filters: FilterState) => void
}

const TaskFilterComponent: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    location: '',
    category: '',
    minBudget: '',
    maxBudget: '',
  })

  // Service categories
  const categories: string[] = [
    'All Categories',
    'Handyman',
    'Cleaning',
    'Plumbing',
    'Electrical',
    'Gardening',
    'Painting',
    'Moving',
    'IT Services',
  ]

  // Sample locations (can be replaced with API data)
  const locations: string[] = [
    'All Locations',
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'San Diego',
    'Atlanta',
  ]

  const handleInputChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target
    const updatedFilters = { ...filters, [name]: value }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleReset = (): void => {
    const resetFilters: FilterState = {
      location: '',
      category: '',
      minBudget: '',
      maxBudget: '',
    }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  return (
    <div className='bg-white rounded-2xl border border-n30 p-6 mb-6'>
      <h3 className='heading-5 mb-4'>Filter Tasks</h3>

      <div className='space-y-4'>
        {/* Location Filter */}
        <div>
          <label className='block text-sm font-medium text-n500 mb-2'>
            Location
          </label>
          <select
            name='location'
            value={filters.location}
            onChange={handleInputChange}
            className='w-full rounded-xl border border-n30 px-4 py-3 text-sm'
          >
            {locations.map((location, index) => (
              <option
                key={index}
                value={location === 'All Locations' ? '' : location}
              >
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className='block text-sm font-medium text-n500 mb-2'>
            Service Category
          </label>
          <select
            name='category'
            value={filters.category}
            onChange={handleInputChange}
            className='w-full rounded-xl border border-n30 px-4 py-3 text-sm'
          >
            {categories.map((category, index) => (
              <option
                key={index}
                value={category === 'All Categories' ? '' : category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Filter */}
        <div>
          <label className='block text-sm font-medium text-n500 mb-2'>
            Budget Range
          </label>
          <div className='flex items-center space-x-2'>
            <input
              type='number'
              name='minBudget'
              placeholder='Min'
              value={filters.minBudget}
              onChange={handleInputChange}
              className='w-1/2 rounded-xl border border-n30 px-4 py-3 text-sm'
            />
            <span className='text-n400'>-</span>
            <input
              type='number'
              name='maxBudget'
              placeholder='Max'
              value={filters.maxBudget}
              onChange={handleInputChange}
              className='w-1/2 rounded-xl border border-n30 px-4 py-3 text-sm'
            />
          </div>
        </div>

        {/* Filter Actions */}
        <div className='flex items-center justify-between pt-4'>
          <button
            onClick={handleReset}
            className='text-sm font-medium text-n500 hover:text-n700'
          >
            Reset
          </button>
          <button
            onClick={() => onFilterChange(filters)}
            className='rounded-full bg-b300 px-6 py-2 text-sm font-medium text-white hover:bg-b400'
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskFilterComponent
