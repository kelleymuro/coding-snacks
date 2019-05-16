import React from 'react';
import client from '../pages/Client';

class FeaturedList extends React.Component {
   constructor() {
      super()
      this.state = {aboutpage: []}
   }

   componentDidMount() {
      client.getEntries({
          'content_type' : 'about'
        }).then( (entries) => {
          this.setState({aboutpage: entries.items[0, 1]}) 
        })
  }

  

   render() {
      return(
         <div className="container">
         {this.state.aboutpage.length === 0 ? <div> </div> : <p>{this.state.aboutpage.fields.aboutDescription}</p>  
         
      
         }

         
         </div>
      )
   }
}

export default FeaturedList;