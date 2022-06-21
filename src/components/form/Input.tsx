import {Controller} from 'effector-react-form';
import React from 'react';

type PropsType = {
    controller: Controller;
    label: React.ReactNode;
}
 const Input: React.FC<PropsType> = ({controller, label}) => {
    const {input} = controller();
    return (<div>
        <label>{label}</label>
        <input {...input} value={input.value || ''}/>

    </div>)
}
export default Input;