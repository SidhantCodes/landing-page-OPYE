import styles from "../styles/SearchButton.module.css"

const SearchButton = () => {
  return (
    <button className={`${styles.searchdestbtn} w-[200px]`}>
      Search Destination
    </button>
  )
}

export default SearchButton