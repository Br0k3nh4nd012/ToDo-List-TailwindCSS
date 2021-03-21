import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItems from "./ListItems";

class App extends React.Component {
  constructor(props){
    super(props);
      this.state={
        items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
      this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
  render() { 
    return ( 
      <div className="App" >
      <div class="bg-gradient-to-tr from-yellow-200 to-yellow-400 py-5 min-h-screen mb-56">
        <h1 class="bg-yellow-400 text-center text-3xl m-auto mt-5 mb-7 rounded-xl max-w-2xl h-auto font-mono py-6">TODO LIST</h1>

  <div class="grid justify-items-center">
    <form onSubmit={this.addItem}>
    <div class="justify-between space-x-2 bg">
        <input class="mb-12 rounded-md h-11 px-4 w-96" type="text" value= {this.state.currentItem.text} onChange={this.handleInput} placeholder="Enter task"/>
        <button class="bg-yellow-200 h-11 px-5 rounded-md hover:bg-yellow-600" type="submit">Add</button>
    </div>
    </form>
    <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
  
  </div>
</div>
    </div>
     );
  }
}
 
export default App;
