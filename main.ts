input.onButtonPressed(Button.A, function () {
    if (manualMode == 1) {
        valueRed += -1 + manualValueChange
        valueRed = Math.constrain(valueRed, 0, 255)
    } else if (manualMode == 2) {
        valueGreen += -1 + manualValueChange
        valueGreen = Math.constrain(valueGreen, 0, 255)
    } else if (manualMode == 3) {
        valueBlue += -1 + manualValueChange
        valueBlue = Math.constrain(valueBlue, 0, 255)
    } else if (manualMode == 4) {
        valueBrightness += -1 + manualValueChange
        valueBrightness = Math.constrain(valueBrightness, 0, 255)
    }
})
input.onButtonPressed(Button.B, function () {
    if (manualMode == 1) {
        valueRed += manualValueChange
        valueRed = Math.constrain(valueRed, 0, 255)
    } else if (manualMode == 2) {
        valueGreen += manualValueChange
        valueGreen = Math.constrain(valueGreen, 0, 255)
    } else if (manualMode == 3) {
        valueBlue += manualValueChange
        valueBlue = Math.constrain(valueBlue, 0, 255)
    } else if (manualMode == 4) {
        valueBrightness += manualValueChange
        valueBrightness = Math.constrain(valueBrightness, 0, 255)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "Red") {
        valueRed = Math.constrain(value, 0, 255)
    } else if (name == "Green") {
        valueGreen = Math.constrain(value, 0, 255)
    } else if (name == "Blue") {
        valueBlue = Math.constrain(value, 0, 255)
    } else if (name == "Bright") {
        valueBrightness = Math.constrain(value, 0, 255)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    manualMode += 1
    if (manualMode == 5) {
        manualMode = 1
    }
})
let manualValueChange = 0
let manualMode = 0
let valueBrightness = 0
let valueBlue = 0
let valueGreen = 0
let valueRed = 0
basic.showLeds(`
    # # # # #
    # . # . #
    # . # . #
    . . . . .
    . . . . .
    `)
radio.setGroup(200)
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Visible)
valueRed = 10
valueGreen = 10
valueBlue = 10
valueBrightness = 50
manualMode = 1
manualValueChange = 10
basic.forever(function () {
    tileDisplay.showColor(Kitronik_Zip_Tile.rgb(valueRed, valueGreen, valueBlue))
    tileDisplay.setBrightness(valueBrightness)
})
