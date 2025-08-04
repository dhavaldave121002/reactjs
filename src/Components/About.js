import { Component } from "react";
import ProfileClass from "./ClassbasedComponentprofile";
import FunctionalProfile from "./FunctionalComponentprofile";

// const About=()=>{
//   return(
//     <div>
//       {/* <h1>About</h1> */}
//       <FunctionalProfile name="Dhaval" age="20" address="Ahmedabad" gender="Male" email="d@gmail.com" mobile="1234567890"/>
//       <ProfileClass name="Devil" age="20" address="Ahmedabad" gender="Male" email="d@gmail.com" mobile="1234567890"/>
//     </div>
//   )
// }
class About extends Component{
  constructor(){
    super();
    // console.log("constructor");
    // this.state={
    //   count:0
    // }
  }
  componentDidMount(){
    // console.log("componentDidMount");
    // this.setState({
    //   count:this.state.count+1
    // })
  }
  render(){
    console.log("render");
    return(
      <div>
       <ProfileClass name="Devil" age="20" address="Ahmedabad" gender="Male" email="d@gmail.com" mobile="1234567890"/>
       {/* <ProfileClass name="Devil" age="20" address="Ahmedabad" gender="Male" email="d@gmail.com" mobile="1234567890"/> */}
      </div>
    )
  }
}
export default About;