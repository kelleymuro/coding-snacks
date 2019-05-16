import React from 'react';

import Card from './Card';

class CardSection extends React.Component {
   render() {
      return (
         <div className="Cards">
            <h2>Snacks are coming soon!</h2>
            <div className="CardGroup">
              <Card
                title="React Snacks"
                text="12 Sections"
                image={require("../images/wallpaper2.jpg")}
              />

              <Card
                title="Javascript Snacks"
                text="12 Sections"
                image={require("../images/wallpaper4.jpg")}
              />

              <Card
                title="CSS Snacks"
                text="12 Sections"
                image={require("../images/wallpaper5.jpg")}
              />

              <Card
                title="Server Side Snacks"
                text="12 Sections"
                image={require("../images/wallpaper6.jpg")}
              />
            </div>
          </div>
      )
   }
}

export default CardSection;