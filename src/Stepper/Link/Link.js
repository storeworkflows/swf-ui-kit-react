import React from 'react';

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="link link-container">
                <div className="link-strip"/>
            </div>
        );
    }
}

export default Link;