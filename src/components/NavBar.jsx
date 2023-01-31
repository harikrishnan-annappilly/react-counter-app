import React, { useContext } from "react";
import CounterContext from "./CounterContext";

function NavBar(props) {
    const { counters, onNew } = useContext(CounterContext);
    const count = counters.filter((c) => c.value > 0).length;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light user-select-none">
            <div className="container-fluid">
                <span className="navbar-brand">
                    Navbar <span className="badge bg-primary">{count}</span>
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <button
                            className="btn btn-success btn-sm"
                            onClick={onNew}
                        >
                            New
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
