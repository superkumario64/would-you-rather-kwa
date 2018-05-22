import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Question from './Question'

class QuestionList extends Component {
    render() {
        return (
            <div>
                {this.props.authedUser === null ?
                    (<Login/>)
                    : (<div className='question_list'>
                        <h3>Question List</h3>
                        <ul>
                            {this.props.questionIds.map((id) => (
                                <li key={id}>
                                    <Question id={id} />
                                </li>
                            ))}
                        </ul>
                    </div>)
                }
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