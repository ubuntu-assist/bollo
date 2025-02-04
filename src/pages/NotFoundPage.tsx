const NotFoundPage = () => {
  return (
    <section className='stp-30 flex h-full w-full flex-col items-center justify-center'>
      <div className=''>
        <img src='./assets/images/not-found-img.png' alt='' />
      </div>
      <div className='stp-15 flex flex-col items-center justify-center text-center'>
        <h2 className='heading-2'>Page Not Found</h2>
        <p className='pb-10 pt-3'>
          The page you are looking for doesn't exist or has been moved
        </p>

        <a
          href='./index.html'
          className='relative flex max-w-[300px] items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
        >
          <span className='relative z-10'>Back To Home</span>
        </a>
      </div>
    </section>
  )
}

export default NotFoundPage
