export function getUser () {
  return JSON.parse(sessionStorage.getItem('information'))
}

export function getViewPortWidth () {
  return document.documentElement.clientWidth || document.body.clientWidth
}

export function getViewPorHeight () {
  return document.documentElement.clientHeight || document.body.clientHeight
}
