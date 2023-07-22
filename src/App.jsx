import React from "react";
import { createRoot } from "react-dom/client";
import FirstConatiner from "./FirstContainer";

const App = () => {
    return (
        <div>
            Hello World
            <FirstConatiner text="First Container" />
        </div>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);