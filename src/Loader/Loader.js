import propTypes from "prop-types";
import React, { useEffect, useRef } from "react";

export default function Loader({size = 32}) {

    const boxesRef = useRef(null);

    useEffect(() => {
        if (boxesRef?.current) {
            boxesRef.current.style.setProperty("--size", size + "px");
        }
    }, [size])

  return (
    <div className="lds-ellipsis">
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
  );
}

Loader.propTypes = {
    size: propTypes.number,
}
