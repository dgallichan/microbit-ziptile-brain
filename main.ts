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
basic.forever(function () {
    tileDisplay.showColor(Kitronik_Zip_Tile.rgb(valueRed, valueGreen, valueBlue))
    tileDisplay.setBrightness(valueBrightness)
})
