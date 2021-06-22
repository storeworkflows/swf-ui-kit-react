import Button from "./Button";
import {mount, shallow} from 'enzyme';
import {addStyles, getIconSize} from "./utils";


describe("Button component", () => {

    it("contains text", () => {
        const component = shallow(<Button label={"Button"}/>)

        expect(component.find('label').exists()).toEqual(true);
        expect(component.text()).toEqual("Button");

        expect(component.find('Icon').exists()).toEqual(false);
    })

    it("contains icon", () => {
        const component = shallow(<Button icon={"alarm"}/>)
        expect(component.find('Icon').exists()).toEqual(true);

        expect(component.find('label').exists()).toEqual(false);
    })

    it("contains icon and text", () => {
        const component = shallow(<Button icon={"alarm"}  label={"Button"}/>)

        expect(component.find('Icon').exists()).toEqual(true);

        expect(component.find('label').exists()).toEqual(true);
        expect(component.find('label').text()).toEqual("Button");
    })

    // it("Button can`t click when disabled", () => {
    //     const component = shallow(<Button label={"Button"} disabled/>)
    //     component.simulate('click')
    //     expect(component.find('Icon').exists()).toEqual(true);
    //
    //     expect(component.find('label').exists()).toEqual(true);
    //     expect(component.find('label').text()).toEqual("Button");
    // })

})

describe("Button utils", () => {
    it("test custom style addition", () => {
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

