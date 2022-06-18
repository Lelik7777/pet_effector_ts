import {useStore} from 'effector-react';
import {Preloader} from '../preloader/Preloader';
import {$data, $inputEmail, $inputPassword, loginFx, reset} from '../../store/login';
import s from './Login.module.scss';
export const Login = () => {
    const email = useStore($inputEmail);
    const password = useStore($inputPassword);
    const data = useStore($data);
    const loading = useStore(loginFx.pending);
    return (<div>
        <input type="text" value={email} readOnly/>
        <br/>
        <input type="text" value={password} readOnly/>
        <br/>
        <button onClick={() => loginFx({email, password})}>Submit</button>
        <button onClick={reset}>reset</button>
        {loading && <Preloader/>}
        <div className={s.values}>
            <div><span>Login: </span><span className={s.span}>{data.resultCode === 0 ? 'true' : 'false'}</span></div>
            <div><span>Email:</span> lelik21212121@gmail.com</div>
            <div><span>Password: </span>enter_free</div>
        </div>
    </div>)
}