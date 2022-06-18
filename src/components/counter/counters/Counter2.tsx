import {createComponent} from 'effector-react';
import {$counter2, increment2} from '../../../store/counter';
import s from './Counter.module.scss';

export const Counter2 = createComponent($counter2, (props, state) => (
    <div className={s.counter}>
        Counter2: <span>{state}</span>
        <button onClick={increment2} disabled={state > 4}>+</button>
    </div>
))