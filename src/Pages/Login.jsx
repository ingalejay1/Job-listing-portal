import LoginForm from '../Components/Login/LoginForm'
import LoginImage from '../assets/login.png'
const Login = () => {
    return (
        <div style={{display:"flex"}}>
            <LoginForm/>
            <img style={{maxHeight:"100vh", width:"50vw"}}  src={LoginImage}/>
        </div>
    )
}

export default Login