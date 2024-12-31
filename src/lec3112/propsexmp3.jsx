import * as React from "react";
import MyButton from "./propsexmp";
import MyList from "./propsexmp2";
class MyCustComp extends React.Component {
    state ={
        var1 : false,
        var2 : "btn1",
        var3 : ["a","b","c","d","e"],
        

    };
    constructor(){
        super();
        setTimeout(()=>{
            this.setState({var1:true});
            this.setState({var2:"btn2"});
            this.setState({var3:["a","b","c","d","e","hello world"]});
        },1000);

    }
    render(){
        const {var1,var2,var3}= this.state;
        return(
            <div>
                <MyButton prop1={var1} xyz={var2} />
                <MyList itms={var3}/>
                
            </div>
        );
    }
}
export default MyCustComp;