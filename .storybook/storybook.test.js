import Alert from "../src/Alert/Alert";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import initStoryshots from '@storybook/addon-storyshots';
 initStoryshots();

it("test", () => {
    expect(2+2).toBe(4);
})
// it("Alert test", () => {
//     const component = shallow(<Alert
//         content="test content"
//         action={{type: "dismiss"}}
//         visible
//     />)
//     expect(component).toMatchSnapshot();
//     expect(component.find(".swf-alert-container").length).toBe(1);
// })