import {React,useContext} from "react";
import BCKVID from "../assets/backgroundVideo.mp4"
import { Link } from "react-router-dom";
 import { AuthContext } from "../AuthContext";

const Content = () => {
   const {loggedIn}=useContext(AuthContext);
  //  useEffect(() => {
  //   const btn = document.querySelector(`.${styles.btn}`);

  //   const handleMouseMove = (e) => {
  //     const x = e.clientX;
  //     const y = e.clientY;

  //     btn.style.transform = `translate(${x}px, ${y}px)`;
  //   };

  //   const handleMouseLeave = () => {
  //     btn.style.transform = 'translate(0, 0)';
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);
  //   document.addEventListener('mouseleave', handleMouseLeave);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //     document.removeEventListener('mouseleave', handleMouseLeave);
  //   };
  // }, []);


  
  return (
    <>
    <div id="layer"></div>
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={BCKVID} type="video/mp4"/>
      </video>
    </div>
    <div className="content">
    <h1>
        <div className="main-heading">
          <div className = "head-sentence1">
          <span className="quote">" </span>
            <span className = "reduce">Minimize Waste, </span> <span className = "food-waste">Maximize Taste:</span>
          </div>
          <div className = "head-sentence2"> 
          Join the Movement<span className="quote"> ! "</span>
          </div>
        </div>
      </h1>
      <p className = "paragraph">
        <span className="highlight">
        Greener Grub's cutting-edge technology facilitates a paradigm shift in food donation, {" "}
          <br />
          empowering communities and advancing sustainable solutions.
        </span>
      </p>
      {loggedIn ? (
          <div className="logged-in-text">
            <p>Welcome Back !</p>
          </div>
        ) : (
          <div className="signup-container">
            <Link className="signup-button" to="/signup">
              <span className="highlight2">SIGN Up</span>
            </Link>
          </div>)};
    </div>
    </>
  );
};

export default Content;
