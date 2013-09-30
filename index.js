var matches = require('matches-selector')

module.exports = function (element, selector, checkYoSelf, root) {
  element = checkYoSelf ? element : element.parentNode
  root = root || document

  while (element && element !== root) {
    if (matches(element, selector))
      return element

    element = element.parentNode
  }
}