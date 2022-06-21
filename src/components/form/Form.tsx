import React from 'react';
import { Controller, createForm, useForm } from 'effector-react-form';
import {createEvent, createStore} from 'effector';
import {useStore} from 'effector-react';

type Values = {
    username: string;
    profile: {
        firstName: string;
        lastName: string;
    };
};
const onChange=createEvent<string>();
const $input1=createStore<string>('').on(onChange,(state,str)=>str);

const form = createForm<Values>({
    onSubmit: ({ values }) => alert(JSON.stringify(values, null, '  ')),
});

type InputProps = {
    controller: Controller;
    label: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ controller, label }) => {
    const { input } = controller();

    return (
        <div className="input-wrap">
            <label>{label}</label>
            <input {...input} value={input.value || ''} className="input"  />
        </div>
    );
};

export const Form = () => {
    const { controller, handleSubmit } = useForm({ form });
const input=useStore($input1);
    return (
        <form onSubmit={handleSubmit}>
            <Input label="Username" controller={controller({ name:input})} />
            <Input label="First name" controller={controller({ name: form.getName('profile', 'firstName') })} />
            <Input label="Last name" controller={controller({ name: form.getName('profile', 'lastName') })} />
            <button type="submit">submit</button>
        </form>
    );
};
