import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/bannerpage.jpg";
import "../styles/HomeStyles.css";
import Wrapper from '../images/wrapped-present.jpg';
import Gift from '../images/gift.webp';
import gif from '../images/gif.avif';
import { MyContext } from "./usecontext";
const Home = () => {
  console.log(MyContext);
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Wrapper})` }}>
        <div className="headerContainer">
          <h1>Gift Website</h1>
          <p>Best Gifts In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
      <div className="home" style={{ backgroundImage: `url(${Gift})` }}>
        <div className="headerContainer">
          <h1>Your satisfaction is Our Happiness</h1>
          <p></p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Home;