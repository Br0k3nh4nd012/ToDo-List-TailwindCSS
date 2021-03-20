import React from 'react';
import NestedList from './NestedList';


class ListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            subtask: 0,
            subtaskkey: Date.now(),
         }
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
                                subtask:k,
                                subtaskkey:item.key
                            });
                        }
                    }
                >+</button>
                {console.log(this.state.subtask)}
              {(this.state.subtask>=1 && this.state.subtaskkey===item.key)?<NestedList k={this.state.subtask}/> : null}
              
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