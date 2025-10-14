import React from "react";

class UserClassComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            count2:1
        }
        console.log("Constructor is called")
    }

    componentDidMount() {
        console.log("Child component did mount")
    }

  render() {
    console.log("render is called");
    const {name, Location, contact} = this.props;
    return (
      <div className="user-card">
        <h1>Count:{this.state.count}</h1>
        <h1>Count2:{this.state.count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {Location}</h3>
        <h4>Contact: {contact}</h4>
        <button onClick={()=>{
            this.setState({count: this.state.count+1})
        }}>Increament value</button>
        <button onClick={()=>{
            this.setState({count2: this.state.count2+1})
        }}>Increament2</button>
      </div>
    );
  }
}

export default UserClassComponent;

