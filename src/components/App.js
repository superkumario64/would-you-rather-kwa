import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList'
import LoadingBar from 'react-redux-loading'
import AddQuestion from './AddQuestion'
import Nav from './Nav'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        <Nav/>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Route path='/' exact component={QuestionList} />
                                <Route path='/add' component={AddQuestion} />
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ users, questions }) {
    return {
        loading: users === null || questions === null
    }
}


export default connect(mapStateToProps)(App)
