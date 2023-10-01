import React, { Component,   } from "react";

 


class Clock extends Component {
    constructor (props) {
        super(props);

        this.state = {
            dateClass: new Date()
        }

        this.time = this.state.dateClass.toLocaleTimeString();
        this.hourMin = this.time.length === 10? this.time.slice(0) : this.time.slice(0,5);
    }

    setTime = () => {
        this.setState({
            dateClass: new Date()
        })
        this.time = this.state.dateClass.toLocaleTimeString();
        this.hourMin = this.time.length === 10? this.time.slice(0) : this.time.slice(0,5);
    }

    componentDidMount () {
        setInterval(this.setTime, 1)
    }
    
    render () {
        return (
            <h1 className="clock">
              
                {this.hourMin} 
              
                
           <li className="wrong">
     <a  href="https://time100.ru/"  className="wrong">Wrong Time?</a>
  </li>

            </h1>
        )
    }
}

export default Clock;