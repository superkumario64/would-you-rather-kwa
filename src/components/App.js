import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import AddQuestion from './AddQuestion'
import Login from './Login'
import Nav from './Nav'
import QuestionView from "./QuestionView";

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
                        {this.props.authedUser === null
                            ? <Login/>
                            : <div>
                                <Nav/>
                                {this.props.loading === true
                                    ? null
                                    : <div>
                                        <Route path='/' exact component={Dashboard}/>
                                        <Route path='/add' component={AddQuestion}/>
                                        <Route path='/questions/:question_id' component={QuestionView}/>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    return {
        loading: users === null || questions === null,
        authedUser
    }
}


export default connect(mapStateToProps)(App)
