import {
  ChartArea,
  TodoOrderSection,
  UserInformation,
} from '../../features/dashboard'

const Home = () => {
  return (
    <>
      <UserInformation />
      <ChartArea />
      <TodoOrderSection />
    </>
  )
}

export default Home
