import React from 'react';
import { Link } from 'react-router-dom';

import Landing from './Landing';

import HeaderCSS from './Header.css';



class Header extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         hasScrolled: false
      }
   }

   componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
   }

   handleScroll = event => {
      const scrollTop = window.pageYOffset

      if (scrollTop > 40) {
         this.setState({hasScrolled: true})
      } else {
         this.setState({hasScrolled: false})
      }
   }

   render() {
      return (
         <div className={this.state.hasScrolled ? 'Header HeaderScrolled': 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/_logo-react.png')} width="30" alt="logo" /> </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          {/* <Link to="/buy"><button>Buy</button></Link> */}
        </div>
      </div>
      )
   }
}

export default Header;