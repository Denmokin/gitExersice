'use strict'

// Ball Game Js

var gBallSize = '100px'

function onBallClick(el, ev) {

    if (ev.type === 'click') {
        gBallSize = parseFloat(gBallSize) + getRandomInt(20, 60)
        if (gBallSize > 400) {
            gBallSize = el.style.width = el.style.height = 100 + 'px'
            el.innerText = parseFloat(gBallSize)
            return
        }

        el.style.backgroundColor = randColor() + ''
        el.style.height = el.style.width = gBallSize + 'px'
        el.innerText = gBallSize
    }
}
