import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './components/Portfolio.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
<Router>
    <Portfolio />
</Router>
,document.getElementById('root'));