import ProfileClass from "./ClassbasedComponentprofile";
import FunctionalProfile from "./FunctionalComponentprofile";

const About=()=>{
  return(
    <div>
      {/* <h1>About</h1> */}
      <FunctionalProfile name="Dhaval" age="20" address="Ahmedabad" gender="Male" email="d@gmail.com" mobile="1234567890"/>
      <ProfileClass name="Devil" age="20" address="Ahmedabad" gender="Male" email="d@gmail.com" mobile="1234567890"/>
    </div>
  )
}
export default About;