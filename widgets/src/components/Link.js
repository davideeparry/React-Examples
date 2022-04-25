import React from 'react';

const Link = ({text, href}) => {
    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        
        e.preventDefault();
        window.history.pushState({},'', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} href={href} className="item">{text}</a>
};

export default Link;