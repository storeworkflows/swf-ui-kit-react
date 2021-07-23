import Button from "./Button";
import {mount, shallow} from 'enzyme';
import {addStyles, getIconSize} from "./utils";
import {TEST_TEMPLATES} from "../../.storybook/testTemplates";

describe("Button", () => {
    describe("component", () => {
        let component;

        it("Should render children", () => {
            const child = <p>Hello</p>;
            component = shallow(<Button>{child}</Button>);
            expect(component.contains(child)).toBeTruthy();
        })

        it("Should have ref", () => {
            let checkRef = {};
            component = mount(<Button innerRef={checkRef}/>)
            expect(component.getDOMNode()).toEqual(checkRef.current)
        })

        describe("view", () => {
            beforeEach(() => component = shallow(<Button/>))

            it("Should contain text", () => {
                component.setProps({label: "Button"})

                expect(component.text()).toMatch("Button");
                expect(component.exists('Icon')).toBeFalsy();
            })

            it("Should contain icon", () => {
                component.setProps({icon: "alarm"})

                expect(component.exists('Icon')).toBeTruthy();
                expect(component.exists('label')).toBeFalsy();
            })

            it("Should contain icon and text", () => {
                component.setProps({icon: "alarm", label: "Button"})

                expect(component.exists('Icon')).toBeTruthy();
                expect(component.text()).toMatch("Button");
            })

        })

        describe("actions", () => {
            let onClick = () => void 0;

            beforeEach(() => {
                onClick = jest.fn();
                component = mount(<Button label={"Button"} onClick={onClick}/>)
            })

            it("Should to be clickable", () => {
               TEST_TEMPLATES.testOnClick(component, onClick)
            })

            it("Should not to be clickable when disabled", () => {
                TEST_TEMPLATES.testOnClickWhenDisabled(component, onClick)
            })

        })

        describe("props", () => {
            beforeAll(() => component = shallow(<Button/>));

            it('Should contain class from props', () => {
                TEST_TEMPLATES.testClassNameProp(component)
            })

            it(`should contain size according to prop 'size'`, () => {
                const sizes = ['sm', 'md', 'lg'];
                sizes.map(size => {
                    component.setProps({size})
                    expect(component.hasClass(`button-${size}`)).toBeTruthy();
                })
            })

            it(`Should have 'button' type when 'type' prop not defined `, () => {
                let buttonType = component.find('button').get(0).props.type;
                expect(buttonType).toMatch('button');
            })

            it(`button type should be same as prop 'type' `, () => {
                const types = ['button', 'reset', 'submit'];
                types.map(type => {
                    component.setProps({type})
                    let buttonType = component.find('button').get(0).props.type;
                    expect(buttonType).toMatch(type);
                })
            })

            it(`should contain class variant according to prop 'variant' `, () => {
                const variants = ["primary", "tertiary", "inherit"]
                variants.map(variant => {
                    component.setProps({variant})
                    expect(component.hasClass(variant)).toBeTruthy();
                });
            })

            it("Should change style according to customStyle", () => {
                component.setProps({customStyle: {height: '2rem'}})
                const buttonEl = component.find('button').get(0);
                expect(buttonEl.props.style).toHaveProperty('--height', '2rem');
            })
        })
    })

    describe("utils", () => {
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
                expect(getIconSize({"font-size": "14px"},
                    "alarm", "sm")).toBe(14)
                expect(getIconSize({"font-size": "1.5rem"},
                    "alarm", "md")).toBe(24)
                expect(getIconSize({"font-size": "1.5em"},
                    "alarm", "lg")).toBe(16)
                expect(getIconSize({"font": "1.5em"},
                    "alarm", "sm")).toBe(12)
            })
        })

    })
})

