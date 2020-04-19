import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import LeaseDetails from '../src/components/LeaseDetails';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Spinner from '../src/components/Spinner';

Enzyme.configure({ adapter: new Adapter() });

describe('LeaseList Component', () => {
    let initialState = {
        leaseDetailsReducer: {
            isLoading: false,
            leaseDetails: {
                id: "lease-b",
                end_date: "2018-07-15",
                frequency: "monthly",
                payment_day: "friday",
                rent: 820,
                start_date: "2018-02-15",
            }
        }
    };

    const mockStore = configureStore();
    let store;

    it('renders leases-details component correctly', () => {
        store = mockStore(initialState);
        const component = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <LeaseDetails />
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
                    <LeaseDetails />
                </MemoryRouter>
            </Provider>
        ).find('h2');
        expect(container.hasClass('page-title')).toEqual(true);
        expect(container.text()).toEqual('Lease Details');
    });

    it('should not display spinner when isLoading prop is false', () => {
        initialState = {
            leaseDetailsReducer: {
                isLoading: false,
                leaseDetails: {}
            }
        };
        store = mockStore(initialState);

        const container = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <LeaseDetails />
                </MemoryRouter>
            </Provider>
        );
        expect(container.find(Spinner).props().show).toEqual(false);
    });

    it('should display spinner when isLoading prop is true', () => {
        initialState = {
            leaseDetailsReducer: {
                isLoading: true,
                leaseDetails: {}
            }
        };
        store = mockStore(initialState);

        const container = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <LeaseDetails />
                </MemoryRouter>
            </Provider>
        );
        expect(container.find(Spinner).props().show).toEqual(true);
    });

    it('should display lease-details', () => {
        initialState = {
            leaseDetailsReducer: {
                isLoading: false,
                leaseDetails: {
                    id: "lease-b",
                    end_date: "2018-07-15",
                    frequency: "monthly",
                    payment_day: "friday",
                    rent: 820,
                    start_date: "2018-02-15",
                }
            }
        };
        store = mockStore(initialState);

        const container = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <LeaseDetails />
                </MemoryRouter>
            </Provider>
        );
        expect(container.find("#start_date").props().value).toEqual(initialState.leaseDetailsReducer.leaseDetails.start_date);
        expect(container.find("#end_date").props().value).toEqual(initialState.leaseDetailsReducer.leaseDetails.end_date);
        expect(container.find("#rent").props().value).toEqual(initialState.leaseDetailsReducer.leaseDetails.rent);
        expect(container.find("#frequency").props().value).toEqual(initialState.leaseDetailsReducer.leaseDetails.frequency);
        expect(container.find("#payment_day").props().value).toEqual(initialState.leaseDetailsReducer.leaseDetails.payment_day);
    });

});