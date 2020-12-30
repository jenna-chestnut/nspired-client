import config from '../config'

const InspoService = {
  // *** INSPO ***

  // GET inspo
  getInspo() {
    return fetch(`${config.API_ENDPOINT}/inspo`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default InspoService
