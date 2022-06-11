import './App.css';
import {Counter} from './componentsForCounter/counter/Counter';
import {MyInput} from './componentsForCounter/MyInput';
import {Submit} from './componentsForForm/Submit';
import {useStore} from 'effector-react';
import {Effect} from './componentsForForm/Effect';
import {buttonApp} from './unitsEffector/app';
import {Counter2} from './componentsForCounter/counter/Counter2';
import {$counter} from './unitsEffector/counter';


function App() {
    const isTrue = useStore(buttonApp.$isTrue);
    const state = useStore($counter);
    return (
        <div className="App">
            <div className="container">
                <button onClick={buttonApp.switchButton}>{isTrue ? 'to form' : 'to counter'}</button>
                {
                    isTrue
                        ? <div className="block">
                            <MyInput/>
                            {/*<Counter state={state}/>*/}
                            {/*<Counter2/>*/}
                        </div>
                        :
                        <div className="block">
                            <Submit/>
                            <Effect/>
                        </div>
                }
            </div>
        </div>
    );
}

export default App;
