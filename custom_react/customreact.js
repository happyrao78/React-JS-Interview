const customrender =(reactelement,container)=>{
    /*const domElement=document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    domElement.setAttribute('href',reactelement.props.href)
    domElement.setAttribute('target',reactelement.props.target)
    container.appendChild(domElement)*/

// using for in loop to avoid repeating the code in above part
     const domElement=document.createElement(reactelement.type)
     domElement.innerHTML = reactelement.children
     for (const prop in reactelement.props) {
       if(prop === 'children') continue;// if there is  nested object inside the object then that part will be skipped out

       domElement.setAttribute(prop,reactelement.props[prop])
     }
     container.appendChild(domElement)
}

const reactElement={//created a react element object
    type:'a',
    props:{
        href: 'https://www.happyrao.tech',
        target:'_blank'
    },
    children:'Visit HappyRao.tech'
}
const mainContainer = document.querySelector('.root')

customrender(reactElement,mainContainer)