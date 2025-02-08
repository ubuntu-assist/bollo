import blogPostImage1 from '../../assets/images/blog-post-image-1.png'
import blogPostImage2 from '../../assets/images/blog-post-image-2.png'
import blogPostImage3 from '../../assets/images/blog-post-image-3.png'

const RecentPostsSection = () => {
  const blogPosts = [
    {
      image: blogPostImage1,
      title: 'Exploring Service Success Stories',
      delay: '0',
    },
    {
      image: blogPostImage2,
      title: 'Stories of Triumph in the On-Demand Era',
      delay: '200',
    },
    {
      image: blogPostImage3,
      title: 'Journey Through Service Experiences',
      delay: '400',
    },
  ]

  return (
    <section className='stp-30 sbp-30 bg-gray-50'>
      <div className='container'>
        {/* Header */}
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-col'>
            <h2 className='heading-2 font-bold text-gray-900'>
              Recent <span className='text-[#1B3B86] underline'>Posts</span>
            </h2>
            <p className='pt-4 font-medium text-gray-500'>
              Read the recent articles from our blog.
            </p>
          </div>
          <div>
            <a
              href='./blog'
              className='flex items-center justify-start gap-3 font-bold text-[#1B3B86] hover:text-[#E31C79] duration-300'
            >
              All Articles
              <i className='ph-bold ph-arrow-right text-2xl !leading-none'></i>
            </a>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className='stp-15 grid grid-cols-12 gap-6'>
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className='group col-span-12 sm:col-span-6 lg:col-span-4'
              data-aos='flip-right'
              data-aos-duration='1000'
              data-aos-delay={post.delay}
            >
              {/* Image Container */}
              <div className='relative'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full rounded-xl'
                />
                <p className='absolute bottom-3 left-3 rounded-2xl bg-[#1B3B86]/10 px-6 py-2 text-sm text-[#1B3B86] font-medium'>
                  Tips & Tricks
                </p>
              </div>

              {/* Content Container */}
              <div className='rounded-2xl bg-white border border-[#1B3B86]/10 px-6 py-5 duration-500 group-hover:bg-[#1B3B86]/5'>
                <a href='./blog-details'>
                  <h4 className='heading-4 pb-3 text-gray-900 group-hover:text-[#1B3B86]'>
                    {post.title}
                  </h4>
                </a>
                <div className='flex items-center justify-between'>
                  <p className='text-sm font-medium text-gray-500'>
                    Latest News December <br />
                    12, 2024
                  </p>
                  <a
                    href='./blog-details'
                    className='flex items-center justify-center rounded-full bg-[#1B3B86] p-2 text-2xl !leading-none text-white duration-500 group-hover:bg-[#E31C79] group-hover:rotate-45'
                  >
                    <i className='ph ph-arrow-up-right'></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentPostsSection
