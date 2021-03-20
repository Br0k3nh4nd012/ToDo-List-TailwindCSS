import React from 'react';

class NestedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        const k = this.props.k;
        let count=1;
        return ( 
            <div>
                {(count<=k)?<div>
                <div class="bg-white rounded-md w-auto justify-between px-5 py-3 mb-3 ">
        <input class="outline-none" placeholder="enter subtask"/>
        <button class="bg-yellow-400 px-4 py-1  rounded-xl hover:bg-yellow-500">Delete</button>
      </div>
            </div> : null}
            </div>
            
            
         );
    }
}
 
export default NestedList;