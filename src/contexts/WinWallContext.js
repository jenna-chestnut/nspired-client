import React, { Component } from 'react'

const WinWallContext = React.createContext({
  winWall: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setWinWall: () => {},
})

export default WinWallContext

export class WinWallProvider extends Component {
  state = {
    winWall: [],
    error: null,
  };

  setWinWall = winWall => {
    this.setState({ winWall })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      winWall: this.state.winWall,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setWinWall: this.setWinWall,
    }
    return (
      <WinWallContext.Provider value={value}>
        {this.props.children}
      </WinWallContext.Provider>
    )
  }
}
