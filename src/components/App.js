import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <div>
                {this.props.loading === true
                    ? null
                    : <QuestionList />
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
