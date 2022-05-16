import React from "react";
import "./home-page.css";
import Card from "../../components/Card/Card.jsx";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="home-page">
       
          <h3>Easy to follow recipes</h3>
          <div>
            
            {this.props.recipes.filter(e=>e.level<=2).map(e=><Card setShouldUpdate={this.props.setShouldUpdate} setSelectedRecipe={this.props.setSelectedRecipe} obj={e}/>)}
          </div>
        <h3>Medium strength recipes</h3>
        <div>
            {this.props.recipes.filter(e=>e.level<=4 && e.level>2).map(e=><Card setShouldUpdate={this.props.setShouldUpdate} setSelectedRecipe={this.props.setSelectedRecipe} obj={e}/>)}
          </div>
        <h3>Only your grandma can help with this</h3>
        <div>
            {this.props.recipes.filter(e=>e.level==5).map(e=><Card setShouldUpdate={this.props.setShouldUpdate} setSelectedRecipe={this.props.setSelectedRecipe} obj={e}/>)}
          </div>
          </div>
    );
  }
}

export default HomePage;
