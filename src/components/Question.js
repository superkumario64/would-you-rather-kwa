import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component{
    render() {
        return (
            <div className='question'>
                <span>{this.props.question.optionOne.text} or {this.props.question.optionTwo.text}?</span>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, { id }) {
    const question = questions[id]

    return {
        authedUser,
        question,

    }
}

export default connect(mapStateToProps)(Question)