import React from "react";

let date = new Date()
let currentTime = date.toDateString();

export default class Time extends React.Component {
    render() {
        return <p className="timeTracker">{currentTime}</p>
    }
}