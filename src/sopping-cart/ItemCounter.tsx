import { useState } from "react";



//import './ItemCounter.css'
import styles from './ItemCounter.module.css'

interface Props {
    gameName: string,
    quantity?: number
}

export const ItemCounter = ({ gameName, quantity = 1 }: Props) => {

    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    };
    const handleRemove = () => {
        if (count === 0) return;
        setCount(count - 1);
    };

    return (
        <section
            //className="item-row"
            className={styles.itemRow}
        //style={{
        //    display: 'flex',
        //    alignItems: 'center',
        //    gap: 10,
        //    marginBottom: 10
        //}}
        >
            <span
                className={styles["item-text"]}
                //className="item-text"
                style={{
                    color: count === 1 ? 'red' : 'black',
                }}>
                {gameName} </span>
            <button
                onClick={handleRemove}
            >-1</button>
            <span>{count}</span>
            <button
                onClick={handleAdd}
            >+1</button>
        </section>
    )
}
