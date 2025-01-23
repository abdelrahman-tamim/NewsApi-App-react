import "./BackGround.css";
import Nav from "./Nav";
const BackGround = () => {
  return (
    <>
      <div className="nav-div">
        <img className="logo" src="./src/images/NEWSLETTER.PNG" alt="" />
        <input type="search" placeholder="Search For Headlines"/>
        <button>Search</button>
        <Nav/>
      </div>
      <div></div>
    </>
  );
};

export default BackGround;
