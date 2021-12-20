//import "./qual.css"
import React from 'react'

function Qualification (props){
    
    return(
        <React.Fragment>
            <table border="2px">
            <thead>
                <tr>
                    <th>Degree</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>
                {props.qualification.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.degree}</td>
                            <td>{item.percentage}</td>

                        </tr>
                    )
                })}
            </tbody>

            </table>
        </React.Fragment>
        
        

    )    
}

export default Qualification;