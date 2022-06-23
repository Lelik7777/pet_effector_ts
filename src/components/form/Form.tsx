import Input from './Input';
import {createForm, useForm} from 'effector-react-form';
import {createEvent, createStore} from 'effector';
import {useStore} from 'effector-react';

type Values = {
    userName: string;
    profile: {
        firstName: string;
        lastName: string;
    }
};
const onChange=createEvent<string>();
const $userName=createStore<string>('hello').on(onChange,(_,str)=>str);
const form = createForm<Values>({
    onSubmit: ({values}) => alert(JSON.stringify(values, null, 2)),
    initialValues: {
        userName: '',
        profile: {
            firstName: '',
            lastName: ''
        }
    }
});
const Form = () => {
    const userName=useStore($userName);
    const {controller,handleSubmit} = useForm({form})
    return (
        <form onSubmit={handleSubmit}>
            <Input controller={controller({name: ''})} label={'userName'}/>
            <Input controller={controller({name: form.getName('profile', 'firstName')})} label={'firstName'}/>
            <button type={'submit'}>submit</button>
        </form>
    )
}
export default Form;
console.log($userName.getState())