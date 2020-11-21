//impoer react
import React from 'react';

//create function or create a components
const Text =(props)=>{
    return(
        <div class="container">
           {props.title} 
           <h1>{props.content} </h1>
        </div>
    )
}

//export
export default Text;

