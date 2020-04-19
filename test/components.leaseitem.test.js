import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import LeaseItem from '../src/components/LeaseItem';

configure({ adapter: new Adapter() });

describe('LeaseItem Component', () => {
    const defaultProps = {
        key: 'lease-a',
        id: 'lease-a',
        tenant: 'Alex',
    };

    it('renders lease-item component correctly', () => {
        const component = renderer.create(
            <MemoryRouter>
                <LeaseItem {...defaultProps} />
            </MemoryRouter>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('check tenant name container displayed correctly', () => {
        const container = mount(
            <MemoryRouter>
                <LeaseItem {...defaultProps} />
            </MemoryRouter>
        ).find('.card-item-title');
        expect(container.hasClass('card-item-title')).toEqual(true);
    });

    it('check tenant name displayed correctly', () => {
        const container = mount(
            <MemoryRouter>
                <LeaseItem {...defaultProps} />
            </MemoryRouter>
        ).find('.card-item-title');
        expect(container.text()).toEqual(defaultProps.tenant);
    });
});