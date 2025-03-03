import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';

const Main = () => {
    return (
        <React.StrictMode>  
            <App />
        </React.StrictMode>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
