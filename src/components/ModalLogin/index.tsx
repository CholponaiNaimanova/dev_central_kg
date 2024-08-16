import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface LoginModalProps {
    show: boolean;
    handleClose: () => void;
}

const loginAPI = 'http://3.38.98.134/auth/login'
const signupAPI = 'http://3.38.98.134/auth/signup'


const ModalLogin: React.FC<LoginModalProps> = ({ show, handleClose }) => {

    const navigate = useNavigate()

    const [userName, setUserName] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [consfirmPassword, setConsfirmPassword] = React.useState<string>('')
    const [isLoginTab, setIsLoginTab] = React.useState<boolean>(true)

    console.log('email', userName);
    console.log('password', password);

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault()
        if (!userName || !password) (
            alert('Please fill all the fields')
        )
        if (!isLoginTab && password !== consfirmPassword) {
            alert("Password do not match")
        }
        const authURL = isLoginTab ? loginAPI : signupAPI
        try{
            axios.post(authURL,{
                userName,
                password
            })
            .then(res => {
                const {token, message} = res.data
                if(res.data.success){
                    console.log("data", res.data);
                    Cookies.set('authToken', token)
                    alert(message)
                    navigate('/')
                } else{
                    alert(message)
                }
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        catch(error) {
            console.log(error);
        }
    }
    
    return (
        <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="close" onClick={handleClose}>Закрыть</button>

                <form className='login' onSubmit={handleAuth}>
                    <h1>{isLoginTab ? 'Login' : 'Sign Up'}</h1>

                    <input      
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                     type="text" placeholder='email'/>


                    <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                     type="password" placeholder='password'/>

{
                    isLoginTab && (
                    <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={consfirmPassword}
                     type="password" placeholder='password'/>
                    )}

                    <button className='submitBtn' type='submit'>
                        {isLoginTab ? 'Login' : 'Sign Up'}
                    </button>

                    {
                        isLoginTab? (
                            <div className="register">
                        <p>Don't have an account?</p>
                        <button className='signupLink'
                        onClick={(e) => {
                            e.preventDefault()
                            setIsLoginTab(false)
                        }}
                        >Signup</button>
                    </div>
                        ): (
                            <div className="register">
                        <p>Already have an account?</p>
                        <button className='signupLink'
                        onClick={(e) => {
                            e.preventDefault()
                            setIsLoginTab(true)
                        }}
                        >Login</button>
                    </div>
                        )
                    }

                </form>
            </div>


         </div>
    );
};

export default ModalLogin;
