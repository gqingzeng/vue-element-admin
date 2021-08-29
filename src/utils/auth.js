import { getItem, setItem, removeItem } from './localStorage'

const tokenKey = 'access_token'

export function getAccessToken() {
  return getItem(tokenKey)
}

export function setAccessToken(token) {
  return setItem(tokenKey, token)
}

export function removeAccessToken() {
  return removeItem(tokenKey)
}
