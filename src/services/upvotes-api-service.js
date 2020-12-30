import config from '../config'
import TokenService from './token-service'

const UpvotesService = {
  // *** UPVOTES ***

  // GET upvotes
  getUpvotes(goalId) {
    return fetch(`${config.API_ENDPOINT}/upvotes/${goalId}`, {
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
  },

  // POST user upvote 
  postUpvote(goalId) {
    return fetch(`${config.API_ENDPOINT}/upvotes/${goalId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
        body: JSON.stringify({}),
    })
      .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
  },

  // DELETE user upvote 
  deleteUpvote(goalId) {
    return fetch(`${config.API_ENDPOINT}/upvotes/${goalId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res
        )
  }
}

export default UpvotesService
