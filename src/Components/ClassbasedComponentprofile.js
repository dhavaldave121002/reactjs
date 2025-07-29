import React from "react";

class ProfileClass extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  render(){
    return(
      <div style={{"color":"Green","border":"1px solid black","padding":"10px","margin":"10px"}}>
        <h1>Class Profile</h1>
        <h2>Name:{this.props.name}</h2>
        <h2>Age:{this.props.age}</h2>
        <h2>Address:{this.props.address}</h2>
        <h2>Gender:{this.props.gender}</h2>
        <h2>email:{this.props.email}</h2>
        <h2>Mobile No.:{this.props.mobile}</h2>
        <h1>Count - {this.state.count}</h1>
        <button onClick={()=>{
          //you can not update state variable directly
          this.setState({count:this.state.count+1})
        }}>Click Me</button>
      </div>
    )
  }

}
export default ProfileClass;