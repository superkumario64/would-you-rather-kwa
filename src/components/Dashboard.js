import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

class Dashboard extends Component {

    state = {
        answered: false
    }



    onRadioChange = (answered) => {
        this.setState(() => ({
            answered: answered
        }))
    }


    render() {
        const { answered } = this.state

        return (
            <div className='question_list'>
                <h4>Question List</h4>
                <div>
                    <input
                        type="radio"
                        name="answered_or_unanswered"
                        id="unanswered"
                        value={answered}
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
                <QuestionList answered={answered} />
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

export default connect(mapStateToProps)(Dashboard);