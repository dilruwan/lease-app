import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import LeaseList from '../src/components/LeaseList';
import LeaseItem from '../src/components/LeaseItem';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Spinner from '../src/components/Spinner';

Enzyme.configure({ adapter: new Adapter() });

describe('LeaseList Component', () => {
    let initialState = {
        leasesReducer: {
            isLoading: false,
            leases: []
        }
    };

    const mockStore = configureStore();
    let store;

    it('renders leases-list component correctly', () => {
        store = mockStore(initialState);
        const component = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <LeaseList />
                </MemoryRouter>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should display page title', () => {
        store = mockStore(initialState);

        const container = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <LeaseList />
                </MemoryRouter>
            </Provider>
        ).find('h2');
        expect(container.hasClass('page-title')).toEqual(true);
        expect(container.text()).toEqual('Lease List');
    });

    it('display No leases found alert with empty leases', () => {
        store = mockStore(initialState);

        const container = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <LeaseList />
                </MemoryRouter>
            </Provider>
        ).find('.alert');
        expect(container.text()).toEqual('No leases found.');
    });

    it('should not display spinner when isLoading prop is false', () => {
        initialState = {
            leasesReducer: {
                isLoading: false,
                leases: []
            }
        };
        store = mockStore(initialState);

        const container = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <LeaseList />
                </MemoryRouter>
            </Provider>
        );
        expect(container.find(Spinner).props().show).toEqual(false);
    });

    it('should display spinner when isLoading prop is true', () => {
        initialState = {
            leasesReducer: {
                isLoading: true,
                leases: []
            }
        };
        store = mockStore(initialState);

        const container = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <LeaseList />
                </MemoryRouter>
            </Provider>
        );
        expect(container.find(Spinner).props().show).toEqual(true);
    });

    it('should display lease-items components if leases not empty', () => {
        initialState = {
            leasesReducer: {
                isLoading: false,
                leases: [
                    {id: "lease-a", tenant: "Alex"},
                    {id: "lease-b", tenant: "Jen"},
                    {id: "lease-c", tenant: "Frankie"}
                ]
            }
        };
        store = mockStore(initialState);

        const container = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <LeaseList />
                </MemoryRouter>
            </Provider>
        );
        expect(container.find(LeaseItem).length).toEqual(3);
    });

});