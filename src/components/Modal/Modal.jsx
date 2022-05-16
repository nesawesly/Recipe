import React from 'react'
import './modal.css'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.setIngredients = this.setIngredients.bind(this)
        this.setMealType = this.setMealType.bind(this)
        this.submitRecipe = this.submitRecipe.bind(this)
        this.state = { 
            recipe : {
                meal : '',
                prepTime: 0,
                level: 0,
                image: '',
                ingredients: [],
                countryOfOrigin: '',
                mealType: [],
                isVegan: false
            }
         }
    }

    submitRecipe(){
        fetch('https://6245a34b6b7ecf057c21c934.mockapi.io/recipes', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state.recipe) 
        }).then((res)=>res.json())
        .then((response)=>{
        this.props.setModal(false)
        this.props.setShouldUpdate()
    })
}

    setIngredients(recipeValue){
        const arr = recipeValue.split(',')
        this.setState({
            recipe:{
                ...this.state.recipe,
                ingredients: arr
            }
        })
    }

    setMealType(recipeValue){
        const arr = recipeValue.split(',')
        this.setState({
            recipe:{
                ...this.state.recipe,
                mealType: arr
            }
        })
    }


    render() { 
        return ( 
            <div className="modal-wrapper">
                <div className="modal-content">
                    <button className="close-modal" onClick={()=>this.props.setModal(false)}>X</button>
                    <p>Naziv jela:</p>
                    <input type="text" name="meal" id="meal" onChange={(e)=>this.setState({
                        recipe: {
                            ...this.state.recipe,
                            meal: e.target.value
                        }
                    })}/>
                    <p>Vreme pripreme:</p>
                    <input type="number" name="prepTime" id="prepTime" onChange={(e)=>this.setState({
                        recipe: {
                            ...this.state.recipe,
                            prepTime: e.target.value
                        }
                    })}/>
                    <p>Zemlja porekla jela:</p>
                    <input type="text" name="" id="" onChange={(e)=>this.setState({
                        recipe: {
                            ...this.state.recipe,
                            countryOfOrigin: e.target.value
                        }
                    })}/>
                    {/* 
                    'jaja, mleko, secer' => ['jaja', 'mleko', 'secer']
                    */}
                    <p>Sastojci: (odvojeni zarezom)</p>
                    <input type="text" name="" id="" onChange={(e)=>this.setIngredients(e.target.value)}/>
                    <p>Nivo tezine:</p>
                    <input type="number" name="level" id="level" onChange={(e)=>this.setState({
                        recipe: {
                            ...this.state.recipe,
                            level: e.target.value
                        }
                    })}/>
                    <p>Slika jela: (absolutna putanja sa weba)</p>
                    <input type="text" name="image" id="image" onChange={(e)=>this.setState({
                        recipe: {
                            ...this.state.recipe,
                            image: e.target.value
                        }
                    })}/>
                    <p>Vrsta jela: (odvojeni zarezom)</p>
                    <input type="text" name="" id="" onChange={(e)=>this.setMealType(e.target.value)}/>
                    <p>Da li je jelo vegansko: </p>
                    <input type="radio" name="isVegan" id="isVegan"/> Da
                    <input type="radio" name="isVegan" id="isVegan"/> Ne
                    <br/>
                    <button className='submitBtn' onClick={this.submitRecipe}>Dodaj recept</button>
                </div>
            </div>
         );
    }
}
 
export default Modal;