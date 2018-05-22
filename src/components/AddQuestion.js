import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class AddQuestion extends Component {
    state = {
        option1: '',
        option2: '',
        toHome: false
    }
    handleOption1Change = (e)=> {
        const option1 = e.target.value

        this.setState(() => ({
            option1
        }))
    }
    handleOption2Change = (e)=> {
        const option2 = e.target.value

        this.setState(() => ({
            option2
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { option1, option2 } = this.state
        const { dispatch } = this.props

        dispatch(handleSaveQuestion(option1,option2))

        this.setState(() => ({
            option1: '',
            option2: '',
            toHome: true
        }))
    }


    render() {
        const { option1, option2, toHome } = this.state

        if (toHome) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <h3 className='new-question'>Add a new Question</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder='Option 1'
                        value={option1}
                        onChange={this.handleOption1Change}
                        className='textinput'
                    />
                    <input
                        type='text'
                        placeholder='Option 2'
                        value={option2}
                        onChange={this.handleOption2Change}
                        className='textinput'
                    />
                    <button
                        className='btn'
                        type='submit'
                        disabled={option1 === '' || option2 === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(AddQuestion)