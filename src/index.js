import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    
);

// hmy poori app ko react-router-dom banana h so that bcz yeh aik pkg h so that hm pooray page ko is say browser-router bna ah jab poori app browser-router hogi so that yeh pkg chly ga.