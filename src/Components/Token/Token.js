import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Token.css'

class Token extends Component {
    render() {
        return (
            <div className="Tokens">
                <div className="TokensHead">
                    <h1>Token</h1>
                    <div className="TokensPath">
                        <Router>
                            <Link to='./Dashboard'>Home</Link>
                        </Router>
                        <i className="fas fa-circle"></i>
                        <Router>
                            <Link to='/'>Token</Link>
                        </Router>
                    </div>
                </div>
                <div className="wrap-table">
                    <div className="table100">
                        <table>
                            <thead>
                            <tr className="table100-head">
                                <th className="column1">Token Name</th>
                                <th className="column2">Created At</th>
                                <th className="column3">Expiry</th>
                                <th className="column4">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="column1">yngrhzsnmhcbsdjffbvdv5gi</td>
                                <td className="column2">21 January 2020</td>
                                <td className="column3">20 January 2021</td>
                                <td className="column4">
                                    <button>Regenerate Key</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Token
