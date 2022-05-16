import React, {Component} from 'react'
import './single-page.css'

class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
 
        <div className="single-page">
          <button className='single-pageBtn' onClick={()=>this.props.setSelectedRecipe('')}>Back to home</button>
          <h3>{this.props.recipe.meal}</h3>
          <img className='cardImg' src={this.props.recipe.image} alt="meal" />
          <p>Prep time : {this.props.recipe.prepTime}</p>
          <p>Level : {this.props.recipe.level}</p>
          <ul>
            Ingredients: 
            {this.props.recipe.ingredients.map(e => <li>{e}</li>)}
          </ul>
          <p>Country of origin : {this.props.recipe.countryOfOrigin}</p>
        </div>
      
      </>
     );
  }
}
 
export default SinglePage;