import {Component} from "react";
import checked from './checked.png';
export class GroceryList extends Component {
constructor(){
    super();

    this.state ={
        userInput: "", 
        groceryList: []
    }
    
}
onChangeEvent(e){
        this.setState({userInput:e})    
         
}
addItem(input){
    if (input === ""){
        alert("Please enter an item!")
    } 
    else{
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''})
    console.log(input)
    }
}
crossedWord(e){
    const li =e.target;
    li.classList.toggle('crossed');
}
deleteItem(){
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})
}
onFormSubmit(e){
    e.preventDefault();
}
render(){
    return(
        <div>
            <form onSubmit={this.onFormSubmit}> 
            <div className="container">
            <input type='text' 
                placeholder = "What do you want to buy today?"
                onChange={(e)=> {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button className="btn add" onClick={()=> this.addItem(this.state.userInput)}>ADD</button>
            </div>
            <div >
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                            <img src={checked} alt='check' width = "40px"/>
                            {item}</li>
                    ) )}
                </ul>
            </div>
            <div className="container">
            <button className="btn delete" onClick={() => this.deleteItem()}>DELETE</button>
            </div>
            </form>
        </div>
    );
}

}