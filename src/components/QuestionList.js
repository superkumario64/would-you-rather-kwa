import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionList extends Component {
    render() {
        return (
            <div>
                <h3>Question List</h3>
                <ul>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <div>ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionList);