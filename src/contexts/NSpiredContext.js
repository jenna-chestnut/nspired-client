import React, { Component } from 'react'

export const nullGoal = {
  goal_name: null,
  user_id: null,
}

const NSpiredContext = React.createContext({
  goal: nullGoal,
  userNote: '',
  userGoals: [],
  advice: [],
  winWall: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setGoal: () => {},
  setUserGoals: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
  clearGoal: () => {},
  setPersonalNotes: () => {},
  setAdvice: () => {},
  addAdvice: () => {},
  setWinWall: () => {}
})

export default NSpiredContext

export class GoalProvider extends Component {
  state = {
    goal: nullGoal,
    userGoals: [],
    advice: [],
    winWall: [],
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

  deleteGoal = goalId => {
    const newUserGoals = this.state.userGoals
    .filter(goal => goal.goal_id !== goalId);
    this.setState({ userGoals: newUserGoals })
  }

  updateGoal = (goalId, newData, key) => {
    const newUserGoals = this.state.userGoals
    .map(goal => {
      if (goal.goal_id === goalId) {
        if (key === 'completed') {
          return {...goal, completed: newData}
        }
        if (key === 'is_public') {
          return {...goal, is_public: newData}
        }
      }
      return goal;
    });
    this.setState({ userGoals: newUserGoals })
  }

  setAdvice = advice => {
    this.setState({ advice })
  }

  setWinWall = winWall => {
    this.setState({ winWall })
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
      advice: this.state.advice,
      winWall: this.state.winWall,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGoal: this.setGoal,
      setUserGoals: this.setUserGoals,
      deleteGoal: this.deleteGoal,
      updateGoal: this.updateGoal,
      setAdvice: this.setAdvice,
      setWinWall: this.setWinWall,
      cleargoal: this.cleargoal,
      addAdvice: this.addAdvice
    }
    return (
      <NSpiredContext.Provider value={value}>
        {this.props.children}
      </NSpiredContext.Provider>
    )
  }
}
