import {
  FixedPriceServiceSection,
  GetWorkersGigs,
  HeroSection,
  HowItWorksSection,
  LookingForServiceSection,
  NewsletterSection,
  RecentPostsSection,
  ReviewSection,
  SecureGuardSection,
  TopExpertsSection,
} from '../components'

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FixedPriceServiceSection />
      <TopExpertsSection />
      <LookingForServiceSection />
      <NewsletterSection />
      <SecureGuardSection />
      <ReviewSection />
      <GetWorkersGigs />
      <RecentPostsSection />
    </>
  )
}

export default Home
