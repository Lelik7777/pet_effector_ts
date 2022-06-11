
import s from './Counter.module.css';
import {increment, reset} from '../../../store/counter';

type Props={
    state:number
}
export const Counter = ({state}:Props) => {

    return (<div className={s.counter}>
        Counter: <span>{state}</span>
        <button onClick={increment}>+</button>
        <button onClick={reset}>reset</button>
    </div>)
}

