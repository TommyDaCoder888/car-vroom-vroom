input.onButtonPressed(Button.A, function () {
    drive_forward(1000)
    drive_forward(2000)
})
function drive_forward (time: number) {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
    basic.pause(time)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
}
basic.showLeds(`
    . . # . .
    . . . . .
    # . # . #
    . . . . .
    . . # . .
    `)
