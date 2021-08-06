import { mount, shallow } from 'enzyme';
import Badge from './Badge';
import { TEST_TEMPLATES } from '../../.storybook/testTemplates';

describe('Badge', () => {
  let component;

  describe('view', () => {
    beforeAll(() => component = shallow(<Badge />));

    describe('Contain classes', () => {
      it('Should contain class .swf-badge-root', () => {
        expect(component.find('.swf-badge-root').length).toBe(1);
      });

      it('Should contain class .swf-badge', () => {
        expect(component.find('.swf-badge').length).toBe(1);
      });

      it('Should contain class according to prop className', () => {
        TEST_TEMPLATES.testClassNameProp(component);
      });
    });

    describe('Prop "text" ', () => {
      it('Should contain text', () => {
        const text = 'Badge';
        component.setProps({ text });
        expect(component.text()).toMatch(text);
      });

      it('Should not contain text', () => {
        const text = '';
        component.setProps({ text });
        expect(component.text()).toMatch(text);
      });
    });

    it('Should contain class when exist props \'variant\'', () => {
      const variants = ['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue'];
      variants.map((variant) => {
        component.setProps({ variant });
        const el = component.find('span');
        expect(el.hasClass(variant)).toBe(true);
      });
    });
  });

  it('Should have ref', () => {
    const checkRef = {};
    component = mount(<Badge ref={checkRef} />);
    expect(component.getDOMNode()).toEqual(checkRef.current);
  });
});
