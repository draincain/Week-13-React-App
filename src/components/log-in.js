import React from "react";

export default class LogInForm extends React.Component {
    render() {
        return (
             <div className="LogInForm">
                <h3>Log In</h3>
                <input type="text" placeholder="User Name"></input>
                <input type="text" placeholder="Password"></input><br></br>
                <button>Log In</button>
             </div>
        )
    }
}