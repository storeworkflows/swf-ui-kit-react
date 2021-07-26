import {shallow, mount, render} from 'enzyme';
import Icon from "./Icon";
import icons from "./icons";
import {generateSvg, getAttrs} from "./utils";
import {SIZE} from "./constants";
import {TEST_TEMPLATES, testClassNameProp} from "../../.storybook/testTemplates";
import Button from "../Button/Button";

describe("Icon", () => {

    describe("component", () => {
        let component;

        describe("view", () => {
            beforeAll(() => component = shallow(<Icon icon={"x"}/>))

            it("Should render if 'icon' is correct", () => {
                const correctIcons = ["alarm", "x", "arrow-down-circle"];

                correctIcons.map(icon => {
                    component.setProps({icon});
                    expect(component.find('svg').length).toBe(1);
                })
            })

            it("Should not render if 'icon' is incorrect", () => {
                const incorrectIcons = ["", "aaalarm"];

                incorrectIcons.map(icon => {
                    component.setProps({icon});
                    expect(component).toEqual({});
                })
            })
        })

        describe("styles", () => {
            beforeAll(() => component = shallow(<Icon icon={"x"}/>))

            it('Should contain class according to prop "className" ', () => {
                TEST_TEMPLATES.testClassNameProp(component)
            })

            it("Should have style.color according to prop 'color'", () => {
                const color = "red"
                component.setProps({color});
                const svgStyle = component.find('svg').get(0).props.style;
                expect(svgStyle.color).toMatch(color);
            })

            it("Should have style.height and style.width according to prop 'size'", () => {
                const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
                let svgStyle;

                component.setProps({customSize: undefined});

                sizes.forEach(size => {
                    component.setProps({size});
                    svgStyle = component.find('svg').get(0).props.style;

                    expect(svgStyle.height).toBe(SIZE[size]);
                    expect(svgStyle.width).toBe(SIZE[size]);
                })
            })

            it("Should have style.height and style.width according to prop 'customSize'", () => {
                const customSize = 20;
                const size = 'xs'

                component.setProps({customSize});
                let svgStyle = component.find('svg').get(0).props.style;

                expect(svgStyle.height).toBe(customSize);
                expect(svgStyle.width).toBe(customSize);

                component.setProps({size});
                svgStyle = component.find('svg').get(0).props.style;

                expect(svgStyle.height).toBe(customSize);
                expect(svgStyle.width).toBe(customSize);
            })
        })

        it("Should be clickable", () => {
            let onClick = jest.fn();
            component = mount(<Icon icon={"x"} onClick={onClick}/>)
            TEST_TEMPLATES.testOnClick(component, onClick)
        })

        it("Should have ref", () => {
            let checkRef = {};
            component = mount(<Icon icon={"x"} innerRef={checkRef}/>)
            expect(component.getDOMNode()).toEqual(checkRef.current)
        })
    })

    describe("utils", () => {
        it("Should reform attributes (getAttrs)", () => {
            let attrs = [
                {name: "name", value: "value"},
                {name: "class", value: "className"},
                {name: "fill-rule", value: "fillRule"}
            ];

            let expectObj = {
                name: "value",
                className: "className",
                fillRule: "fillRule"
            }
            expect(getAttrs(attrs)).toEqual(expectObj)

            attrs.push( {name: "fillrule", value: "fillRule2"})
            expectObj.fillRule = "fillRule2";
            expect(getAttrs(attrs)).toEqual(expectObj)
        })

        it("Should generate svg (generateSvg)", () => {

            let icon = "alarm";
            let generatedIcon = generateSvg(icon);
            expect(generatedIcon).toBeDefined();

            icon = "aaalarm";
            generatedIcon = generateSvg(icon);
            expect(generatedIcon).toBeUndefined();
        })

    })

});