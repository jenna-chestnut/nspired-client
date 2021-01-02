import React, { Component } from 'react'

const NSpiredContext = React.createContext({
  goal: null,
  userNote: '',
  userGoals: [],
  advice: [],
  upVotes: [],
  winWall: [],
  inspo: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setGoal: () => {},
  setUserGoals: () => {},
  addUserGoal: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
  clearGoal: () => {},
  setPersonalNotes: () => {},
  setAdvice: () => {},
  addAdvice: () => {},
  clearAdvice: () => {},
  deleteAdvice: () => {},
  setUpvotes: () => {},
  addUpvote: () => {},
  deleteUpvote: () => {},
  setWinWall: () => {},
  setInspo: () => {}
})

export default NSpiredContext

export class NSpiredProvider extends Component {
  state = {
    goal: null,
    userGoals: [],
    upVotes: [],
    advice: [],
    winWall: [],
    inspo: [],
    error: null
  };

  setError = async e => {
    const error = await e.error.message;
    return await this.setState({ error : error })
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

  addUserGoal = userGoal => {
    this.setUserGoals([
      ...this.state.userGoals,
      userGoal
    ])
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

  clearAdvice = () => {
    this.setAdvice([])
  }

  clearGoal = () => {
    this.setGoal(null)
  }

  addAdvice = advice => {
    this.setAdvice([
      ...this.state.advice,
      advice
    ])
  }

  deleteAdvice = id => {
    const newAdvice = this.state.advice.filter(
      el => el.id !== id
    )
    this.setAdvice(newAdvice)
  }

  setInspo = inspo => {
    this.setState({ inspo });
  }

  render() {
    const value = {
      goal: this.state.goal,
      userGoals: this.state.userGoals,
      advice: this.state.advice,
      winWall: this.state.winWall,
      error: this.state.error,
      upVotes: this.state.upVotes,
      inspo: this.state.inspo,
      setError: this.setError,
      clearError: this.clearError,
      setGoal: this.setGoal,
      setUserGoals: this.setUserGoals,
      addUserGoal: this.addUserGoal,
      deleteGoal: this.deleteGoal,
      updateGoal: this.updateGoal,
      setAdvice: this.setAdvice,
      clearAdvice: this.clearAdvice,
      setWinWall: this.setWinWall,
      clearGoal: this.clearGoal,
      addAdvice: this.addAdvice,
      deleteAdvice: this.deleteAdvice,
      setInspo: this.setInspo
    }
    return (
      <NSpiredContext.Provider value={value}>
        {this.props.children}
      </NSpiredContext.Provider>
    )
  }
}
