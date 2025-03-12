// import React from "react";
// import ReactDOM from "react-dom/
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

const App = () => <h1>Hello there!</h1>;
const rootElement = document.getElementById('root')!;

const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);