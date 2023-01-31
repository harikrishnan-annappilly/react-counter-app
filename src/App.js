import { useState } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
import CounterContext from "./components/CounterContext";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
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

    function addNewCounter() {
        const newCounter = {
            id: counters.length ? counters.slice(-1)[0].id + 1 : 1,
            value: 0,
        };
        const newCounters = [...counters];
        newCounters.push(newCounter);
        setCounters(newCounters);
    }

    return (
        <CounterContext.Provider
            value={{
                counters,
                setCounters,
                onDelete: handleDelete,
                onIncrement: handleIncrement,
                onDecrement: handleDecrement,
                onNew: addNewCounter,
            }}
        >
            <NavBar />
            <div className="container mt-2">
                <Counters />
            </div>
        </CounterContext.Provider>
    );
}

export default App;
