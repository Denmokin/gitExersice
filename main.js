'use strict'

// Ball Game Js

function onBallClick(el, ev) {

    var ballHeight = el.style.height
    var ballWidth = el.style.width

    if (ev.type === 'click') {
        var newBallHeight = cssNumConvert(ballHeight, 'px') + 50
        var newBallWidth = cssNumConvert(ballWidth, 'px') + 50

        if (newBallHeight > 400) {
            el.style.height = 100 + 'px'
            el.style.width = 100 + 'px'
            el.innerText = 100
            return
        }

        el.style.height = newBallHeight + 'px'
        el.style.width = newBallWidth + 'px'

        el.innerText = newBallWidth
    }



}


function cssNumConvert(string, unit) {
    return +(string.replace(unit, ''))
}