import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {
    filteredQuestions() {
        const { users, authedUser } = this.props
        return this.props.questionIds.filter(questionsId => {
            if (this.props.answered){
                return users[authedUser].answers.hasOwnProperty(questionsId)
            } else {
                return !users[authedUser].answers.hasOwnProperty(questionsId)
            }
        })

    }

    render() {
        return (
            <div>
                <ul>
                    {this.filteredQuestions().map((id) => (
                        <li key={id}>
                            <Question id={id} answered={this.props.answered} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionList)