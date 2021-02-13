

import React from 'react';

//add validate as the action 
const LoginForm = (props) => {
    let {newEmail, newPwd, setEmail, setPwd, validateUser} = props;
    return(
        <div>
            <form>
                <input 
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value = {newEmail}
                ></input>
                
                <input 
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value = {newPwd}
                ></input>
                <button
                    onClick={(e)=>{
                        validateUser();
                        e.preventDefault();                  
                    }}
                    >{newEmail,newPwd}Submit</button>
                    <div>{props.newEmail}</div>

            </form>
        </div>
    );
};

export default LoginForm;