import React from "react";

const findByType = (children, component) => {

    return React.Children.map(children, child => child.type.displayName === name ? child : null);
}

export const createSubComponent = (name) => {
    const subComponent = ({children}) => children;

    Object.defineProperty(subComponent, "displayName", {value: name, writable: false});
    return subComponent
}

export default findByType