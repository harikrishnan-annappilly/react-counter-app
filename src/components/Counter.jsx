import React from "react";

function Counter(props) {
    const { value: count, onIncrement, onDecrement, onDelete } = props;

    function renderCountComponent() {
        let classes = "user-select-none badge ";
        if (count > 4) classes += "bg-primary";
        else if (count > 2) classes += "bg-success";
        else if (count > 0) classes += "bg-danger";
        else classes += "bg-warning text-dark";

        const text = count === 0 ? "Zero" : count;

        return <span className={classes}>{text}</span>;
    }

    return (
        <div className="row">
            <div className="col-1">{renderCountComponent()}</div>
            <div className="col">
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={onIncrement}
                >
                    +
                </button>
                <button
                    className="btn btn-secondary btn-sm mx-2"
                    onClick={onDecrement}
                    disabled={count <= 0 ? true : false}
                >
                    -
                </button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>
                    x
                </button>
            </div>
        </div>
    );
}

export default Counter;
