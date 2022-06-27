import s from './Counter.module.scss';
import {increment, reset} from '../../../store/counter';

type Props = {
    state: number
}
 const Counter = ({state}: Props) => {

    return (<div className={s.counter}>
        Counter: <span>{state}</span>
        <button onClick={increment}>+</button>
        <button onClick={reset}>reset</button>
    </div>)
}
export default Counter;
