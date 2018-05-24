import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionAnswered extends Component {
    render() {
        return (
            <div>
                QuestionAnswered
            </div>
        )
    }
}

export default connect()(QuestionAnswered)