let point = 0
input.onGesture(Gesture.Shake, function () {
    point = randint(80, 100)
    basic.showNumber(point)
    if (point >= 90 && point <= 100) {
        basic.showString("A+")
    } else if (point >= 84 && point <= 89) {
        basic.showString("A")
    } else {
        basic.showString("A-")
    }
})
