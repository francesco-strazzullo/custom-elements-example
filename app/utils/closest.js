export default (el, selector) => {
  let parent

  while (el) {
    parent = el.parentElement
    if (parent && parent.matches(selector)) {
      return parent
    }
    el = parent
  }
}
