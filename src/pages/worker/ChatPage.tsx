import chatOne from '../../assets/images/chat1.png'
import chatTwo from '../../assets/images/chat2.png'

const ChatPage = () => {
  return (
    <section className='sbp-30 mt-[100px]'>
      <div className='container grid grid-cols-12 rounded-xl border shadow-[0px_4px_26px_0px_rgba(222,222,222,0.25)] sm:mt-28 lg:rounded-2xl'>
        {/* Sidebar */}
        <div
          id='chatSidebar'
          className='chatSidebarClose border-r bg-white py-8 duration-500 max-lg:absolute lg:col-span-3'
        >
          <div className='flex items-center justify-between px-6 pb-5'>
            <div className='flex items-center justify-start gap-3'>
              <img
                src={chatOne}
                alt='user avatar'
                className='h-12 w-12 rounded-xl shadow-[0px_4px_9px_0px_rgba(79,70,229,0.39)]'
              />
              <h5 className='heading-5 text-indigo-900'>Chat</h5>
            </div>
            <div className='flex items-center justify-end gap-2'>
              <i className='ph-fill ph-dots-three-outline block cursor-pointer rounded-xl bg-indigo-50 px-2 text-2xl text-indigo-900'></i>
              <i
                id='chatSidebarClose'
                className='ph ph-x-circle block cursor-pointer text-2xl text-indigo-900 lg:hidden'
              ></i>
            </div>
          </div>

          {/* Search */}
          <div className='mx-6 flex items-center justify-start gap-2 rounded-xl bg-indigo-50 px-5 py-3'>
            <i className='ph ph-magnifying-glass block text-xl text-indigo-400'></i>
            <input
              placeholder='Search'
              className='w-full bg-transparent outline-none placeholder:text-indigo-400'
            />
          </div>

          {/* Chat List */}
          <div className='flex max-h-[460px] flex-col overflow-auto pt-5'>
            {[
              {
                name: 'Piter Maio',
                message: 'I am a ga..',
                time: '15min',
                notify: true,
              },
              { name: 'Leslie Alexander', message: 'Why...', time: '12min' },
              { name: 'Sa Kib', message: 'Hello...', time: '25min' },
              {
                name: 'Brooklyn Simmons',
                message: 'Duis tincid',
                time: '18min',
                notify: true,
              },
              { name: 'Duclair Fopa', message: 'I am...', time: '20mins' },
              { name: 'Stael Fouwa', message: 'How are...', time: '19mins' },
            ].map((chat, index) => (
              <div
                key={index}
                className='flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-indigo-50 transition-colors'
              >
                <img
                  alt={chat.name}
                  src={chatTwo}
                  className='h-12 w-12 rounded-xl'
                />
                <div>
                  <div className='flex items-center justify-start gap-2 pb-1'>
                    <p className='text-indigo-900'>{chat.name}</p>
                    {chat.notify && (
                      <p className='rounded-full bg-pink-600 px-1.5 py-1 text-sm font-medium !leading-none text-white'>
                        3
                      </p>
                    )}
                  </div>
                  <div className='flex items-center justify-start text-sm'>
                    <p className='text-indigo-400'>{chat.message}</p>
                    <p className='flex items-center justify-start pl-2'>
                      <span className='block h-2 w-2 rounded-full bg-indigo-200'></span>
                      <span className='block pl-1 !leading-none text-indigo-400'>
                        {chat.time}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className='col-span-12 lg:col-span-9'>
          {/* Chat Header */}
          <div className='flex items-center justify-between border-b bg-indigo-50 px-4 py-5 sm:px-6'>
            <div className='flex items-center justify-start gap-2'>
              <i
                id='chatSidebarOpen'
                className='ph ph-list cursor-pointer text-2xl text-indigo-900 lg:hidden'
              ></i>
              <img
                alt='user avatar'
                className='h-12 w-12 rounded-xl shadow-[0px_4px_9px_0px_rgba(79,70,229,0.39)]'
                src={chatOne}
              />
              <div>
                <p className='text-indigo-900'>Piter Maio</p>
                <p className='text-sm text-emerald-500'>online</p>
              </div>
            </div>
            <div className='text-indigo-900'>
              <i className='ph ph-phone cursor-pointer pr-3 text-xl hover:text-pink-600 transition-colors'></i>
              <i className='ph ph-video-camera cursor-pointer text-xl hover:text-pink-600 transition-colors'></i>
            </div>
          </div>

          {/* Messages */}
          <div className='flex flex-col items-center justify-between gap-7 p-6'>
            {/* Received Message */}
            <div className='flex w-full items-start justify-start gap-2'>
              <img
                alt='user avatar'
                className='h-10 w-10 rounded-xl'
                src={chatTwo}
              />
              <div className='rounded-b-xl rounded-tr-xl bg-indigo-100 px-5 py-3'>
                <p className='text-base text-indigo-900'>
                  Hello! Have you seen my backpack anywhere in office?
                </p>
                <p className='text-sm text-indigo-400'>15:42</p>
              </div>
            </div>

            {/* Sent Message */}
            <div className='flex w-full flex-row-reverse items-end justify-start gap-2'>
              <img
                alt='user avatar'
                className='h-10 w-10 rounded-xl'
                src={chatOne}
              />
              <div className='rounded-b-xl rounded-tr-xl bg-pink-600 px-5 py-3 text-white'>
                <p className='text-base'>Thank you for work, see you!</p>
                <p className='text-sm text-white/50'>
                  <i className='ri-check-double-line pr-1'></i>15:42
                </p>
              </div>
            </div>

            {/* Received Message */}
            <div className='flex w-full items-start justify-start gap-2'>
              <img
                alt='user avatar'
                className='h-10 w-10 rounded-xl'
                src={chatTwo}
              />
              <div className='rounded-b-xl rounded-tr-xl bg-indigo-100 px-5 py-3'>
                <p className='max-w-[500px] text-base text-indigo-900'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <p className='text-sm text-indigo-400'>15:42</p>
              </div>
            </div>

            {/* Sent Message */}
            <div className='flex w-full flex-row-reverse items-end justify-start gap-2'>
              <img
                alt='user avatar'
                className='h-10 w-10 rounded-xl'
                src={chatTwo}
              />
              <div className='rounded-b-xl rounded-tr-xl bg-pink-600 px-5 py-3 text-white'>
                <p className='text-base'>A page when looking at its layout.</p>
                <p className='text-sm text-white/50'>
                  <i className='ri-check-double-line pr-1'></i>15:42
                </p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className='mx-6 mb-7 rounded-xl px-4 pb-5 max-lg:md:pt-3 lg:rounded-2xl'>
            <div className='flex items-center justify-between gap-4 pt-2 max-md:flex-col lg:pt-6'>
              <div>
                <img
                  alt='user pic'
                  className='max-w-[60px] rounded-xl object-cover max-md:hidden'
                  src={chatOne}
                />
              </div>
              <div className='flex w-full items-center justify-between gap-4 rounded-xl bg-indigo-50 p-4 max-md:flex-col lg:rounded-2xl'>
                <input
                  className='w-full bg-transparent outline-none placeholder:text-indigo-400'
                  placeholder='Write a comment....'
                />
                <div className='text-indigo-400 flex items-center justify-between gap-1 text-2xl max-md:hidden xl:gap-3'>
                  <div className='cursor-pointer hover:text-pink-600 transition-colors'>
                    <label htmlFor='chat-file-file'>
                      <i className='ph ph-image cursor-pointer'></i>
                    </label>
                    <input className='hidden' id='chat-file-file' type='file' />
                  </div>
                  <button className='ph ph-gif hover:text-pink-600 transition-colors'></button>
                  <button className='ph ph-smiley hover:text-pink-600 transition-colors'></button>
                </div>
              </div>
              <div className='flex items-center justify-end gap-4 max-md:w-full'>
                {/* Mobile Action Buttons */}
                <div className='text-indigo-400 flex items-center justify-between gap-3 text-2xl md:hidden'>
                  <div className='cursor-pointer hover:text-pink-600 transition-colors'>
                    <label htmlFor='chat-file'>
                      <i className='ph ph-image cursor-pointer'></i>
                    </label>
                    <input className='hidden' id='chat-file' type='file' />
                  </div>
                  <button className='ph ph-gif hover:text-pink-600 transition-colors'></button>
                  <button className='ph ph-smiley hover:text-pink-600 transition-colors'></button>
                </div>
                {/* Send Button */}
                <button className='l-body rounded-xl bg-indigo-900 px-6 py-2 text-2xl !leading-none text-white duration-500 hover:bg-pink-600 md:px-8 md:py-4'>
                  <i className='ph-bold ph-paper-plane-tilt'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatPage
