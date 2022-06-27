import s from './Login.module.scss';
import {createForm, useForm} from 'effector-react-form';
import {$data, $inputEmail, $inputPassword, loginFx, reset} from '../../store/login';
import Input from './Input';
import {DataType} from '../../services/api';
import {useStore} from 'effector-react';


 const Login = () => {

    const email = useStore($inputEmail);
    const password = useStore($inputPassword);
    const data = useStore($data);
    const loading = useStore(loginFx.pending);
    const form = createForm<DataType>({
        onSubmit: ({values}) => loginFx(values),
        initialValues: {
            email: email,
            password: password,
        }
    });
    const {controller, handleSubmit} = useForm({form});
    return (<div>
        <form onSubmit={handleSubmit} style={{display:'inline'}}>
            <Input controller={controller({name: form.getName('email')})} label="email"/>
            <Input controller={controller({name: form.getName('password')})} label="password"/>
            <button type="submit">submit</button>
        </form>
        <button onClick={reset}>reset</button>
        <div className={s.values}>
            <div><span>Login: </span><span className={s.span}>{data.resultCode === 0 ? 'true' : 'false'}</span></div>
            <div><span>Email:</span> lelik21212121@gmail.com</div>
            <div><span>Password: </span>enter_free</div>
        </div>
    </div>)
}
export default Login;