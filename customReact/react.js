function customRender(reactElement,root){
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerhTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute("target",reactElement.props.target)
    // root.appendChild(domElement)
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in props){

        }
    }


const reactElement={
    type:"a",
    props:{
    href:"https://google.com",
    target:'_blank'},
    children:"Click To Visit Gooogle"
}

const root=document.querySelector('#root')

customRender(reactElement,root)