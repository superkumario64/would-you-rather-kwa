import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionUnanswered extends Component {
    state = {
        selectedOption: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, question_id } = this.props

        const { selectedOption } = this.state

        dispatch(handleAnswerQuestion(question_id, selectedOption))
    }

    handleChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    }

    render() {
        const { users, authedUser, questions, question_id } = this.props
        const { selectedOption } = this.state

        return (
            <div>
                <h4>Would You Rather</h4>
                <img src={users[authedUser].avatarURL} alt={users[authedUser].name} />
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                type="radio"
                                name="would_you_rather"
                                id="optionOne"
                                value="optionOne"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="optionOne">{ questions[question_id].optionOne.text }</label>
                            <span> or </span>
                            <input
                                type="radio"
                                name="would_you_rather"
                                id="optionTwo"
                                value="optionTwo"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="optionTwo">{ questions[question_id].optionTwo.text }</label>
                        </div>
                        <button
                            className='btn'
                            type='submit'
                            disabled={selectedOption === ''}
                        >
                            Submit
                        </button>
                    </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(QuestionUnanswered)