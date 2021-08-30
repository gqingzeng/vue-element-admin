export const getLocalStorageKey = key => `lightningsproxy_${key}`

export function getItem(key) {
  return window.localStorage.getItem(getLocalStorageKey(key))
}

export function setItem(key, val) {
  return window.localStorage.setItem(getLocalStorageKey(key), val)
}

export function removeItem(key) {
  return window.localStorage.removeItem(getLocalStorageKey(key))
}
