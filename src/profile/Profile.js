import React from 'react'
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div style={{textAlign:"center" }}>
        <div style={{margin:"10px 0 10px"}}>
         <h1 style={{ color: "#373B4D", fontSize: "30px",textDecorationLine:"underLine" }}>Full Name:</h1>
          <p style={{color: " #968e89", fontSize: "25px",marginTop:"25px",marginLeft:"10px"  }} > {props.info.fullName}</p>
        </div>
        <div style={{margin:"10px 0 10px"}}>
         <h1 style={{ color: "#373B4D", fontSize: "30px",textDecorationLine:"underLine" }}>Bio:</h1>
         <p style={{ color: " #968e89", fontSize: "25px",marginTop:"25px",marginLeft:"10px" }}> {props.info.bio}</p>
        </div>
        <div style={{margin:"10px 0 10px"}}>
         <h1 style={{ color: "#373B4D", fontSize: "30px",textDecorationLine:"underLine" }}>Profession:</h1>
        <p style={{ color: " #968e89", fontSize: "25px",marginTop:"25px",marginLeft:"10px" }} >{props.info.profession}</p>
        </div>
       

        <div  style={{margin:"10px 0 10px" }}> {props.children}</div>
        <button style={{textAlign: "center", fontSize: "20px",width:"120px", backgroundColor:"#cdadad", color:"#968e89" , borderRadius:"10px",  height:"50px", margin:"10px 0 10px" }}  onClick={props.handleName}>User's Name</button>

    </div>
  )
}

export default Profile

Profile.defaultProps = {
    version: "16"
};

Profile.propTypes = {
   anyProp: PropTypes.any,
   booleanProp: PropTypes.bool,
   numberProp: PropTypes.number,
   stringProp: PropTypes.string,
   functionProp: PropTypes.func
};