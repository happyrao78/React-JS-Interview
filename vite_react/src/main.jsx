import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//there are certain props defined by react and in the below code I have set my own props which are not defined by react library

// const createNew={
//     type: 'a',
//     children: "visit my portfilio website",
//     props:{
//         href:'https://www.happyrao.tech',
//         target:'_blank'
//     }
// }


const createElement =(
    <a href='https://www.happyrao.tech' target='_blank'>Visit Happy Portfolio Website</a>
)
const modifier ="happy yadav"
const newElement = React.createElement(
    //takes an object as parameter
    'a',//key
    {
        href:'https://www.happyrao.tech',//props
        target:'_blank'
    },
    'Visit Happy Portfolio Website, (generated via custom react.createElement)',//children
    modifier //variable injection comes at last.
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
// newElement
    // createElement
  
)
