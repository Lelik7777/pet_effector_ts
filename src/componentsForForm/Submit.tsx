import {useStore} from "effector-react";
import {Preloader} from "./Preloader";
import {$data, $inputEmail, $inputPassword, loginFx, reset} from "../unitsEffector/submit";
// login to
export const Submit = () => {
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
        <div style={{color: 'red'}}>Login:<span
            style={{color: 'blue', fontWeight: 'bolder'}}>{data.resultCode === 0 ? 'true' : 'false'}</span></div>
    </div>)
}