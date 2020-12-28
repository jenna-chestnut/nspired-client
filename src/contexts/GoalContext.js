import React, { Component } from 'react'

export const nullGoal = {
  goal_name: null,
  user_id: null,
}

const GoalContext = React.createContext({
  goal: nullGoal,
  userNote: '',
  userGoals: [],
  advice: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setGoal: () => {},
  setUserGoals: () => {},
  clearGoal: () => {},
  setPersonalNotes: () => {},
  setAdvice: () => {},
  addAdvice: () => {},
})

export default GoalContext

export class GoalProvider extends Component {
  state = {
    goal: nullGoal,
    userGoals: [],
    error: null
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setGoal = goal => {
    this.setState({ goal })
  }

  setUserGoals = userGoals => {
    this.setState({ userGoals })
  }

  setAdvice = advice => {
    this.setState({ advice })
  }

  cleargoal = () => {
    this.setGoal(nullGoal)
    this.setAdvice([])
  }

  addAdvice = advice => {
    this.setAdvice([
      ...this.state.advice,
      advice
    ])
  }

  render() {
    const value = {
      goal: this.state.goal,
      userGoals: this.state.userGoals,
      advices: this.state.advice,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGoal: this.setGoal,
      setUserGoals: this.setUserGoals,
      setadvices: this.setAdvice,
      cleargoal: this.cleargoal,
      addAdvice: this.addAdvice,
    }
    return (
      <GoalContext.Provider value={value}>
        {this.props.children}
      </GoalContext.Provider>
    )
  }
}
