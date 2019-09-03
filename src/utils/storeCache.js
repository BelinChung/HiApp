export default class StoreCache {
  constructor(prefix) {
    this.prefix = prefix ? `${prefix}_` : ''
  }
  get(key) {
    return JSON.parse(localStorage.getItem(this.prefix + key))
  }
  set(key, value) {
    localStorage.setItem(this.prefix + key, JSON.stringify(value))
  }
  remove(key) {
    localStorage.removeItem(this.prefix + key)
  }
  clear() {
    localStorage.clear()
  }
}
