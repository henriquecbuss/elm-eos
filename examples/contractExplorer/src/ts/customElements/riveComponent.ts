import { Rive } from '@rive-app/canvas'

class RiveComponent extends HTMLElement {
  _rive: Rive | null
  _canvas: HTMLCanvasElement | null
  _stateMachine: string | null

  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    this._canvas = document.createElement('canvas')

    shadow.appendChild(this._canvas)
  }

  static get observedAttributes() {
    return ['statemachinestate']
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    if (name === 'statemachinestate') {
      if (!this._rive || !this._stateMachine) {
        return
      }

      try {
        const stateIndex = parseInt(newValue)

        this._rive.stateMachineInputs(this._stateMachine)[stateIndex].fire()
      } catch {
        return
      }
    }
  }

  connectedCallback() {
    const src = this.getAttribute('src')

    if (!src) {
      console.error('RiveComponent: missing src attribute')
      return
    }

    this._stateMachine = this.getAttribute('stateMachine')
    if (!this._stateMachine) {
      console.error('RiveComponent: missing stateMachine attribute')
      return
    }

    if (!this._canvas) {
      console.error('RiveComponent: missing canvas element')
      return
    }
    this._canvas.width = this.getBoundingClientRect().width
    this._canvas.height = this.getBoundingClientRect().height

    this._rive = new Rive({
      src,
      canvas: this._canvas,
      autoplay: this.getAttribute('autoplay') === 'true',
      stateMachines: [this._stateMachine],
    })
  }

  disconnectedCallback() {
    this._rive?.cleanup()
  }
}

export default { name: 'rive-component', classConstructor: RiveComponent }
