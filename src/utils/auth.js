const localStorage = window.localStorage
const TokenKey = 'access_token'

export function getAccessToken() {
  return localStorage.getItem(TokenKey)
}

export function setAccessToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeAccessToken() {
  return localStorage.removeItem(TokenKey)
}
