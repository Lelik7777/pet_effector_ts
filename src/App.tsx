import s from './App.module.scss';
import {Counter} from './components/counter/counters/Counter';
import {CustomInput} from './components/counter/CustomInput';
import {Login} from './components/form/Login';
import {useStore} from 'effector-react';
import {SearchFilms} from './components/form/SearchFilms';
import {buttonApp} from './store/app';
import {Counter2} from './components/counter/counters/Counter2';
import {$counter} from './store/counter';



function App() {
    const isTrue = useStore(buttonApp.$isTrue);
    const state = useStore($counter);
    return (
        <div className={s.App}>
            <div className={s.container}>
                <button onClick={buttonApp.switchButton}>{isTrue ? 'to form' : 'to counters'}</button>
                {
                    isTrue
                        ? <div className={s.block}>
                            <CustomInput/>
                            <Counter state={state}/>
                            <Counter2/>
                        </div>
                        :
                        <div className={s.block}>
                            <Login/>
                            <SearchFilms/>
                        </div>
                }
            </div>
        </div>
    );
}

export default App;
