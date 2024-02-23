import HottestDeals from '@/components/HottestDeals'
import Landing from '@/components/Landing'
import PopularDest from '@/components/PopularDest'
import TravellerExpirience from '@/components/TravellerExpirience'


const Home = () => {
  return (
    <section className="home" id="home">
      <Landing />
      <PopularDest />
      <TravellerExpirience />
      <HottestDeals/>
    </section>
)
}

export default Home
