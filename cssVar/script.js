'use strict'

const inputs = document.querySelectorAll('.controls input')

function handleInput() {
}

inputs.forEach(input => document.addEventListener('change', handleInput))
inputs.forEach(input => document.addEventListener('mouseover', handleInput))