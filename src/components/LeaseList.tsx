import React from 'react';
import { connect } from 'react-redux';
import store from '../store/store';
import { getLeases } from '../services/service';
import LeaseItem from './LeaseItem';
import { ILeasesProps } from '../interfaces/index';
import Spinner from './Spinner';
import * as actions from '../actions/index';

class LeaseList extends React.Component<ILeasesProps> {
    componentDidMount() {
        store.dispatch(actions.getLeases(true, []));
        return getLeases().then(response => {
            store.dispatch(actions.getLeases(false, response.data));
        }).catch(error => {
            store.dispatch(actions.getLeases(false, []));
            console.error(error);
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="page-title">Lease List</h2>
                </div>
                <Spinner show={this.props.isLoading} />
                <div className="col-sm-12">
                    {
                        ( !this.props.isLoading && !this.props.leases.length ?
                            (<div className="alert alert-warning">No leases found.</div>) :
                            this.props.leases.map((lease) => {
                                return (<LeaseItem key={lease.id} id={lease.id} tenant={lease.tenant} />)
                            }))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const leasesState:ILeasesProps = {
        leases: state.leasesReducer.leases,
        isLoading: state.leasesReducer.isLoading
    };
    return leasesState;
}

export default connect(mapStateToProps)(LeaseList);
