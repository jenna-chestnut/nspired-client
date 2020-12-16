import config from '../config'
import TokenService from './token-service'

const nSpiredApiService = {
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
  getGoalAdvice(goalId) {
    return fetch(`${config.API_ENDPOINT}/goals/${goalId}/advice`, {
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
  postGoal(goal_name, user_id) {
    return fetch(`${config.API_ENDPOINT}/goals`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        goal_name,  
        user_id
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postAdvice(advice_text, goal_id, user_id) {
    return fetch(`${config.API_ENDPOINT}/goals/${goal_id}/advice`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        advice_text,
        goal_id,
        user_id
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  updateGoalPublic(goal_id) {
    return fetch(`${config.API_ENDPOINT}/goals/${goal_id}`, {
      method: 'UPDATE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        is_public: true,
        goal_id
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default nSpiredApiService
