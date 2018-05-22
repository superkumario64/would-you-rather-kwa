import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/shared'

class Login extends Component {
    doLogin = (id) => {
        this.props.dispatch(handleLogin(id))
    }

    render() {
        return (
            <div>
                {Object.keys(this.props.users).map((id) => (
                    <button onClick={() => this.doLogin(id)} key={id}>{id}</button>
                ))}
            </div>
        )
    }

}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login)