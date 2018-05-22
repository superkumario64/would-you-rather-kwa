import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {

    onRadioChange = (value) => {
        console.log("HIHIHI: ", value)
    }

    render() {
        return (
            <div className='question_list'>
                <h4>Question List</h4>
                <div>
                    <input
                        type="radio"
                        name="answered_or_unanswered"
                        value="unanswered"
                        id="unanswered"
                        defaultChecked={true}
                        onClick={() => this.onRadioChange("unanswered")}
                    />
                    <label htmlFor="unanswered">Unanswered</label>
                    <input type="radio"
                           name="answered_or_unanswered"
                           value="answered"
                           id="answered"
                           onClick={() => this.onRadioChange("answered")}
                    />
                    <label htmlFor="answered">answered</label>
                </div>
                <ul>
                    {this.props.questionIds.map((id) => (
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
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionList);