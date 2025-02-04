import {
  FixedPriceServiceSection,
  GetHelpTodaySection,
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
      <GetHelpTodaySection />
    </>
  )
}

export default Home
