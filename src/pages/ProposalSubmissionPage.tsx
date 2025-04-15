import { useState, FormEvent, ChangeEvent } from 'react'
import { Link } from 'react-router'
import clientProfileImg from '../assets/images/people_small2.png'
import stepsIcon from '../assets/images/steps_icon.png'
import logo from '../assets/images/logo.png'

// Type definitions
type ServiceType =
  | 'plumbing'
  | 'electrical'
  | 'carpentry'
  | 'cleaning'
  | 'painting'
  | 'general'

type BudgetType = 'fixed' | 'hourly'
type DurationType = 'hours' | 'days' | 'weeks'
type AttachmentType = 'image' | 'document' | 'other'
type MilestoneStatus = 'pending' | 'in_progress' | 'completed' | 'paid'

// Interface definitions
interface TaskClient {
  id: string
  name: string
  location: string
  rating: number
  isVerified: boolean
  tasksPosted: number
  avatarUrl?: string
}

interface TaskBudget {
  amount: string
  currency: string
  type: BudgetType
}

interface Task {
  id: string
  title: string
  description: string
  serviceType: ServiceType
  budget: TaskBudget
  client: TaskClient
  postedDate: string
  deadline: string
}

interface Attachment {
  id: string
  name: string
  type: AttachmentType
  size: number
  url: string
}

interface Milestone {
  id: string
  title: string
  description: string
  amount: number
  dueDate: string
  status: MilestoneStatus
}

interface ProposalFormData {
  taskId: string
  price: string
  priceType: BudgetType
  duration: string
  durationType: DurationType
  coverLetter: string
  questions: string
  attachments: Attachment[]
  useMilestones: boolean
  milestones: Milestone[]
}

const ProposalSubmissionPage = () => {
  const [step, setStep] = useState<number>(1)

  // Mock task data - in a real app, this would come from API/props
  const task: Task = {
    id: 'TASK-12345',
    title: 'Fix Leaking Bathroom Tap and Replace Shower Head',
    description:
      "I have a leaking tap in the master bathroom that needs to be fixed as soon as possible. It's dripping constantly and wasting water. Additionally, I'd like to replace the old shower head with a new one that I've already purchased.",
    serviceType: 'plumbing',
    budget: {
      amount: '500-800',
      currency: 'XAF',
      type: 'fixed',
    },
    client: {
      id: 'CLIENT-789',
      name: 'Amara Okafor',
      location: 'Addis Ababa, Ethiopia',
      rating: 4.8,
      isVerified: true,
      tasksPosted: 12,
      avatarUrl: clientProfileImg,
    },
    postedDate: '2025-04-10',
    deadline: '2025-04-20',
  }

  // Initialize form state
  const initialFormData: ProposalFormData = {
    taskId: task.id,
    price: '',
    priceType: task.budget.type,
    duration: '',
    durationType: 'days',
    coverLetter: '',
    questions: '',
    attachments: [],
    useMilestones: false,
    milestones: [
      {
        id: '1',
        title: 'Initial assessment',
        description: 'Inspect the bathroom tap and shower head',
        amount: 0,
        dueDate: '',
        status: 'pending',
      },
    ],
  }

  const [formData, setFormData] = useState<ProposalFormData>(initialFormData)

  // Handle form input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle milestone changes
  const handleMilestoneChange = (
    index: number,
    field: keyof Milestone,
    value: string | number
  ) => {
    const updatedMilestones = [...formData.milestones]
    updatedMilestones[index] = {
      ...updatedMilestones[index],
      [field]: value,
    }
    setFormData((prev) => ({
      ...prev,
      milestones: updatedMilestones,
    }))
  }

  // Add new milestone
  const addMilestone = () => {
    const newId = (formData.milestones.length + 1).toString()
    setFormData((prev) => ({
      ...prev,
      milestones: [
        ...prev.milestones,
        {
          id: newId,
          title: '',
          description: '',
          amount: 0,
          dueDate: '',
          status: 'pending',
        },
      ],
    }))
  }

  // Remove milestone
  const removeMilestone = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      milestones: prev.milestones.filter((_, i) => i !== index),
    }))
  }

  // Handle file upload
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newAttachments: Attachment[] = Array.from(files).map(
      (file, index) => ({
        id: `file-${Date.now()}-${index}`,
        name: file.name,
        type: file.type.startsWith('image/')
          ? 'image'
          : file.type.includes('pdf')
          ? 'document'
          : 'other',
        size: file.size,
        url: URL.createObjectURL(file),
      })
    )

    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...newAttachments],
    }))
  }

  // Remove attachment
  const removeAttachment = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter(
        (attachment) => attachment.id !== id
      ),
    }))
  }

  // Handle form navigation
  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3))
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Proposal submitted:', formData)
    // In a real app, you would send this data to an API
    alert('Your proposal has been submitted successfully!')
    // Redirect to the task page or dashboard
  }

  // Render step indicator
  const renderStepIndicator = () => (
    <div className='col-span-12 md:col-span-4 xl:col-span-3 xl:col-start-2'>
      <div className='rounded-3xl border border-n30 p-4 sm:p-8'>
        <ul className='flex flex-col gap-8'>
          {[
            { number: 1, title: 'Pricing & Timeline' },
            { number: 2, title: 'Proposal Details' },
            { number: 3, title: 'Review & Submit' },
          ].map((item, index) => (
            <li key={item.number} className='relative'>
              <div
                className={`flex w-full items-center justify-start gap-4 rounded-full ${
                  step === item.number ? 'bg-b50' : ''
                } p-2`}
              >
                <div
                  className={`flex size-9 items-center justify-center rounded-full 
                  ${
                    step > item.number
                      ? 'bg-b300 text-white'
                      : step === item.number
                      ? 'bg-b300 text-white'
                      : 'border-2 border-n300 text-n300'
                  } p-2 !leading-none`}
                >
                  {step > item.number ? (
                    <i className='ph-bold ph-check'></i>
                  ) : (
                    <span className='text-sm'>{item.number}</span>
                  )}
                </div>
                <p
                  className={`text-sm font-medium ${
                    step === item.number ? '' : 'text-n300'
                  }`}
                >
                  {item.title}
                </p>
              </div>
              {index < 2 && (
                <img
                  src={stepsIcon}
                  className='absolute -bottom-8 left-6'
                  alt=''
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Task Summary Card */}
      <div className='mt-6 rounded-3xl border border-n30 p-4 sm:p-6'>
        <h5 className='heading-5 mb-4'>Task Summary</h5>
        <div className='flex items-center gap-2 text-b300 mb-2'>
          <i
            className={`ph-fill ${
              task.serviceType === 'plumbing' ? 'ph-drop' : 'ph-tools'
            } text-xl`}
          ></i>
          <span className='font-medium'>
            {task.serviceType.charAt(0).toUpperCase() +
              task.serviceType.slice(1)}
          </span>
        </div>
        <h6 className='heading-6 mb-3'>{task.title}</h6>
        <div className='flex items-center justify-start gap-3 mb-4'>
          <div className='flex items-center gap-2'>
            <i className='ph-fill ph-currency-dollar text-sm'></i>
            <span className='text-sm text-n300'>
              {task.budget.amount} {task.budget.currency}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='ph-fill ph-calendar text-sm'></i>
            <span className='text-sm text-n300'>Due {task.deadline}</span>
          </div>
        </div>
        <div className='flex items-center gap-3 border-t border-n30 pt-4'>
          <img
            src={task.client.avatarUrl || clientProfileImg}
            alt={task.client.name}
            className='w-8 h-8 rounded-full'
          />
          <div>
            <p className='text-sm font-medium'>{task.client.name}</p>
            <p className='text-xs text-n300'>{task.client.location}</p>
          </div>
        </div>
      </div>
    </div>
  )

  // Render Step 1: Pricing & Timeline
  const renderStep1 = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
        <h4 className='heading-4'>Set your pricing and timeline</h4>
        <p className='text-n300 mt-2'>
          Provide a competitive offer based on the task requirements
        </p>

        {/* Price Section */}
        <div className='pt-8'>
          <p className='pb-4 font-medium text-n300'>Your Price Offer*</p>
          <div className='flex flex-wrap gap-4'>
            <div className='flex items-center gap-2 rounded-xl bg-n30 px-3 py-3 w-full max-w-[200px]'>
              <span className='text-n300'>{task.budget.currency}</span>
              <input
                type='number'
                name='price'
                value={formData.price}
                onChange={handleInputChange}
                placeholder='Amount'
                required
                className='w-full bg-transparent outline-none'
              />
            </div>
            <select
              name='priceType'
              value={formData.priceType}
              onChange={handleInputChange}
              className='rounded-xl bg-n30 px-3 py-3 outline-none'
            >
              <option value='fixed'>Fixed Price</option>
              <option value='hourly'>Hourly Rate</option>
            </select>
          </div>

          {/* Suggested price range */}
          <div className='mt-2'>
            <p className='text-sm text-n300'>
              <i className='ph-fill ph-info mr-1'></i>
              Client's budget: {task.budget.amount} {task.budget.currency} (
              {task.budget.type === 'fixed' ? 'Fixed Price' : 'Hourly Rate'})
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className='pt-8'>
          <p className='pb-4 font-medium text-n300'>Estimated Duration*</p>
          <div className='flex flex-wrap gap-4'>
            <input
              type='number'
              name='duration'
              value={formData.duration}
              onChange={handleInputChange}
              placeholder='Duration'
              required
              className='rounded-xl bg-n30 px-3 py-3 w-full max-w-[200px] outline-none'
            />
            <select
              name='durationType'
              value={formData.durationType}
              onChange={handleInputChange}
              className='rounded-xl bg-n30 px-3 py-3 outline-none'
            >
              <option value='days'>Days</option>
              <option value='hours'>Hours</option>
              <option value='weeks'>Weeks</option>
            </select>
          </div>
        </div>

        {/* Milestone Option */}
        <div className='pt-8'>
          <div className='flex items-center gap-3'>
            <input
              type='checkbox'
              id='useMilestones'
              checked={formData.useMilestones}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  useMilestones: e.target.checked,
                }))
              }
              className='h-4 w-4'
            />
            <label htmlFor='useMilestones' className='font-medium'>
              Break down this project into milestones (recommended)
            </label>
          </div>
          <p className='text-sm text-n300 mt-1 ml-7'>
            Milestones help clients track progress and allow you to get paid as
            you complete parts of the project
          </p>
        </div>

        {/* Milestone Configuration (if enabled) */}
        {formData.useMilestones && (
          <div className='pt-6'>
            <p className='pb-4 font-medium text-n300'>Milestone Breakdown*</p>
            {formData.milestones.map((milestone, index) => (
              <div key={milestone.id} className='mb-4 p-4 bg-n30 rounded-xl'>
                <div className='flex justify-between items-center'>
                  <p className='font-medium'>Milestone {index + 1}</p>
                  {formData.milestones.length > 1 && (
                    <button
                      type='button'
                      onClick={() => removeMilestone(index)}
                      className='text-r300'
                    >
                      <i className='ph-bold ph-x'></i>
                    </button>
                  )}
                </div>
                <div className='mt-3'>
                  <input
                    type='text'
                    value={milestone.title}
                    onChange={(e) =>
                      handleMilestoneChange(index, 'title', e.target.value)
                    }
                    placeholder='Milestone title'
                    className='w-full bg-white rounded-lg px-3 py-2 outline-none mb-2'
                  />
                  <textarea
                    value={milestone.description}
                    onChange={(e) =>
                      handleMilestoneChange(
                        index,
                        'description',
                        e.target.value
                      )
                    }
                    placeholder='Describe what you will deliver in this milestone'
                    className='w-full bg-white rounded-lg px-3 py-2 outline-none mb-2 min-h-[80px]'
                  ></textarea>
                  <div className='flex gap-4'>
                    <div className='flex-1'>
                      <p className='text-sm text-n300 mb-1'>
                        Amount ({task.budget.currency})
                      </p>
                      <input
                        type='number'
                        value={milestone.amount}
                        onChange={(e) =>
                          handleMilestoneChange(
                            index,
                            'amount',
                            parseFloat(e.target.value)
                          )
                        }
                        placeholder='Amount'
                        className='w-full bg-white rounded-lg px-3 py-2 outline-none'
                      />
                    </div>
                    <div className='flex-1'>
                      <p className='text-sm text-n300 mb-1'>Due Date</p>
                      <input
                        type='date'
                        value={milestone.dueDate}
                        onChange={(e) =>
                          handleMilestoneChange(
                            index,
                            'dueDate',
                            e.target.value
                          )
                        }
                        className='w-full bg-white rounded-lg px-3 py-2 outline-none'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              type='button'
              onClick={addMilestone}
              className='text-b300 flex items-center gap-2'
            >
              <i className='ph-bold ph-plus'></i>
              Add Another Milestone
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className='flex items-center justify-end gap-4 mt-8'>
          <Link
            to={`/task-details`}
            className='relative flex items-center justify-center overflow-hidden rounded-full bg-n30 px-6 py-3 text-lg font-medium duration-700 hover:bg-n50'
          >
            Cancel
          </Link>
          <button
            type='button'
            onClick={handleNext}
            className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-6 py-3 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
          >
            <span className='relative z-10'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )

  // Render Step 2: Proposal Details
  const renderStep2 = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
        <h4 className='heading-4'>Proposal Details</h4>
        <p className='text-n300 mt-2'>
          Tell the client why you're the right person for this task
        </p>

        {/* Cover Letter */}
        <div className='pt-8'>
          <p className='pb-4 font-medium text-n300'>Cover Letter*</p>
          <textarea
            name='coverLetter'
            value={formData.coverLetter}
            onChange={handleInputChange}
            placeholder="Introduce yourself and explain why you're the best fit for this task. Include relevant experience, qualifications, or examples of similar work you've done."
            required
            rows={8}
            className='w-full rounded-2xl bg-n30 p-3 outline-none'
          ></textarea>
          <p className='text-sm text-n300 mt-2'>
            <i className='ph-fill ph-info mr-1'></i>
            Personalized proposals are 3x more likely to win projects
          </p>
        </div>

        {/* Questions for Client */}
        <div className='pt-8'>
          <p className='pb-4 font-medium text-n300'>
            Questions for the Client (Optional)
          </p>
          <textarea
            name='questions'
            value={formData.questions}
            onChange={handleInputChange}
            placeholder='Do you have any questions for the client about the task? Ask for clarification on any details you need to complete the work successfully.'
            rows={4}
            className='w-full rounded-2xl bg-n30 p-3 outline-none'
          ></textarea>
        </div>

        {/* Attachments */}
        <div className='pt-8'>
          <p className='pb-4 font-medium text-n300'>Attachments (Optional)</p>
          <div className='flex flex-col gap-4'>
            {/* File upload button */}
            <label className='flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-n30 p-8 cursor-pointer hover:border-b300 transition-colors'>
              <i className='ph-bold ph-upload-simple text-2xl text-b300'></i>
              <span className='font-medium'>
                Upload files to support your proposal
              </span>
              <input
                type='file'
                multiple
                onChange={handleFileUpload}
                className='hidden'
              />
            </label>

            {/* Display uploaded files */}
            {formData.attachments.length > 0 && (
              <div className='flex flex-col gap-2 mt-2'>
                {formData.attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className='flex justify-between items-center bg-n30 rounded-xl p-3'
                  >
                    <div className='flex items-center gap-3'>
                      <i
                        className={`ph-fill ${
                          attachment.type === 'image'
                            ? 'ph-image'
                            : attachment.type === 'document'
                            ? 'ph-file-pdf'
                            : 'ph-file'
                        } text-xl text-b300`}
                      ></i>
                      <div>
                        <p className='font-medium text-sm'>{attachment.name}</p>
                        <p className='text-xs text-n300'>
                          {(attachment.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      type='button'
                      onClick={() => removeAttachment(attachment.id)}
                      className='text-r300'
                    >
                      <i className='ph-bold ph-x'></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className='flex items-center justify-between gap-4 mt-8'>
          <button
            type='button'
            onClick={handleBack}
            className='relative flex items-center justify-center overflow-hidden rounded-full bg-n30 px-6 py-3 text-lg font-medium duration-700 hover:bg-n50'
          >
            <span className='relative z-10'>Back</span>
          </button>
          <button
            type='button'
            onClick={handleNext}
            className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-6 py-3 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
          >
            <span className='relative z-10'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )

  // Render Step 3: Review & Submit
  const renderStep3 = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <form onSubmit={handleSubmit}>
        <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
          <h4 className='heading-4'>Review Your Proposal</h4>
          <p className='text-n300 mt-2'>
            Make sure everything looks good before submitting
          </p>

          {/* Price and Timeline Summary */}
          <div className='pt-8 border-b border-n30 pb-6'>
            <h5 className='heading-5 mb-4'>Pricing & Timeline</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <p className='text-sm text-n300'>Your Offer</p>
                <p className='font-medium text-lg'>
                  {formData.price} {task.budget.currency} (
                  {formData.priceType === 'fixed'
                    ? 'Fixed Price'
                    : 'Hourly Rate'}
                  )
                </p>
              </div>
              <div>
                <p className='text-sm text-n300'>Estimated Duration</p>
                <p className='font-medium text-lg'>
                  {formData.duration} {formData.durationType}
                </p>
              </div>
            </div>

            {/* Milestone Summary */}
            {formData.useMilestones && formData.milestones.length > 0 && (
              <div className='mt-4'>
                <p className='text-sm text-n300 mb-2'>Payment Milestones</p>
                <div className='bg-n30 rounded-xl p-4'>
                  {formData.milestones.map((milestone, index) => (
                    <div
                      key={milestone.id}
                      className={`flex justify-between ${
                        index > 0 ? 'border-t border-n50 pt-3 mt-3' : ''
                      }`}
                    >
                      <div>
                        <p className='font-medium'>
                          {milestone.title || `Milestone ${index + 1}`}
                        </p>
                        <p className='text-sm text-n300'>
                          {milestone.dueDate
                            ? `Due: ${milestone.dueDate}`
                            : 'No due date set'}
                        </p>
                      </div>
                      <p className='font-medium'>
                        {milestone.amount} {task.budget.currency}
                      </p>
                    </div>
                  ))}
                  <div className='border-t border-n50 pt-3 mt-3 flex justify-between'>
                    <p className='font-bold'>Total</p>
                    <p className='font-bold'>
                      {formData.milestones.reduce(
                        (total, m) => total + (m.amount || 0),
                        0
                      )}{' '}
                      {task.budget.currency}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cover Letter Summary */}
          <div className='pt-6 border-b border-n30 pb-6'>
            <h5 className='heading-5 mb-4'>Cover Letter</h5>
            <p className='whitespace-pre-wrap text-n300'>
              {formData.coverLetter}
            </p>
          </div>

          {/* Questions Summary (if any) */}
          {formData.questions && (
            <div className='pt-6 border-b border-n30 pb-6'>
              <h5 className='heading-5 mb-4'>Questions for the Client</h5>
              <p className='whitespace-pre-wrap text-n300'>
                {formData.questions}
              </p>
            </div>
          )}

          {/* Attachments Summary (if any) */}
          {formData.attachments.length > 0 && (
            <div className='pt-6 border-b border-n30 pb-6'>
              <h5 className='heading-5 mb-4'>
                Attachments ({formData.attachments.length})
              </h5>
              <div className='flex flex-wrap gap-2'>
                {formData.attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className='flex items-center gap-2 bg-n30 rounded-lg p-2'
                  >
                    <i
                      className={`ph-fill ${
                        attachment.type === 'image'
                          ? 'ph-image'
                          : attachment.type === 'document'
                          ? 'ph-file-pdf'
                          : 'ph-file'
                      } text-b300`}
                    ></i>
                    <span className='text-sm'>{attachment.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Service Fee Notice */}
          <div className='pt-6'>
            <div className='bg-b50 rounded-xl p-4'>
              <p className='text-sm font-medium'>
                <i className='ph-fill ph-info text-b300 mr-1'></i>
                Bollo service fee: 5% of the total amount you'll receive
              </p>
            </div>
          </div>

          {/* Terms Acceptance */}
          <div className='pt-6 flex items-start gap-3'>
            <input type='checkbox' id='termsAccept' required className='mt-1' />
            <label htmlFor='termsAccept' className='text-sm text-n300'>
              By submitting this proposal, I agree to Bollo's Terms of Service
              and confirm that I understand the scope of work and can deliver as
              promised.
            </label>
          </div>

          {/* Navigation Buttons */}
          <div className='flex items-center justify-between gap-4 mt-8'>
            <button
              type='button'
              onClick={handleBack}
              className='relative flex items-center justify-center overflow-hidden rounded-full bg-n30 px-6 py-3 text-lg font-medium duration-700 hover:bg-n50'
            >
              <span className='relative z-10'>Back</span>
            </button>
            <button
              type='submit'
              className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-6 py-3 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
            >
              <span className='relative z-10'>Submit Proposal</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )

  return (
    <section>
      <div className='4xl:large-container flex items-center justify-between pt-6 max-4xl:container'>
        <Link to='/'>
          <img src={logo} alt='Bollo logo' className='w-auto h-14' />
        </Link>
        <Link
          to={`/task-details`}
          className='flex items-center justify-start gap-2 text-lg font-medium duration-500 hover:text-r300'
        >
          Cancel <i className='ph-bold ph-x !leading-none'></i>
        </Link>
      </div>

      <div className='stp-30 container grid grid-cols-12 gap-6'>
        {renderStepIndicator()}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
    </section>
  )
}

export default ProposalSubmissionPage
