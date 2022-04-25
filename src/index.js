import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/index';

const container = document.getElementById('delegation-btns');
const root = createRoot(container);
root.render( < App tab = "home" /> );