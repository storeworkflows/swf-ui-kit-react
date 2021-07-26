import icons from "./icons";

export const generateSvg = (icon) => {
    const wrapper = document.createElement("span");
    wrapper.innerHTML = icons[icon];
    // wrapper.innerHTML = <svg className="bi" width="16" height="16" fill="currentColor">
    //     <use xlink:href="bootstrap-icons.svg#bootstrap"/>
    // </svg>
    return wrapper.children[0];
}

export const getAttrs = (attrs) =>{
    let props = {};
    let length = attrs.length;

    for (let i = 0; i < length; i++) {
        let curProps = attrs[i];
        let name = curProps.name;

        if (curProps.name === "class")
            name = "className";
        if (curProps.name === "fill-rule" || curProps.name === "fillrule")
            name = "fillRule";

        props[name] = curProps.value;
    }
    return props;
}