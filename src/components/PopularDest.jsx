import DestCardFrame from "./DestCardFrame"
import styles from "../styles/PopularDest.module.css"

const PopularDest = () => {
  return (
    <section className="pop_dest" id="pop_dest">
      <div className={`${styles.subheadtext}`}>
        Popular Destinations
      </div>
      <div className={`${styles.destination}`}>
        <DestCardFrame />
      </div>
    </section>
  )
}

export default PopularDest
