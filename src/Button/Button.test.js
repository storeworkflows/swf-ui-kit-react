import Button from "./Button";
import {mount, shallow} from 'enzyme';
import {addStyles, getIconSize} from "./utils";


describe("Button component", () => {
    it("Should contain text", () => {
        const component = shallow(<Button label={"Button"}/>)

        expect(component.find('label').exists()).toBe(true);
        expect(component.text()).toBe("Button");

        expect(component.find('Icon').exists()).toBe(false);
    })

    it("Should contain icon", () => {
        const component = shallow(<Button icon={"alarm"}/>)
        expect(component.find('Icon').exists()).toBe(true);

        expect(component.find('label').exists()).toBe(false);
    })

    it("Should contain icon and text", () => {
        const component = shallow(<Button icon={"alarm"}  label={"Button"}/>)

        expect(component.find('Icon').exists()).toBe(true);

        expect(component.find('label').exists()).toBe(true);
        expect(component.find('label').text()).toBe("Button");
    })

    // it("Ability to click", () => {
    //     let clicked = 0;
    //     const onClick = () => clicked++;
    //     const component = shallow(<Button label={"Button"} onClick={onClick}/>)
    //
    //     component.find('button').simulate('click')
    //     expect(clicked).toBe(1);
    // })
    //
    // it("No ability to click when disabled", () => {
    //     let clicked = false;
    //     const onClick = () => clicked = true;
    //     const component = shallow(<Button label={"Button"} disabled onClick={onClick}/>)
    //
    //     component.find('button').simulate('click')
    //     expect(clicked).toBe(false);
    // })

})

describe("Button utils", () => {
    it("Custom style addition", () => {
        const customStyle = {
            "base-color": 'red',
            "color": 'blue',
            "hover-border-color": "white",
            "active-text-color": "black",
            "border-width": "1px",
            "font-size": "14px"
        }

        expect(addStyles(customStyle)).toEqual({
            "--base-color": "red",
            "--hover-border-color": "white",
            "--active-text-color": "black",
            "--border-width": "1px",
            "--font-size": "14px"
        })
    })

    describe("Define icon size", () => {
        it("has no icon", () => {
            expect(getIconSize(null, "", "sm")).toBe(16)
        })

        it("has no custom styles", () => {
            expect(getIconSize(null, "alarm", "sm")).toBe(12)
            expect(getIconSize(null, "alarm", "lg")).toBe(24)
            expect(getIconSize(null, "alarm", null)).toBe(16)
        })

        it("has custom styles", () => {
            expect(getIconSize({"font-size": "14px" },
                "alarm", "sm")).toBe(14)
            expect(getIconSize({"font-size": "1.5rem" },
                "alarm", "md")).toBe(24)
            expect(getIconSize({"font-size": "1.5em" },
                "alarm", "lg")).toBe(16)
            expect(getIconSize({"font": "1.5em" },
                "alarm", "sm")).toBe(12)
        })
    })

})

