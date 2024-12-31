import * as React from "react";

class Timetable extends React.Component {
    render (){
        return(

            <div className="timetable">
                <center>
                <table style={{border:"1px solid black",borderCollapse: "collapse",width:"100%",textAlign:"center"}}>
                    <thead >
                    <tr>
                    <td style={{ border:"1px solid black",padding:"10px"}}  >Time</td> 
                  <td style={{ border:"1px solid black",padding:"10px"}}  >Monday</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Tuesday</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Wednesday</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Thursday</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Friday</td>
                    </tr>
                    </thead>
                    <tbody >
                    <tr>
                    <td style={{ border:"1px solid black",padding:"10px"}}>8:00 AM - 9:00 AM</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>

                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>


                  
                  </tr>
                  <tr>
                  <td style={{ border:"1px solid black",padding:"10px"}}>8:00 AM - 9:00 AM</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>

                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  </tr>
                  <tr>
                  <td style={{ border:"1px solid black",padding:"10px"}}>8:00 AM - 9:00 AM</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  </tr>
                  <tr>
                  <td style={{ border:"1px solid black",padding:"10px"}}>8:00 AM - 9:00 AM</td>
                 <td colSpan={5}>TEA BREAK</td>
                 
                  </tr>
                  <tr>
                    <td style={{ border:"1px solid black",padding:"10px"}}>9:00 AM - 10:00 AM</td>
                    <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black" ,padding:"10px"}} rowSpan={2}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>

                  </tr>
                  <tr>
                    <td style={{ border:"1px solid black",padding:"10px"}}>9:00 AM - 10:00 AM</td>
                    <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                 
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>

                  </tr>
                  <tr>
                    <td style={{ border:"1px solid black",padding:"10px"}}>9:00 AM - 10:00 AM</td>
                    <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                 
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>

                  </tr>
                  <tr> 
                    <td style={{ border:"1px solid black",padding:"10px"}}>10:00 AM - 11:00 AM</td>
                    <td style={{ border:"1px solid black",padding:"10px"}} colSpan={5}>LUNCH BREAK</td>

                  </tr>
                  <tr>
                    <td style={{ border:"1px solid black",padding:"10px"}}>9:00 AM - 10:00 AM</td>
                    <td style={{ border:"1px solid black",padding:"10px"}} rowSpan={2}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}rowSpan={2}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                 
                  <td style={{ border:"1px solid black",padding:"10px"}}rowSpan={2}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>

                  </tr>
                  <tr>
                    <td style={{ border:"1px solid black",padding:"10px"}}>9:00 AM - 10:00 AM</td>
                    
              
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                 
                
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>

                  </tr>
                  <tr>
                    <td style={{ border:"1px solid black",padding:"10px"}}>9:00 AM - 10:00 AM</td>
                    <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                 
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>
                  <td style={{ border:"1px solid black",padding:"10px"}}>Reac(nv)</td>

                  </tr>



</tbody>
                </table>
                </center>
            </div>
        )
    }
}
export default Timetable 