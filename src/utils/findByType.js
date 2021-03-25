import React from "react";

const findByType = (children, type) => {
    return React.Children.map(children, child => {
        return child?.type?.displayName === type ? child : null
    });
}

export const createSubComponent = (name) => {
    const subComponent = ({children}) => children;

    Object.defineProperty(subComponent, "displayName", {value: name, writable: false});
    return subComponent
}

export default findByType