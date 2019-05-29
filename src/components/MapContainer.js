import * as PIXI from 'pixi.js'
// map

// width and height setting
const [ initWidth, initHeight ] = [ window.innerWidth, window.innerHeight ]

// Pixi application setting, set it as auto resize render
const app = new PIXI.Application({
  width: initWidth,
  height: initHeight,
  backgroundColor: 0xffffff,
  autoResize: true,
  resolution: devicePixelRatio
})

// add container
let container = new PIXI.Container()
app.stage.addChild(container)
app.container = container

// resize function setting
window.addEventListener('resize', () => {
  const { innerWidth, innerHeight } = window      // get current window size
  app.renderer.resize(innerWidth, innerHeight)    // resize canvas
  app.container.scale.set(Math.max(innerWidth / initWidth, innerHeight / initHeight)) // resize all items inside canvas
})

export default app
