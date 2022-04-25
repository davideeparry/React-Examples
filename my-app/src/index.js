// Import the React and ReactDOM libraries
// Import instead of require is from ES201, CommonJS modules use the require syntax.
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = function() {
    const buttonText = { text: 'Click me!'};
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}</button>
        </div>
    )
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);