// GETTERS
export function getLocalStorageUser() {
  return localStorage.getItem("user")
}

// SETTERS
export function setLocalStorageUser(user) {
  if (localStorage.getItem("user") !== null && localStorage.getItem("user") !== user) {
    localStorage.setItem("user", user);
  }
}

export function setLocalStorageInfoTime(infoTimeValue) {
  if (localStorage.getItem("infoTime") !== null && localStorage.getItem("infoTime") !== infoTimeValue) {
    localStorage.setItem("infoTime", infoTimeValue);
  }
}