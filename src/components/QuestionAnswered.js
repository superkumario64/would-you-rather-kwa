import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionAnswered extends Component {
    // function displayAuthedUsersChoice(){
    //
    // }

    displayAuthedUsersChoice = (option, authedUser) => {
        return (option.votes.includes(authedUser)) ?  " (You voted for this option)" : "";
    }

    render() {
        const { authedUser, question_id, questions } = this.props

        const optionOne = questions[question_id].optionOne;
        const optionTwo = questions[question_id].optionTwo;

        const optionOneVotes = optionOne.votes.length
        const optionTwoVotes = optionTwo.votes.length

        const totalVotes = optionOneVotes + optionTwoVotes;

        const optionOnePercent = optionOneVotes/totalVotes*100
        const optionTwoPercent = optionTwoVotes/totalVotes*100

        return (
            <div>
                <h3>Would you Rather...</h3>
                <h4>Option One: "{optionOne.text}" got {optionOneVotes} votes which is {optionOnePercent}% of the total votes.
                    <span className='your-vote'>
                        {this.displayAuthedUsersChoice(optionOne, authedUser)}
                    </span>
                </h4>
                <h4>Option Two: "{optionTwo.text}" got {optionTwoVotes} votes which is {optionTwoPercent}% of the total votes.
                    <span className='your-vote'>
                        {this.displayAuthedUsersChoice(optionTwo, authedUser)}
                    </span>
                </h4>
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

export default connect(mapStateToProps)(QuestionAnswered)