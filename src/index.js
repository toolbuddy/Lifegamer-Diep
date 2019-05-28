// import style.scss file
import './style.scss'

const { innerWidth, innerHeight } = window
const app = new PIXI.Application({ width: innerWidth, height: innerHeight })
const root = document.body.querySelector('#app')
root.appendChild(app.view)

window.addEventListener('resize', () => {
  const { innerWidth, innerHeight } = window
  app.renderer.resize(innerWidth, innerHeight)
})