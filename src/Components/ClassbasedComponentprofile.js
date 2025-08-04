import React from "react";

class ProfileClass extends React.Component{
  //also we can use props in constructor
  constructor(){
    super();
    this.state={
      userInfo:null     
    }
    // this.state={
    //   count:0
    // }
    console.log("Hy ,i am constructor")
  }
 async componentDidMount(){
  const data =await fetch("https://api.github.com/users/Dhavaldave");
  const result=await data.json();
  // console.log(result);
  this.setState({
    userInfo:result

  })
 
    console.log("Hy ,i am componentDidMount")
  }
  componentDidUpdate(){
    console.log("Hy ,i am componentDidUpdate")
  }
  componentWillUnmount(){
    console.log("Hy ,i am componentWillUnmount")
  }
  render() {
    console.log("Hy ,i am render")
    if (this.state.userInfo === null) {
      return <div>Loading...</div>;
    }
  
    const { name, avatar_url } = this.state.userInfo;
  
    return (
      <div style={{ color: "Green", border: "1px solid black", padding: "10px", margin: "10px" }}>
        <h1>Class Profile</h1>
        
        {/* Optional extra fields */}
        {/* <h2>Age: {this.state.userInfo.age}</h2> */}
        {/* <h2>Address: {this.props.address}</h2>
        <h2>Gender: {this.props.gender}</h2>
        <h2>Email: {this.props.email}</h2>
        <h2>Mobile No.: {this.props.mobile}</h2> */}
  
        <img src={avatar_url} alt="user" />
        <h2>Name: {name}</h2>
      </div>
    );
  }
  
  

}
export default ProfileClass;