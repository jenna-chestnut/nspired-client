import config from '../config'
import TokenService from './token-service'

const AdviceService = {
  // *** ADVICE ***

  // GET advice for specific goal
  getGoalAdvice(goalId) {
    return fetch(`${config.API_ENDPOINT}/advice/${goalId}`, {
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

  // POST advice for specific goal
  postAdvice(goal_id, advice_text) {
    return fetch(`${config.API_ENDPOINT}/advice/${goal_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(advice_text),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

    // DELETE user advice
    deleteUserAdvice(goal_id) {
      return fetch(`${config.API_ENDPOINT}/advice/${goal_id}`, {
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
    },
}

export default AdviceService
