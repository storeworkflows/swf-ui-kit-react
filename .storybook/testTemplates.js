

export const TEST_TEMPLATES = {
    testClassNameProp: (component) => {
        const className = "class name";
        component.setProps({className});
        expect(component.hasClass(className)).toBeTruthy();
    },
    testOnClick: (component, onClick) => {
        component.simulate('click')
        expect(onClick.mock.calls.length).toBe(1);
    },
    testOnClickWhenDisabled: (component, onClick) => {
        component.setProps({disabled: true})

        component.simulate('click')
        expect(onClick.mock.calls.length).toBe(0);
    }
}

