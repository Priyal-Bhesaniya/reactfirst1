import * as React from "react";
class StateABC extends React.Component {
    state={ 
        first :false,
        second :1.29,
        third :"hello",
        four : "red",
        fifth: "blue",

        
    };
    render(){
    const { first, second, third ,four,fifth} = this.state;
    
        return (
            <div>
                <button disabled={first} ><h1>My Button</h1></button>
                <p style={{color:four}}> value of first variable is <strong>{second}</strong></p>
                <p style={{color:fifth}}> value of second variable is <strong>{third}</strong></p>       
            </div>
        );
    }
}
export default StateABC