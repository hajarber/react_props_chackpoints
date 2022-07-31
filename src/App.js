
import './App.css';
import Profile from './profile/Profile';
import img from './img-hajar.jpeg'
function App() {
  const profile = { fullName: "Hajar Berchil",
                    bio: " I’m a web developer. I spend my whole day,experimenting with HTML, CSS, and JavaScript.I’m curious, and I enjoy work that challenges me to learn something new .", 
                    profession:"Full-stack web developper" };
  const handleName = e => {
    e.preventDefault();
    alert(" This is Hajar's profile")
  };
  return (
    <div style={{ width: "auto",margin:"0 400px",boxShadow: "5px #ebe0e0",display:'flex',justifyContent:"center"}} >

      <Profile info={profile} handleName={handleName}>
      <img style={{ borderRadius: '30%', width: "400px"}} src={img} alt="profile"/>
      </Profile>
   
      
      </div>
  );
}

export default App;
