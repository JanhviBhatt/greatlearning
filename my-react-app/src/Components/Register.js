import React, { useState } from 'react'

const Register = (props) => {
    const [userRegistration, setuserRegistration]= useState({
        username:"",
        email:"",
        phone:"",
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
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username : </label>
            <input type="text" autoComplete="off" value={userRegistration.username} onChange={handleInput} name="username" id="username1"/>
        </div>

        <div>
            <label htmlFor="email">email : </label>
            <input type="text" autoComplete="off" value={userRegistration.email} onChange={handleInput} name="email" id="email"/>
        </div>

        <div>
            <label htmlFor="password">password : </label>
            <input type="password" autoComplete="off" value={userRegistration.password} onChange={handleInput} name="password" id="password1"/>
        </div>

        <div>
            <label htmlFor="phone">phone : </label>
            <input type="text" autoComplete="off" value={userRegistration.phone} onChange={handleInput} name="phone" id="phone"/>
        </div>

        <button type="submit" onClick={()=>{props.onFormSwitch('login')}} >Registration </button>
      </form>
      <div>
        {
        records.map((curElem)=>{
            const {id,username,email,phone,password} = curElem;
            return(
                <div className="showDataStyle" key={curElem.id}>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{password}</p>
                </div>
            )
        })
    }
      </div>
    
    </>
  )
}

export default Register
