import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {
    filteredQuestions() {
        return this.props.questionIds.filter(questionsId => {
            if (this.props.answered){
                return this.props.questions[questionsId].optionOne.votes.includes(this.props.authedUser) || this.props.questions[questionsId].optionTwo.votes.includes(this.props.authedUser)
            } else {
                return !this.props.questions[questionsId].optionOne.votes.includes(this.props.authedUser) && !this.props.questions[questionsId].optionTwo.votes.includes(this.props.authedUser)
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

function mapStateToProps({ questions, authedUser }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionList)