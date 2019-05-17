import React from 'react';
import client from '../pages/Client';
import Cell from './Cell';
import styled from 'styled-components';


const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

class FeaturedList extends React.Component {
   constructor() {
      super()
      this.state = {homeList: []}
   }

   componentDidMount() {
      client.getEntries({
          'content_type' : 'homeList'
        }).then( (entries) => {
          this.setState({homeList: entries.items}) 
        })
  }

  

   render() {
      return(

         <SectionCellGroup>
           {this.state.homeList.map((item) => {
              return(
                 <Cell  
                 title={item.fields.listItemTitle} 
                 image={item.fields.listItemImage.fields.file.url} 
                 />
              )
            }
           )}
       </SectionCellGroup>
      )
   }
}

export default FeaturedList;