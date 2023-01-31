import React, { useState } from "react";
import Counter from "./Counter";

function Counters(props) {
    const [counters, setCounters] = useState([
        { id: 1, value: 0 },
        { id: 2, value: 2 },
        { id: 3, value: 4 },
        { id: 4, value: 0 },
        { id: 5, value: 5 },
    ]);

    function handleDelete(counter) {
        const newCounters = counters.filter((c) => c.id !== counter.id);
        setCounters(newCounters);
    }

    function handleIncrement(counter) {
        const newCounters = [...counters];
        const counterIndex = newCounters.indexOf(counter);
        newCounters[counterIndex] = { ...newCounters[counterIndex] };
        newCounters[counterIndex].value += 1;
        setCounters(newCounters);
    }

    function handleDecrement(counter) {
        const newCounters = [...counters];
        const counterIndex = newCounters.indexOf(counter);
        newCounters[counterIndex] = { ...newCounters[counterIndex] };
        newCounters[counterIndex].value -= 1;
        setCounters(newCounters);
    }

    return (
        <div>
            {counters.map((counter) => (
                <div key={counter.id} className="mb-2">
                    <Counter
                        {...counter}
                        onIncrement={() => handleIncrement(counter)}
                        onDecrement={() => handleDecrement(counter)}
                        onDelete={() => handleDelete(counter)}
                    />
                </div>
            ))}
        </div>
    );
}

export default Counters;
