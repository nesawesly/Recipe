import {React, Component} from 'react';
import './card.css'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { 
 
     }
  }

  deleteRecipe(){
    fetch(`https://6245a34b6b7ecf057c21c934.mockapi.io/recipes/${this.props.obj.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(this.state.recipe) 
    }).then((res)=>res.json())
    .then((response)=>{
  this.props.setShouldUpdate()
})
}

  render() {
// console.log(this.props.obj)
    return ( 
      <div className="card" onClick={()=>this.props.setSelectedRecipe(this.props.obj.id)}>
          <button onClick={(e)=>{
            e.stopPropagation()
            this.deleteRecipe()}} className='closeBtn'>Remove</button>
          <img src={this.props.obj.image} alt="meal" />
          <h3>{this.props.obj.meal}</h3>
      </div>
    );
  }
}
 
export default Card;
