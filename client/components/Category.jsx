
import React from 'react';

const Category = (props) => {
  console.log("PROPS", props);
  return (
    <div>
      <h3> { props.props }</h3>
    </div>
  )
}



export default Category;