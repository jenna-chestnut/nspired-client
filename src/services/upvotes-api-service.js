import config from '../config'
import TokenService from './token-service'

const UpvotesService = {
  // *** UPVOTES ***

  // GET upvotes
  getUpvotes(goalId) {
    return fetch(`${config.API_ENDPOINT}/upvotes/${goalId}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  // POST user upvote 
  postUpvote(goalId) {
    return fetch(`${config.API_ENDPOINT}/goals/${goalId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
        body: {},
    })
      .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
  },

  // DELETE user upvote 
  deleteUpvote(goalId) {
    return fetch(`${config.API_ENDPOINT}/goals/${goalId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
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

export default UpvotesService
