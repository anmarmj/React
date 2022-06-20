// import React, { Component } from "react";
import './Hello.css';



// class Hello extends Component {
//     render() {
//         return (

//             <div className="f1 tc">
//                 <h1 >Hi {this.props.name} </h1>
//                 <p >welcome to react</p>
//             </div>

//         );
//     }
// }

const Hello = (props) =>
{
    return (

        <div className="f1 tc">
            <h1 >Hi {props.name} </h1>
            <p >welcome to react</p>
        </div>

    );
}

export default Hello;