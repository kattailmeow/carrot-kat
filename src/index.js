import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const rootContainer = document.querySelector(
    '#chat-buttons-container, #send_form',
);

if(rootContainer) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}else {
    console.error(
        '胡萝卜输入面板: 未能找到SillyTavern的UI挂载点, 插件无法加载。',
    );
    return;
}