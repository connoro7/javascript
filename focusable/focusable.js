export default function Focusable (element = document) {
  return {
    get length () {
      return this.keyboardOnly.length
    },

    get all () {
      return [...element.querySelectorAll(
        'a, button, input, textarea, select,  details, [tabindex]'
      )]
        .filter(el => !el.hasAttribute('disabled'))
    },

    get keyboardOnly () {
      return this.all
        // if element has tabindex, ensure it's > 0
        .filter(el => !el.hasAttribute('tabindex') || el.getAttribute('tabindex') >= 0)
    },

    get firstFocusable () {
      return this.keyboardOnly[0]
    },

    get lastFocusable () {
      return this.keyboardOnly[this.length - 1]
    }
  }
}
