import { useState } from 'react'

const ChartArea = () => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const [selectedMonth1, setSelectedMonth1] = useState('July')
  const [selectedMonth2, setSelectedMonth2] = useState('July')

  const MonthDropdown = ({
    selectedMonth,
    id,
    onSelect,
  }: {
    selectedMonth: string
    id: string
    onSelect: (month: string) => void
  }) => (
    <div
      className='relative flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1B3B86]/10 bg-[#1B3B86]/5 px-4 py-2 text-sm font-medium text-gray-600 hover:border-[#1B3B86]/20'
      id={`monthModalButton${id}`}
    >
      <p className={`selectMonth${id}`}>{selectedMonth}</p>
      <i className='ph ph-caret-down text-[#1B3B86]'></i>
      <div
        className='modalClose absolute right-0 top-9 z-10 max-h-32 w-full origin-top-right overflow-y-auto rounded-xl border border-[#1B3B86]/10 bg-white p-3 shadow-sm duration-500'
        id={`monthModal${id}`}
      >
        <ul className='flex flex-col gap-3'>
          {months.map((month) => (
            <li
              key={month}
              className={`month${id} cursor-pointer text-gray-600 hover:text-[#E31C79] transition-colors`}
              onClick={() => onSelect(month)}
            >
              {month}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  const ChartCard = ({
    title,
    id,
    selectedMonth,
    onMonthSelect,
  }: {
    title: string
    id: string
    selectedMonth: string
    onMonthSelect: (month: string) => void
  }) => (
    <div className='col-span-12 rounded-2xl bg-white shadow-sm max-sm:pr-4 sm:px-8 sm:pt-6 lg:col-span-7'>
      <div className='flex items-center justify-between pb-4'>
        <p className='heading-4 text-gray-900 max-sm:px-4 max-sm:pt-4'>
          {title}
        </p>
        <MonthDropdown
          selectedMonth={selectedMonth}
          id={id}
          onSelect={onMonthSelect}
        />
      </div>
      <div className='relative h-px'>
        <div className='absolute left-0 top-0 h-full w-full bg-[#1B3B86]/5'></div>
      </div>
      <div
        className={`${
          id === '1' ? 'customer_impression' : 'earning_overview_chart'
        } pt-6`}
      ></div>
    </div>
  )

  return (
    <section>
      <div className='4xl:large-container grid grid-cols-12 gap-6 pt-6 max-4xl:container'>
        <ChartCard
          title='Weekly Work Summary'
          id='1'
          selectedMonth={selectedMonth1}
          onMonthSelect={setSelectedMonth1}
        />
        <div className='col-span-12 lg:col-span-5'>
          <ChartCard
            title='Total Earning Overview'
            id='2'
            selectedMonth={selectedMonth2}
            onMonthSelect={setSelectedMonth2}
          />
        </div>
      </div>
    </section>
  )
}

export default ChartArea
