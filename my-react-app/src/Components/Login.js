import React,{useState} from 'react'

const Login = (props) => {
    const [userRegistration, setuserRegistration]= useState({
        username:"",
        password:""
    })
    const [records, setRecords]= useState([]);


    const handleInput = (e)=>{
        const name = e.target.name;
        const value= e.target.value;
        console.log(name,value)
        setuserRegistration({...userRegistration,[name] : value});


    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        const newRecord = {...userRegistration , id: new Date().getTime().toString()}

        setRecords([...records, newRecord])

        setuserRegistration({username:"",email:"",phone:"",password:""})
    }
  return (
    <>
     <div className="wrapper">
        <div className="form-box login" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" autoComplete="off" value={userRegistration.username} onChange={handleInput} name="username" id="username" required/>
                    <label htmlFor="">Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" autoComplete="off" value={userRegistration.password} onChange={handleInput} name="password" id="password" required/>
                    <label htmlFor="">Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                 <a href="#">Forgot Password?</a>
                </div>
                <button type="submit"  className='btn'>Login</button>
                <div className="login-register">
                    <p>Don't have an account? <a href="#" onClick={()=>{props.onFormSwitch('register')}} className='register-link'>Register</a></p>
                </div>
            </form>
        </div>
     </div>
    </>
  )
}

export default Login