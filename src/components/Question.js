import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Question extends Component{
    render() {
        return (
            <div className='question'>
                <span>
                    <NavLink to={"/questions/" + this.props.question.id} activeClassName='active'>
                        {this.props.question.optionOne.text} or {this.props.question.optionTwo.text}?
                    </NavLink>
                </span>
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