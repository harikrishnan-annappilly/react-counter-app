import React, { useContext, useState } from "react";
import Counter from "./Counter";
import CounterContext from "./CounterContext";

function Counters(props) {
    const counterContext = useContext(CounterContext);
    const { counters, onDecrement, onDelete, onIncrement } = counterContext;

    return (
        <div>
            {counters.map((counter) => (
                <div key={counter.id} className="mb-2">
                    <Counter
                        {...counter}
                        onIncrement={() => onIncrement(counter)}
                        onDecrement={() => onDecrement(counter)}
                        onDelete={() => onDelete(counter)}
                    />
                </div>
            ))}
        </div>
    );
}

export default Counters;
