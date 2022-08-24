import { useCounter } from './hooks';

import { CounterText } from './CounterText';

export const CounterB = () => {
    const { count, countAdd, countSub, countReset } = useCounter(0);
    return (
        <div className="counterContainer">
            <h1>CounterB</h1>
            <CounterText count={count} />
            <button onClick={countAdd}>+</button>
            <button onClick={countSub}>-</button>
            <button onClick={countReset}>reset</button>
        </div>
    );
}