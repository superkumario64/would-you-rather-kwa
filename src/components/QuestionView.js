import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionAnswered from './QuestionAnswered'
import QuestionUnanswered from './QuestionUnanswered'
import Four04 from './Four04'

class QuestionView extends Component {
    hasAuthedUserAnsweredQuestion(authedUser, question) {
        const usersThatAnswered = [...question.optionOne.votes, ...question.optionTwo.votes]
        return usersThatAnswered.includes(authedUser)
    }

    render(){
        const { authedUser, question_id, questions } = this.props

        const is404 = !questions.hasOwnProperty(question_id)

        let userAnswered = false;

        if (!is404) userAnswered = this.hasAuthedUserAnsweredQuestion(authedUser, questions[question_id])

        return (
            <div>
                {
                    is404 ?
                        <Four04 />
                        : userAnswered ? <QuestionAnswered /> : <QuestionUnanswered />
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const { question_id } = props.match.params
    return {
        question_id,
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(QuestionView)