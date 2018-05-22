import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {

    state = {
        filteredQuestions: []
    }

    onRadioChange = (answered) => {
        this.setState(() => {
            return {
                filteredQuestions: this.props.questionIds.filter(questionsId => {
                    if (answered){
                        return this.props.questions[questionsId].optionOne.votes.includes(this.props.authedUser) || this.props.questions[questionsId].optionTwo.votes.includes(this.props.authedUser)
                    } else {
                        return !this.props.questions[questionsId].optionOne.votes.includes(this.props.authedUser) && !this.props.questions[questionsId].optionTwo.votes.includes(this.props.authedUser)
                    }

                })
            }
        })
    }

    componentDidMount() {
        this.onRadioChange(false)
    }

    render() {
        const { filteredQuestions } = this.state

        return (
            <div className='question_list'>
                <h4>Question List</h4>
                <div>
                    <input
                        type="radio"
                        name="answered_or_unanswered"
                        id="unanswered"
                        defaultChecked={true}
                        onClick={() => this.onRadioChange(false)}
                    />
                    <label htmlFor="unanswered">Unanswered</label>
                    <input type="radio"
                           name="answered_or_unanswered"
                           id="answered"
                           onClick={() => this.onRadioChange(true)}
                    />
                    <label htmlFor="answered">answered</label>
                </div>
                <ul>
                    {filteredQuestions.map((id) => (
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
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionList);