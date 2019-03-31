'use strict'

const removeStyle = event => {
    if (event.propertyName !== 'transform') return
    event.target.classList.remove('playing')
}

const drumer = event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
    if (!audio) return

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}

const drumKeys = document.querySelectorAll('.drum-key')
drumKeys.forEach(key => key.addEventListener('transitionend', e => removeStyle(e)))
window.addEventListener('keydown', e => drumer(e))

