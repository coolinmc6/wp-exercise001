import './reset.css';
import './styles.scss';
import Map from './gray-map.gif'

console.log('Hey there! And there be a change')

const div = document.createElement('div')
div.innerHTML = 'yo dude this is text'
document.body.appendChild(div)

const img = document.createElement('img')
img.src = Map;
document.body.appendChild(img);


const button = document.createElement("button")
button.textContent = 'Open chat'
document.body.appendChild(button)

button.onclick = () => {
  import(/* webpackChunkName: "chat" */ "./chat").then(chat => {
    chat.init()
  })
}