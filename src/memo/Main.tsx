import { useCallback, useState } from 'react';
import { Children } from './Children';

export const Main = () => {
    const numbers = [2,4,6,8,10];
    const [value, setValue] = useState(0);

    const increment = useCallback((num: number) => {
        setValue((prevValue) => prevValue + num);
    },[]);

    return(
        <div>
            <h1>Hooks - incrementar total</h1>

            <code>
                Incrementa o total em intervalos diferentes usando os hooks useMemo e useCallback
            </code>

            <hr />

            <p>Total: { value }</p>

            <hr />

            {
                numbers.map(number => (
                    <Children key={ number } number= { number } increment = { increment }/>
                ))
            }
        </div>
    )
}