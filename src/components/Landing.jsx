import Search from "./Search"
import SearchButton from "./SearchButton"
import styles from "../styles/Landing.module.css"

const Landing = () => {
  return (
    <section className={`${styles.home}`} id="home">
      <div className={`${styles.headText}`}>
        OPYE
      </div>
      <div className={`${styles.subText}`}>
        <p>Our Planning Your Experience</p>
      </div>
      <div className={`${styles.desc}`}>
        <p>
          Are you ready to embark on the adventure of a lifetime? At Our Planning Your Experience, we believe that travel is more than just a journey; it's a way to create lasting memories, discover new cultures, and enrich your life.
        </p>
      </div>
      <div className={`${styles.search}`}>
        <Search />
        <SearchButton />
      </div>
    </section>
  )
}

export default Landing