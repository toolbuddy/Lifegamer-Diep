// import style.scss file
import './style.scss'
import mainMap from './components/MapContainer'

const root = document.body.querySelector('#app')
root.appendChild(mainMap.view)

