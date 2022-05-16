import {React, Component} from 'react'
import './header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="header">
        <div className='imgPdiv'>
       
      <p>Grandma's kitchen</p>
        </div>
        <button className='headButton' onClick={()=>this.props.setModalToOpen(true)}>Add new recipe</button>
      </div>
     );
  }
}
 
export default Header;