import Nav from '../components/Nav'
import Header from '../components/Header'
import TwoGridSection from '../components/TwoGridSection'

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <TwoGridSection reverse={true} />
    </>
  )
}
