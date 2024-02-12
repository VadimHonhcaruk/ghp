import React, { useState } from 'react';
import c from './login.module.css';

export const Login = ({ setYes }) => {
    const [pass, setPass] = useState('');
    return (
        pass !== 'ilovevadim' ?
            <div className={c.loginCont}>
                <span>PASSWORD</span>
                <input value={pass} onChange={e => setPass(e.target.value)} type='password' className={c.pass}></input>
            </div> :
            <div className={c.yesCont}>
                <span>Will you be my valentine?</span>
                <div className={c.buttCont}>
                    <div className={c.buttYes} onClick={() => setYes(true)}>YES</div>
                    <div className={c.buttNo}>NO</div>

                </div>
            </div>
    )
}
