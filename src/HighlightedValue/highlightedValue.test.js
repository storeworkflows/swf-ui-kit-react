import * as React from "react";
import {shallow, mount} from "enzyme";
import HighlightedValue from "./HighlightedValue";
import {TEST_TEMPLATES} from "../../.storybook/testTemplates";

describe("HighlightedValue", ()=> {
    let component;

    it("Should have ref", () => {
        let checkRef = React.createRef();
        component = mount(<HighlightedValue ref={checkRef}/>)
        expect(component.getDOMNode()).toEqual(checkRef.current)
    })

    it("Should be clickable", () => {
        let onClick = jest.fn();
        component = mount(<HighlightedValue onClick={onClick}/>)
        component.find('.highlighted-color-container').simulate('click')
        expect(onClick.mock.calls.length).toBe(1);
    })

    describe("view", () => {
        beforeAll(() => component = shallow(<HighlightedValue/>))

        it("Should render component", () => {
            let div = component.find("div");

            expect(div.length).toBe(2);
            expect(div.at(0).hasClass("highlighted-value-container")).toBeTruthy();
            expect(div.at(1).hasClass("highlighted-color-container")).toBeTruthy();
        })

        it("Should render label", () => {
            const label = "Hello"
            expect(component.text()).toMatch("");
            expect(component.exists('span')).toBeFalsy();

            component.setProps({label});
            expect(component.text()).toMatch(label);
        })

        it("Should render icon", () => {
            expect(component.exists('Icon')).toBeFalsy();

            component.setProps({showIcon: true});
            expect(component.exists('Icon')).toBeTruthy();

            component.setProps({icon: "alarm"});
            expect(component.exists('Icon')).toBeTruthy();
        })

        it("Should have className", () => {
            TEST_TEMPLATES.testClassNameProp(component)
        })

        it("Should have class to make border round", () => {
            expect(component.hasClass('--round')).toBeTruthy();
            expect(component.find('div').at(1).hasClass('--round')).toBeTruthy();


            component.setProps({roundBorder: false});
            expect(component.hasClass('--round')).toBeFalsy();
            expect(component.find('div').at(1).hasClass('--round')).toBeFalsy();
        })

        it("Should have class to define size", () => {
            expect(component.hasClass('--md')).toBeTruthy();

            const sizes = ["sm", "md", "lg"];
            sizes.map(size => {
                component.setProps({size});
                expect(component.hasClass(`--${size}`)).toBeTruthy();
            })
        })

        it("Should have class to define variant", () => {
            expect(component.find('div').at(1).hasClass(`--primary`)).toBeTruthy();

            const variants = ["secondary", "primary", "tertiary"];
            variants.map(variant => {
                component.setProps({variant});
                expect(component.find('div').at(1).hasClass(`--${variant}`)).toBeTruthy();
            })
        })

        it("Should have class to define color", () => {
            expect(component.hasClass('red')).toBeTruthy();

            const colors = ["yellow", "red", "green", "blue", "grey", "grey-blue"];
            colors.map(color => {
                component.setProps({color});
                expect(component.hasClass(`${color}`)).toBeTruthy();
            })
        })

    })
})