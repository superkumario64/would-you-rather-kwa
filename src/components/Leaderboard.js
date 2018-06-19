import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
    render() {
        const { users } = this.props
        const leaderboard = [];
        for (const name of Object.keys(users)){
            leaderboard.push({
                name,
                avatarURL: users[name].avatarURL,
                questionsAsked: users[name].questions.length,
                questionsAnswered: Object.keys(users[name].answers).length,
                total: users[name].questions.length + Object.keys(users[name].answers).length
            })
        }
        leaderboard.sort((a, b) => {
            return a.total < b.total
        })
        console.log(leaderboard)
        return (
            <div>
                <ul>
                    {leaderboard.map((user, index) => (
                        <li className="leaderboard-row" key={user.name}>
                            <span className="rank pad-right">
                                <strong>{index + 1}) {user.name}</strong>
                            </span>
                            <span className="leaderboard-avatar-span pad-right">
                                <img className="leaderboard-avatar" src={user.avatarURL} alt={user.name} />
                            </span>
                            <span className="questions-asked-and-answered">
                                Asked {user.questionsAsked} Questions And Answered {user.questionsAnswered} Questions
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Leaderboard)