import React from 'react'
import HomePage from './pages/HomePage/HomePage.jsx';
import SinglePage from './pages/SinglePage/SinglePage.jsx';
import './app.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
// import {React, Component} from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setSelectedRecipe = this.setSelectedRecipe.bind(this)
    this.setModal = this.setModal.bind(this)
    this.setShouldUpdate = this.setShouldUpdate.bind(this)
    this.state = { 
      data: [],
      selectedRecipeId: '',
      isModalOpen: false,
      shouldUpdate: false
    }
  }

  
  componentDidMount(){
    fetch('https/6245a34b6b7ecf057c21c934.mockapi.io/recipes')
    .then((res)=>res.json()).then(console.log(this.state.data))
    .then((response)=> this.setState({data : response}))
  }

  setSelectedRecipe(xxx){
    this.setState({
      selectedRecipeId : xxx
    })
  }

  setModal(modalState){
    this.setState({
      isModalOpen : modalState
    })
  }

  setShouldUpdate(){
    this.setState({
      shouldUpdate: !this.state.shouldUpdate
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.shouldUpdate !== this.state.shouldUpdate){
    fetch('https://6245a34b6b7ecf057c21c934.mockapi.io/recipes')
    .then((res)=>res.json())
    .then((response)=> this.setState({data : response}))
    }
  }

  render() { 
    return ( 
        <div>
          {this.state.isModalOpen && <Modal setShouldUpdate={this.setShouldUpdate} setModal={this.setModal}/>}
          <Header setModalToOpen={this.setModal}/>
          {/* <button onClick={this.setSelectedRecipe}>Update State</button> */}
          {this.state.selectedRecipeId ? <SinglePage setSelectedRecipe={this.setSelectedRecipe} recipe={this.state.data.find(e=>e.id===this.state.selectedRecipeId)}/> : <HomePage setShouldUpdate={this.setShouldUpdate} recipes={this.state.data} setSelectedRecipe={this.setSelectedRecipe}/>}
          <Footer/>
        </div>
     );
  }
}
 
export default App;