import './Login.scss'
import InputBox from "../components/common/primitives/InputBox/InputBox";
import Button from '../components/common/primitives/Button/Button';

const Login = () => {
    return ( 
        <div className="Login">
            <div className="header">
                <h1>Hello Again ! Welcome back</h1>
                <form >
                    <InputBox type="email" placeholder="Email address"/>
                    <InputBox type="password" placeholder="Password"/>
                    <Button/>
                    <p>Don't have an account ? <span>Register</span></p>
                </form>
                
            </div>
      </div>
     );
}
 
export default Login;