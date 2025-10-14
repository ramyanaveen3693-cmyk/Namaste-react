import React from "react";
import UserClassComponent from "./UserClassComponent";
import UserComponent from "./UserComponent";
class AboutComponent extends React.Component {
    
  constructor(props) {
    super(props);
    console.log("Parent constructor")
  }


  componentDidMount() {  //componentDidMOunt is used to make API call.
    console.log("component parent mount")
  }

  render() {
    console.log("render parent")
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namasthe React Web Series</h2>
        <UserComponent
          name={"Namasthe from class"}
          Location={"Bengaluru"}
          contact={"ramya@teligenz.in"}
        />
        <UserClassComponent
          name={"Namasthe from class"}
          Location={"Bengaluru"}
          contact={"ramya@teligenz.in"}
        />
      </div>
    );
  }
}

// const AboutComponent = () =>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namasthe React Web Series</h2>
//             <UserComponent name={"Namasthe from class"} Location={"Bengaluru"} contact = {"ramya@teligenz.in"}/>
//             <UserClassComponent name={"Namasthe from class"} Location={"Bengaluru"} contact = {"ramya@teligenz.in"} />
//         </div>
//     )
// }

export default AboutComponent;