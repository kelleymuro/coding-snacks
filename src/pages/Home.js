import React from 'react';
import { Link } from 'react-router-dom';

import homeCSS from './Home.css';
import Wave from '../components/Wave';
import CardSection from '../components/CardSection';
import FeaturedSection from '../components/FeaturedSection';
import FeaturedList from '../components/FeaturedList';

class Home extends React.Component  {
   render() {
     return (
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Kayvon Rules <br /> and I wish he was always here.
          </h1>
          <p className="hero-valueProp">
            FREE tutorials that teach you things you will actually use in your
            next project
          </p>
          <Link className="cta" to="/page-2/">Subscribe On Youtube</Link>
          <div className="Logos">
            <img
              src={require("../images/_logo-react.png")}
              width="50"
              alt="logos-react"
            />
            <img
              src={require("../images/logo-javascript.png")}
              width="50"
              alt="logos-js"
            />
            <img
              src={require("../images/logo-css.png")}
              width="50"
              alt="logos-css"
            />
            <img
              src={require("../images/logo-node.png")}
              width="50"
              alt="logos-node"
            />
          </div>
      </div>
      <Wave/>
      <CardSection/>
      <FeaturedSection
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/_logo-react.png")}
      title="Most Popular React Snacks"
      text="In this video I will teach you how to use styled components inside of React.
      This is something that will help you understand how to quickly use CSS in your project.
      Not even a problem. You guys are doing awesome!"
      />
      <FeaturedList/>
  </div>
     );
   }   
}

export default Home;