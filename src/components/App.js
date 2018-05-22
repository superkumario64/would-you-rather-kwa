import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList'
import Login from './Login'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <div>
                {this.props.loading === true
                    ? null
                    : <Login />
                }
            </div>
        )
    }
}

function mapStateToProps({ users, questions }) {
    return {
        loading: users === null || questions === null
    }
}


export default connect(mapStateToProps)(App)
