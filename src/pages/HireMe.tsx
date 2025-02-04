import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import verifyBadge from '../assets/images/verify-badge.png'
import { getCurrentDateTime, isDateTimeInFuture } from '../utils/date-time'

const { date: currentDate, time: currentTime } = getCurrentDateTime()

const hireFormSchema = z
  .object({
    date: z.string().min(1, 'Please select a date'),
    time: z.string().min(1, 'Please select a time'),
    message: z
      .string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message cannot exceed 500 characters'),
  })
  .refine((data) => isDateTimeInFuture(data.date, data.time), {
    message: 'Selected date and time must be in the future',
    path: ['time'],
  })

type HireFormData = z.infer<typeof hireFormSchema>

const defaultValues: HireFormData = {
  date: currentDate,
  time: currentTime,
  message: '',
}

const HireMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<HireFormData>({
    resolver: zodResolver(hireFormSchema),
    defaultValues,
  })

  const onSubmit = (data: HireFormData) => {
    console.log('Form submitted:', data)
  }

  const selectedDate = watch('date')
  const isToday = selectedDate === currentDate

  return (
    <section className='sbp-30 mt-[140px]'>
      <div className='container grid grid-cols-12 gap-6'>
        {/* Left Profile Section */}
        <div className='col-span-12 rounded-2xl border border-[#1B3B86]/10 p-4 md:col-span-5 lg:p-8'>
          {/* Profile Image Hexagon */}
          <div className='flex items-center justify-center'>
            <div className='relative max-md:overflow-hidden'>
              <div className='hexagon-styles my-[calc(190px*0.5/2)] h-[calc(190px*0.57736720554273)] w-[190px] rounded-[calc(190px/36.75)] bg-[#1B3B86]/5 before:rounded-[calc(190px/18.75)] after:rounded-[calc(190px/18.75)]'>
                <div className='absolute -top-[38px] left-2'>
                  <div className='hexagon-styles z-10 my-[calc(175px*0.5/2)] h-[calc(175px*0.57736720554273)] w-[175px] rounded-[calc(175px/50)] bg-[#1B3B86] before:rounded-[calc(175px/50)] after:rounded-[calc(175px/50)]'>
                    <div className='absolute -top-[35px] left-2 z-20'>
                      <div className='hexagon-styles z-10 my-[calc(160px*0.5/2)] h-[calc(160px*0.57736720554273)] w-[160px] rounded-[calc(160px/50)] bg-[#1B3B86]/5 before:rounded-[calc(160px/50)] after:rounded-[calc(160px/50)]'>
                        <div className='r-hex3 absolute -left-[2px] -top-[34px] z-30 inline-block w-[165px] overflow-hidden'>
                          <div className='r-hex-inner3'>
                            <div className='expertImgBig r-hex-inner-3 before:h-[160px] before:bg-cover'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute bottom-5 right-1 z-30'>
                <img src={verifyBadge} alt='Verification Badge' />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className='flex items-start justify-center gap-3 pt-6'>
            <h4 className='heading-4 text-gray-900'>Duclair Fopa</h4>
            <p className='rounded-full bg-[#E31C79] px-3 py-1 text-sm font-medium text-white'>
              PRO
            </p>
          </div>

          {/* About Section */}
          <div className='flex flex-col items-start justify-start gap-3 pt-8'>
            <p className='text-sm font-medium text-gray-900'>ABOUT</p>
            <p className='text-gray-600'>
              Welcome to Servibe where convenience meets quality. Discover a
              seamless platform connecting you with trusted service providers
              effortlessly.
            </p>
          </div>

          {/* Social Links */}
          <div className='flex flex-col items-start justify-start gap-3 pt-8'>
            <p className='text-sm font-medium text-gray-900'>LINKS</p>
            <div className='flex items-center justify-start gap-3'>
              {['linkedin', 'instagram'].map((platform) => (
                <a
                  key={platform}
                  href='#'
                  className='flex cursor-pointer items-center justify-center rounded-full border border-[#1B3B86] p-2.5 text-[#1B3B86] transition-colors duration-500 hover:border-[#E31C79] hover:bg-[#E31C79] hover:text-white'
                >
                  <i className={`ph ph-${platform}-logo !leading-none`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className='col-span-12 rounded-2xl border border-[#1B3B86]/10 p-4 sm:p-6 md:col-span-7 lg:p-10'>
          <h5 className='heading-5 w-full border-b border-[#1B3B86]/10 pb-6 text-gray-900'>
            Handyman
          </h5>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6 pt-6'
          >
            {/* Price Card */}
            <div className='flex items-center justify-between gap-3 rounded-3xl border border-[#1B3B86]/10 px-6 py-5'>
              <div className='flex items-center justify-start gap-3'>
                <img
                  src='./assets/images/review_people_1.png'
                  className='size-12 rounded-full'
                  alt='Reviewer'
                />
                <div>
                  <p className='pb-1 font-medium text-gray-900'>Jenny Wilson</p>
                  <p className='text-sm text-gray-600'>life blogger</p>
                </div>
              </div>
              <p className='heading-4 text-[#E31C79]'>$245</p>
            </div>

            {/* Form Fields */}
            <div className='relative'>
              <div className='rounded-2xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 px-4 py-3'>
                <input
                  type='date'
                  {...register('date')}
                  min={currentDate}
                  className='w-full bg-transparent outline-none focus:ring-2 focus:ring-[#E31C79]'
                />
              </div>
              {errors.date && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.date.message}
                </p>
              )}
            </div>

            <div className='relative'>
              <div className='rounded-2xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 px-4 py-3'>
                <input
                  type='time'
                  {...register('time')}
                  min={isToday ? currentTime : undefined}
                  className='w-full bg-transparent outline-none focus:ring-2 focus:ring-[#E31C79]'
                />
              </div>
              {errors.time && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.time.message}
                </p>
              )}
            </div>

            <div className='relative'>
              <div className='rounded-2xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 px-4 py-3'>
                <textarea
                  {...register('message')}
                  placeholder='Message'
                  className='min-h-[150px] w-full bg-transparent outline-none focus:ring-2 focus:ring-[#E31C79]'
                ></textarea>
              </div>
              {errors.message && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='relative flex items-center justify-center overflow-hidden rounded-xl bg-[#1B3B86] px-4 py-2 font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-[#E31C79] after:duration-700 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
            >
              <span className='relative z-10'>Hire Me</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default HireMe
