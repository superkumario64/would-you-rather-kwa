import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogout } from "../actions/shared";

class Nav extends Component {
    doLogout = () => {
        this.props.dispatch(handleLogout())
    }
    render(){
        return (
            <div>
                <h3>Welcome {this.props.authedUser}</h3>
                <button
                    onClick={() => this.doLogout()}
                >
                    Logout
                </button>
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/add' activeClassName='active'>
                                Add Question
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)