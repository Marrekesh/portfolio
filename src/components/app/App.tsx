import React from 'react';
import PreviewPage from "../../pages/previewPage/PreviewPage";
import TechnologiesPage from "../../pages/technologiesPage/TechnologiesPage";


import c from './App.module.css';

function App() {
    return (
        <div className={c.App}>
            <PreviewPage/>
            <TechnologiesPage/>
        </div>
    );
}

export default App;
