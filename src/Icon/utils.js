import icons from "./icons";

export const generateSvg = (icon) => {
    const wrapper = document.createElement("span");
    wrapper.innerHTML = icons[icon];
    return wrapper.children[0];
}

export const getAttrs = (attrs) =>{
    let props = {};
    for (let i = 0; i < attrs.length; i++) {
        let curProps = attrs.item(i);
        let name = curProps.name;

        if (curProps.name === "class")
            name = "className";
        if (curProps.name === "fill-rule" || curProps.name === "fillrule")
            name = "fillRule";

        props[name] = curProps.value;
    }
    return props;
}