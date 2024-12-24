import * as React from "react";
// in one component we can import  multiple components
class Component2 extends React.Component
{
    render() {
        return(
            <h2>Component 2</h2>
        )
    }
}
class Component3 extends React.Component{
    render() {
        return(
            <h3>Component 3</h3>
        )
    }
}
//each class component must contain a render function
class Component1 extends React.Component{
    render() {
        return(
            <div>
                <h1>component 1</h1>
                <h2>hello</h2>
                <Component2 />
                <Component3 />
            </div>
        )
    }
}
export default Component1;