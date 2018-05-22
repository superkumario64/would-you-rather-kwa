import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Question from './Question'
import { handleLogout } from '../actions/shared'

class QuestionList extends Component {
    doLogout = () => {
        this.props.dispatch(handleLogout())
    }

    render() {
        return (
            <div className='question_list'>
                <h3>Welcome {this.props.authedUser}</h3>
                <h4>Question List</h4>
                <button
                    onClick={() => this.doLogout()}
                >
                    Logout
                </button>
                <ul>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionList);