import * as React from "react";
import {shallow, mount} from "enzyme";
import {default as LabelValue} from "./LabelValue";
import {Icon} from "../index";
import {TEST_TEMPLATES} from "../../.storybook/testTemplates";

describe("LabelValue", () => {
    let component;

    it("Should have ref", () => {
        let checkRef = React.createRef();
        component = mount(<LabelValue ref={checkRef}/>)
        expect(component.getDOMNode()).toEqual(checkRef.current)
    })

    it("Should be clickable", () => {
        let onClick = jest.fn();
        component = mount(<LabelValue onClick={onClick}/>)
        TEST_TEMPLATES.testOnClick(component, onClick);
    })

    it("Should render value as element", () => {
        const value =  <Icon icon={"x"}/>
        component = shallow(<LabelValue>
            <LabelValue.Value>
                {value}
            </LabelValue.Value>
        </LabelValue>)

        expect(component.exists(".value-content")).toBeTruthy();
        expect(component.contains(value)).toBeTruthy();
    })

    describe("view", () => {
        beforeAll(() => component = shallow(<LabelValue/>));

        it("Should render component", () => {
            expect(component.exists('div')).toBeTruthy();
            expect(component.exists('.label-value-container')).toBeTruthy();
        })

        it("Should render label", () => {
            const label = "Hello";
            expect(component.exists('label')).toBeFalsy();

            component.setProps({label});
            expect(component.exists('label')).toBeTruthy();
            expect(component.text()).toMatch(label);
        })

        it("Should render value as text", () => {
            const value = "value";
            expect(component.exists(".value-content")).toBeFalsy();

            component.setProps({value});
            expect(component.exists(".value-content")).toBeTruthy();
            expect(component.find(".value-content").text()).toMatch(value);
        })


        it("Should contain container className", () => {
            TEST_TEMPLATES.testClassNameProp(component)
        })

        it("Should contain label className", () => {
            const labelClassName = "labelClassName"
            component.setProps({labelClassName});
            component.setProps({label: "Hello"});
            expect(component.find('label').hasClass(labelClassName)).toBeTruthy();
        })

        it("Should contain value className", () => {
            const valueClassName = "valueClassName"
            component.setProps({valueClassName});
            component.setProps({value: "Hello"});
            expect(component.find('.value-content').hasClass(valueClassName)).toBeTruthy();
        })

        it("Should contain inline classes", () => {
            component.setProps({inline: true});
            component.setProps({value: "Hello"});
            expect(component.hasClass("--display-flex")).toBeTruthy();
            expect(component.find('.value-content').hasClass("--inline")).toBeTruthy();
        })

        it("Should contain class to make label bold", () => {
            component.setProps({label: "Hыello"});
            expect(component.hasClass('--unimportant')).toBeFalsy();
            expect(component.find("label").hasClass('--unimportant')).toBeFalsy();

            component.setProps({importantLabel: false});
            expect(component.hasClass('--unimportant')).toBeTruthy();
            expect(component.find("label").hasClass('--unimportant')).toBeTruthy();
        })

        it("Should contain classes for size property", () => {
            expect(component.hasClass('--md')).toBeTruthy();
            const sizes = ["sm", "md", "lg"];

            sizes.forEach(size => {
                component.setProps({size});
                expect(component.hasClass(`--${size}`)).toBeTruthy();
            })
        })
    })
})