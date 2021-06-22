import Button from "./Button";
import { shallow } from 'enzyme';


it("Button test", () => {
    const component = shallow(<Button
        label={"Button"}
    />)
    expect(component.find(".button-label").length).toBe(1);
})