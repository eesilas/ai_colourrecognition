huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.pause(1000)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(1, "Red")
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showString("R")
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(2, "Orange")
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.showString("O")
    }
    if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(3, "Orange")
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.showString("O")
    }
    if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(4, "Yellow")
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.showString("Y")
    }
    if (huskylens.isAppear(5, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(5, "Yellow")
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.showString("Y")
    }
    if (huskylens.isAppear(6, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(6, "Green")
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showString("G")
    }
    if (huskylens.isAppear(7, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(7, "Green")
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showString("G")
    }
    if (huskylens.isAppear(8, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(8, "Blue")
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.showString("B")
    }
    if (huskylens.isAppear(9, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(9, "Blue")
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.showString("B")
    }
    if (huskylens.isAppear(10, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(10, "Purple")
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.showString("P")
    }
    if (huskylens.isAppear(11, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(11, "Purple")
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.showString("P")
    }
    if (huskylens.isAppear(12, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(12, "Purple")
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.showString("P")
    }
})
