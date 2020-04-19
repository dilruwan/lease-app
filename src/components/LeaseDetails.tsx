import React from 'react';
import { connect } from 'react-redux';
import { ILeaseDetailsProps } from "../interfaces";
import store from "../store/store";
import { getLeaseDetails } from "../services/service";
import Spinner from './Spinner';
import * as actions from '../actions/index';

class LeaseDetails extends React.Component<ILeaseDetailsProps> {
    componentDidMount() {
        const id = this.getUrlParam();
        store.dispatch(actions.getLeaseDetails(true, {}));
        return getLeaseDetails(id).then(response => {
            store.dispatch(actions.getLeaseDetails(false, response.data));
        }).catch(error => {
            store.dispatch(actions.getLeaseDetails(false, {}));
            console.error(error);
        });
    }

    getUrlParam() {
        let urlParts = window.location.href.split("/");
        return urlParts[urlParts.length - 1];
    }

    readableLabel(text) {
        let cleanText = text.replace(/_/g, " ");
        return cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="page-title">Lease Details</h2>
                </div>
                <Spinner show={this.props.isLoading} />
                <div className="col-sm-12">
                    <form className="col-sm-8 offset-sm-2">
                        {
                            Object.keys(this.props.leaseDetails).map((key) => {
                                if (key === 'id') {
                                    return '';
                                }

                                return (
                                    <div className="form-group row" key={key}>
                                        <label htmlFor={key} className="col-sm-3 col-form-label">{this.readableLabel(key)}</label>
                                        <div className="col-sm-9">
                                            <input type="text" readOnly className="form-control-plaintext" id={key}
                                           value={this.props.leaseDetails[key]} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const leaseDetailsState:ILeaseDetailsProps = {
        leaseDetails: state.leaseDetailsReducer.leaseDetails,
        isLoading: state.leaseDetailsReducer.isLoading
    };
    return leaseDetailsState;
}

export default connect(mapStateToProps)(LeaseDetails);
