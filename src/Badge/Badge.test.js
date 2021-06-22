import Badge from "./Badge";
import { shallow } from 'enzyme';

const component = shallow(<Badge
    label={"Badge"}
/>)

describe('Badge tests', () => {
    it("contain class .swf-badge-root", () => {
        expect(component.find(".swf-badge-root").length).toBe(1);
    })

    it("contain class .swf-badge", () => {
        expect(component.find(".swf-badge").length).toBe(1);
    })
})

