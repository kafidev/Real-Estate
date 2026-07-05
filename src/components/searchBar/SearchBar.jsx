import "./searchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="type">
        <button>Buy</button>
        <button>Rent</button>
      </div>
      <form>
        <input type="text" placeholder="city Location" />
        <input type="number" min={0} max={1000000} placeholder="Min Price" />
        <input type="number" min={0} max={1000000} placeholder="Max Price" />
      </form>
    </div>
  )
}

export default SearchBar;