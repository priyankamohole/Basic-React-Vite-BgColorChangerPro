
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// const ReactElement={
//     type:"a",
//     props:{
//     href:"https://google.com",
//     target:'_blank'},
//     children:"Click To Visit Gooogle"
// }

// const anotherEle=(
//     <a href="https://google.com" target='_blank'>Visit</a>
// )

const an="chaii"

const ReactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'Click me',
    an
)



createRoot(document.getElementById('root')).render(
 
    ReactElement 
 
)
