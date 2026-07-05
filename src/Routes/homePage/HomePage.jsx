import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Your Dream Home 
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            magnam deleniti sint explicabo animi ullam itaque molestias, sed
            eveniet ipsam dolore nobis amet quam autem numquam facere debitis
            fugit distinctio.
          </p>
        {/* search sidebar */}
          <SearchBar/>
          {/*  */}
          <div className="boxes">
            {/* box 1 */}
            <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
            </div>
            {/* box 1 end */}
            {/* box 2 */}
            <div className="box">
                <h1>200</h1>
                <h2>Properties Sold</h2>
            </div>
            {/* box 2 end */}
            {/* box 3 */}
            <div className="box">
                <h1>100%</h1>
                <h2>Client Satisfaction</h2>
            </div>
            {/* box 3 end */}
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg1.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
