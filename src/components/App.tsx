import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LeaseList from './LeaseList';
import LeaseDetails from './LeaseDetails';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/leases">Leases</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>

                    <Switch>
                        <Route path="/leases/:id">
                            <LeaseDetails />
                        </Route>
                        <Route path="/leases">
                            <LeaseList />
                        </Route>
                        <Route path="/">
                            <LeaseList />
                        </Route>
                    </Switch>

                </div>
            </div>
        );
    }
}

export default App;
