import config from '../config'
import TokenService from './token-service'

const GoalsService = {
  // *** WIN WALL ***

  // GET win wall
  getMiniWinWall() {
    return fetch(`${config.API_ENDPOINT}/win-wall/mini`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getWinWall() {
    return fetch(`${config.API_ENDPOINT}/win-wall`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
   
   // *** GOALS ***

  // GET specific goal - user goal, if not, grab public win
  getGoal(goalId) {
    return fetch(`${config.API_ENDPOINT}/goals/${goalId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  // GET user goals
  getUserGoals() {
    return fetch(`${config.API_ENDPOINT}/goals`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  // POST new goal 
  postNewGoal(newGoal) {
    return fetch(`${config.API_ENDPOINT}/goals`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        newGoal
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  // POST user goal (clone existing goal)
  postUserGoal(goalId, goalData) {
    return fetch(`${config.API_ENDPOINT}/goals/${goalId}`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
          goalData
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  // PATCH to make user goal public or mark complete
  patchUserGoal(goal_id, data) {
    return fetch(`${config.API_ENDPOINT}/goals/${goal_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        data
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  // DELETE goal - user goal if cloned, entire goal if owned
    deleteUserGoal(goal_id) {
      return fetch(`${config.API_ENDPOINT}/goals/${goal_id}`, {
        method: 'DELETE',
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`
        }
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default GoalsService
