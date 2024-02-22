
const Search = () => {
  return (
    <form>
      <div className="searchdest">
        <input type="text" required="required" name="search_dest" id="search_dest"  placeholder="Enter Location" className="w-[200px] sm:w-[25vw]"/>
        {/* <span>Enter Location</span> */}
      </div>
    </form>
  )
}

export default Search
