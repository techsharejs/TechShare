// import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Category from './Category';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: [],
    }
  }    
  
  componentDidMount(){
    fetch('/categories', {
      method: 'GET'
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState((prevState) => {
          // console.log('PREV STATE', prevState);
          // console.log('DATA', data);

          const catArr = [];
          for (let i = 0; i < data.data.length; i++) {
            catArr.push(data.data[i].catname);
          }
          console.log(catArr);
          return {
            // category: prevState.category.push(catArr)
            category: catArr,
          }
        }
      )})
  }

  render() {
    const categories = [];
    for (let i = 0; i < this.state.category.length; i++) {
      categories.push(<Category props = { this.state.category[i] }/> )
    }
    return (
      <div>
        <h2>Categories</h2>
        {categories}
      </div>
    );
  }
}

export default Main;