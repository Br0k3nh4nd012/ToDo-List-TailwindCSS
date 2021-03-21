import React from 'react';
import NestedList from './NestedList';


class ListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            subtask: false,
            subtaskkey: Date.now(),
            nesteditem:{
                text:"",
                key:"",
                parentkey:"",
            },
            nestitems:[],
         }
         this.additem = this.additem.bind(this);
        this.handleinputnest = this.handleinputnest.bind(this);
    }
    handleinputnest(text,parentkey){
        this.setState({
            nesteditem:{
              text: text,
              key: Date.now(),
              parentkey: parentkey, 
            }
          })
    }
    additem(e){
        e.preventDefault();
        console.log(this.state.nesteditem);
    const newnestitem = this.state.nesteditem;
    if(newnestitem.text !==""){
      const items = [...this.state.nestitems, newnestitem];
    this.setState({
      nestitems: items,
      nesteditem:{
        text:'',
        key:'',
        parentkey:''
      }
    })
    }
    }
    
    deleteItem(key){
        const filteredItems= this.state.nestitems.filter(item =>
            item.key!==key);
          this.setState({
            nestitems: filteredItems
          })
    }

    setUpdate(text,key){
        const items = this.state.nestitems;
        items.map(item=>{      
        if(item.key===key){
            console.log(item.key +"    "+key)
            item.text= text;
        }
        })
        this.setState({
        nestitems: items
        })
    }
    // componentDidUpdate(){
    //     this.setState({subtask:false});
    // }
    render() { 
        const items = this.props.items;
        let k=0;
        const listitems = items.map(item => {
            return <div class="w-auto">
            <div class="bg-white rounded-md w-auto justify-between px-5 py-3 mb-3 ">
              <input class="outline-none"
                    type="text"
                    id={item.key}
                    value={item.text}
                    onChange={
                        (e)=>{
                            this.props.setUpdate(e.target.value,item.key)
                        }
                    }
                />
                
                
                
              <button class="bg-yellow-400 px-4 py-1 outline-none rounded-xl hover:bg-yellow-500"
                    onClick={
                        ()=>{
                            console.log(this.state.subtask);
                            this.props.deleteItem(item.key)
                        }
                    }
              >Delete</button>
              <button class="bg-yellow-400 px-4 py-1 ml-1 rounded-xl hover:bg-yellow-500"
                    onClick={
                        ()=>{
                            k=this.state.subtask+1;
                            this.setState({
                                subtask:true,
                                subtaskkey:item.key
                            });
                        }
                    }
                >+</button>
                {console.log(this.state.subtask)}
              {(this.state.subtask && this.state.subtaskkey===item.key)?<div class="bg-white rounded-md w-auto flex justify-between px-5 py-2 mb-3 ">
        <input class="outline-none" onChange={(e)=>{this.handleinputnest(e.target.value,item.key)}} value={this.state.nesteditem.text} placeholder="enter subtask"/>
        <button class="bg-yellow-200 px-3 py-1 rounded-xl hover:bg-yellow-500" type="submit" onClick={this.additem}>done</button>
        <button class=" hover:bg-red-500 rounded-3xl px-2 ml-2 " type="submit" onClick={()=>{this.setState({subtask:false})}
}>x</button>
      </div> : null}
              {console.log(this.state.nestitems)}
              

              {this.state.nestitems.filter(nestitem => nestitem.parentkey===item.key).map(eachsub => (
                  <div class="block mt-2">
                      <div>
                    <input class="outline-none space-x-4" value={eachsub.text} onChange={
                        (e)=>{
                            this.setUpdate(e.target.value,eachsub.key)
                        }
                    } placeholder="enter subtask"/>
                    <button class="bg-yellow-400 px-4 py-1 rounded-xl hover:bg-yellow-500 " onClick={
                        ()=>{
                            this.deleteItem(eachsub.key)
                        }
                    }>Delete</button>
                    </div>
                    </div>
              ))}

            </div>
           
          </div>
        })
        return ( 
            
            <div>
                
                {listitems}
            </div>
         );
    }
}
 
export default ListItems;