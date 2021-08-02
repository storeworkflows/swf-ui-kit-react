import Toggle from "./Toggle";
import {TEST_TEMPLATES} from "../../.storybook/testTemplates";
import {mount} from "enzyme";

const {shallow} = require("enzyme");

describe("Toggle", ()=> {
    let component;

    describe("view", () => {
        beforeAll(() => component = shallow(<Toggle/>))

        it("Should have prop className", () => {
            TEST_TEMPLATES.testClassNameProp(component)
        })

        it("Should have class according 'size' prop", () => {
            const sizes = ["sm", "md"];

            sizes.map(size => {
                component.setProps({size});
                expect(component.hasClass(`toggle-${size}`)).toBeTruthy();
            })
        })

        it("Should have 'disable' class if 'disable' prop true", () => {
            component.setProps({disabled: true});
            expect(component.hasClass(`disabled`)).toBeTruthy();
        })

        it("Should have prop visible", ()=> {
            expect(component.exists('label')).toBeTruthy();
            expect(component.exists('input')).toBeTruthy();

            component.setProps({visible: false})
            expect(component).toEqual({});
        })
    })

    describe("action", () => {
        let onClick;
        beforeEach(() => {
            onClick = jest.fn();
            component = mount(<Toggle onClick={onClick}/>)
        })

        it("Should be clickable", () => {
            component.find('input').simulate('change')
            expect(onClick.mock.calls.length).toBe(1);
        })

        it("Should not be clickable if disabled", () => {
            component.setProps({disabled: true})
            component.find('input').simulate('change')
            expect(onClick.mock.calls.length).toBe(0);
        })
    })

    describe("managing checked", () => {
        it("Should change isChecked state if manageChecked = false", () => {
            component = shallow(<Toggle />)
            let input = component.find('input');
            expect(input.get(0).props.checked).toBe(false);

            input.simulate('change');
            component.update();
            expect( component.find('input').get(0).props.checked).toBe(true);

            component.setProps({checked: false})
            expect(component.find('input').get(0).props.checked).toBe(true);

            component = shallow(<Toggle checked={true}/>)
            expect(component.find('input').get(0).props.checked).toBe(true);
        })

        it("Should not change isChecked state if manageChecked = true", () => {
            component = shallow(<Toggle manageChecked = {true} checked={true}/>)
            let input = component.find('input');
            expect(input.get(0).props.checked).toBe(true);

            component.setProps({checked: false})
            expect(component.find('input').get(0).props.checked).toBe(false);

            input.simulate('change');
            component.update();
            expect( component.find('input').get(0).props.checked).toBe(false);

        })
    })

    it("Should have ref", () => {
        let checkRef = {};
        component = mount(<Toggle ref={checkRef}/>)
        expect(component.getDOMNode()).toEqual(checkRef.current)
    })
})