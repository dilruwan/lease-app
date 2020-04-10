import React from 'react';
import { Link } from 'react-router-dom';
import { ILease } from '../interfaces/index';

class LeaseItem extends React.Component<ILease> {
    render() {
        return (
            <div className="card">
                <Link className="card-item" to={'/leases/' + this.props.id}>
                    <div className="card-body">
                        <span className="card-item-title">{ this.props.tenant }</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default LeaseItem;
