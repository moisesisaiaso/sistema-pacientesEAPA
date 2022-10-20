import React from "react";

export const Busqueda = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <form class="container-fluid">
                <div class="input-group">
                    <button class="input-group-text" id="basic-addon1">
                        🔍 🔎🔎
                    </button>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search by Name or CI"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </div>
            </form>
        </nav>
    );
};
