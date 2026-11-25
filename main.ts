/*
File:       github.com/ETmbit/et-soccer.ts
Version:	2026-1
Copyright:  ElecTricks, 2026
License:    GNU GPL 3 or later
Disclaimer: Distributed without any warranty
Depends on: None
*/

//////////////////
//  INCLUDE     //
//  etbasic.ts  //
//////////////////

const ET_LOW = 0
const ET_HIGH = 1

enum ETpins {
    //% block="pin P0"
    //% block.loc.nl="pin P0"
    P0 = DigitalPin.P0,
    //% block="pin P1"
    //% block.loc.nl="pin P1"
    P1 = DigitalPin.P1,
    //% block="pin P2"
    //% block.loc.nl="pin P2"
    P2 = DigitalPin.P2,
    //% block="pin P8"
    //% block.loc.nl="pin P8"
    P8 = DigitalPin.P8,
    //% block="pin P12"
    //% block.loc.nl="pin P12"
    P12 = DigitalPin.P12,
    //% block="pin P13"
    //% block.loc.nl="pin P13"
    P13 = DigitalPin.P13,
    //% block="pin P14"
    //% block.loc.nl="pin P14"
    P14 = DigitalPin.P14,
    //% block="pin P15"
    //% block.loc.nl="pin P15"
    P15 = DigitalPin.P15,
    //% block="pin P16"
    //% block.loc.nl="pin P16"
    P16 = DigitalPin.P16
}

enum ETstate {
    //% block="off"
    //% block.loc.nl="uit"
    Off,
    //% block="on"
    //% block.loc.nl="aan"
    On,
}

enum ETpace {
    //% block="slow"
    //% block.loc.nl="langzame"
    Slow,
    //% block="normal"
    //% block.loc.nl="normale"
    Normal,
    //% block="fast"
    //% block.loc.nl="snelle"
    Fast,
}

/*
The ETrotate, ETturn and ETmove... enumerations
have comparable values:

Start = -1
Stop = 0
Forward = 1
Backward = 2
Left, AntiClockwise = 3
Right, Clockwise = 4
Up = 5
Down = 6
*/

enum ETrotate {
    //% block="anticlockwise"
    //% block.loc.nl="linksom"
    AntiClockwise = 3,
    //% block="clockwise"
    //% block.loc.nl="rechtsom"
    Clockwise = 4,
}

enum ETturn {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmove {
    //% block="stop"
    //% block.loc.nl="stop"
    Stop = 0,
    //% block="start"
    //% block.loc.nl="start"
    Start = -1,

}

enum ETmoveX {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmoveY {
    //% block="forward"
    //% block.loc.nl="vooruit"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="achteruit"
    Backward = 2,
}

enum ETmoveZ {
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveXY {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmoveXZ {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveYZ {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveXYZ {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETcolor {
    //% block="red"
    //% block.loc.nl="rood"
    Red = 1,
    //% block="green"
    //% block.loc.nl="groen"
    Green = 2,
    //% block="blue"
    //% block.loc.nl="blauw"
    Blue = 3,
    //% block="yellow"
    //% block.loc.nl="geel"
    Yellow = 4,
    //% block="cyan"
    //% block.loc.nl="cyaan"
    Cyan = 5,
    //% block="magenta"
    //% block.loc.nl="magenta"
    Magenta = 6,
    //% block="black"
    //% block.loc.nl="zwart"
    Black = 7,
    //% block="dark grey"
    //% block.loc.nl="donkergrijs"
    DarkGrey = 8,
    //% block="grey"
    //% block.loc.nl="grijs"
    Grey = 9,
    //% block="light grey"
    //% block.loc.nl="lichtgrijs"
    LightGrey = 10,
    //% block="white"
    //% block.loc.nl="wit"
    White = 11,
    //% block="orange"
    //% block.loc.nl="oranje"
    Orange = 12,
    //% block="brown"
    //% block.loc.nl="bruin"
    Brown = 13,
    //% block="pink"
    //% block.loc.nl="roze"
    Pink = 14,
    //% block="indigo"
    //% block.loc.nl="indigo"
    Indigo = 15,
    //% block="violet"
    //% block.loc.nl="violet"
    Violet = 16,
    //% block="purple"
    //% block.loc.nl="paars"
    Purple = 17,
}

function etRgbValue(red: number, green: number, blue: number): number {
    let rgb = ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF)
    return rgb;
}

function etRedValue(rgb: number): number {
    let r = (rgb >> 16) & 0xFF
    return r;
}

function etGreenValue(rgb: number): number {
    let g = (rgb >> 8) & 0xFF
    return g;
}

function etBlueValue(rgb: number): number {
    let b = (rgb) & 0xFF
    return b;
}

function etFromColor(color: ETcolor): number {
    let val = 0
    switch (color) {
        case ETcolor.Red: val = 0xFF0000; break;
        case ETcolor.Green: val = 0x00FF00; break;
        case ETcolor.Blue: val = 0x0000FF; break;
        case ETcolor.Yellow: val = 0xFFFF00; break;
        case ETcolor.Cyan: val = 0x00FFFF; break;
        case ETcolor.Magenta: val = 0xFF00FF; break;
        case ETcolor.Black: val = 0x000000; break;
        case ETcolor.DarkGrey: val = 0xA9A9A9; break;
        case ETcolor.Grey: val = 0x808080; break;
        case ETcolor.LightGrey: val = 0xD3D3D3; break;
        case ETcolor.White: val = 0xFFFFFF; break;
        case ETcolor.Orange: val = 0xFFA500; break;
        case ETcolor.Brown: val = 0xA52A2A; break;
        case ETcolor.Pink: val = 0xFFC0CB; break;
        case ETcolor.Indigo: val = 0x4b0082; break;
        case ETcolor.Violet: val = 0x8a2be2; break;
        case ETcolor.Purple: val = 0x800080; break;
    }
    return val
}

function etFromRgbValues(red: number, green: number, blue: number): ETcolor {
    let max = -1
    let min = -1
    let hue = 0

    if (red > green && red > blue) max = red
    if (green > red && green > blue) max = green
    if (blue > red && blue > green) max = blue
    if (red < green && red < blue) min = red
    if (green < red && green < blue) min = green
    if (blue < red && blue < green) min = blue

    if (red == max) hue = (0 + (green - blue) / (max - min)) * 60
    if (green == max) hue = (2 + (blue - red) / (max - min)) * 60
    if (blue == max) hue = (4 + (red - green) / (max - min)) * 60

    if (hue < 0) hue += 360

    // translate hue to color names
    if (hue == 0) return ETcolor.White
    if (hue < 5) return ETcolor.Orange
    if (hue < 30) return ETcolor.Brown
    if (hue < 100) return ETcolor.Yellow
    if (hue < 190) return ETcolor.Green
    if (hue < 206) return ETcolor.Cyan
    if (hue < 213) return ETcolor.Blue
    if (hue < 217) return ETcolor.Black
    if (hue < 230) return ETcolor.Indigo
    if (hue < 255) return ETcolor.Purple
    if (hue < 272) return ETcolor.Pink
    if (hue < 300) return ETcolor.Magenta
    return ETcolor.Red
}

function etFromRgb(rgb: number): ETcolor {
    let red = etRedValue(rgb)
    let green = etGreenValue(rgb)
    let blue = etBlueValue(rgb)
    return etFromRgbValues(red, green, blue)
}

//% color="#61CBF4" icon="\uf075"
//% block="General"
//% block.loc.nl="Algemeen"
namespace etbasic {

    //% color="#008800"
    //% block="comment: %dummy"
    //% block.loc.nl="uitleg: %dummy"
    //% dummy.defl="schrijf hier je uitleg"
    export function comment(dummy: string) {
    }

    //% block="a number from %min upto %max"
    //% block.loc.nl="een getal van %min t/m %max"
    //% min.defl=0 max.defl=10
    export function randomInt(min: number, max: number): number {
        let i = 0
        if (min > max) {
            i = min
            min = max
            max = i
        }
        i = max - min + 1
        i = min + Math.floor(Math.random() * i)
        return i
    }

    //% block="wait %sec seconds"
    //% block.loc.nl="wacht %sec seconden"
    export function wait(sec: number) {
        basic.pause(sec * 1000)
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

//////////////////
//  INCLUDE     //
//  etinput.ts  //
//////////////////

let ETstartHandlers: (() => void)[] = []
let ETstopHandlers: (() => void)[] = []

input.onButtonPressed(Button.A, function () {
    for (let ix = 0; ix < ETstartHandlers.length; ix++)
        ETstartHandlers[ix]()
})

input.onButtonPressed(Button.B, function () {
    for (let ix = 0; ix < ETstopHandlers.length; ix++)
        ETstopHandlers[ix]()
})

namespace etinput {

    export function registerStartHandler(handler: () => void) {
        ETstartHandlers.push(handler)
    }

    export function registerStopHandler(handler: () => void) {
        ETstopHandlers.push(handler)
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

//////////////////
//  INCLUDE     //
//  etradio.ts  //
//////////////////

// the micro:bit radio buffer size is 19 bytes only
// therefore, messages are sent in chunks
// a sender sends the chunks with format: id|ix|chunk
// the final chunk has a unique ack_id: id|-1|ack_id
// a receiver acknowledges with: id|-2|ack_id

//##### GROUP HANDLING #####\\

const ET_EVENT = 200 + Math.randomRange(0, 100) // semi-unique id

let ETgroup = 1
let ETgroupTimer = 0
let ETgroupSet = false
let ETgroupHandlers: ((group: number) => void)[] = []

function etHandleGroup() {
    basic.showNumber(ETgroup)
    if (ETgroupHandlers.length) {
        for (let ix = 0; ix < ETgroupHandlers.length; ix++)
            ETgroupHandlers[ix](ETgroup)
    }
    else
        basic.showIcon(IconNames.Yes)
}

control.onEvent(ET_EVENT, 0, function () {
    while (ETgroupTimer > control.millis()) { basic.pause(1) }
    etHandleGroup()
    ETgroupTimer = 0
    ETgroupSet = false
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (ETgroupSet) {
        ETgroup++
        if (ETgroup > 9) ETgroup = 1
        radio.setGroup(ETgroup)
    }
    else
        ETgroupSet = true
    basic.showNumber(ETgroup)
    if (!ETgroupTimer) {
        ETgroupTimer = control.millis() + 1000
        control.raiseEvent(ET_EVENT, 0)
    }
    else
        ETgroupTimer = control.millis() + 1000
})

//##### DATA HANDLING #####\\

const ET_EOM = -1
const ET_ACK = -2

interface ETradioMessages {
    sent: string[]  // id's of sent messages that have no ACK yet
    received: string[]	// received messages that have not been read yet
    chunks: string[]	// temporary buffer for received chunks
    handler: (message: string) => void // will be called when a radio message is received
}

let ETradioMsg: { [id: string]: ETradioMessages } = {}

radio.onReceivedString(function (chunk: string) {

    let parts = chunk.split("|")
    if (parts.length != 3) return
    let id = parts[0]
    let ix = +parts[1]
    let msg = parts[2]

    // create a buffer for id if not existing
    etradio.createBuffer(id)

    // EOM handling (receiver side)
    // (1) send ACK
    // (2) store message or call handler
    // see: etradio.send()
    if (ix === ET_EOM) {
        // (1) msg contains msg id
        msg = id + "|" + ET_ACK.toString() + "|" + msg
        radio.sendString(msg)
        // (2)
        msg = ETradioMsg[id].chunks.join("")
        if (ETradioMsg[id].handler)
            ETradioMsg[id].handler(msg)
        else
            ETradioMsg[id].received.push(msg)
        ETradioMsg[id].chunks = []
        return
    }

    // ACK handling (sender side)
    // (1) clear the ACK flag when acknowledged
    // see: etradio.send()
    if (ix === ET_ACK) {
        if (ETradioMsg[id] && ((ix = ETradioMsg[id].sent.indexOf(msg)) >= 0))
            // (1)
            ETradioMsg[id].sent.splice(ix, 1)
        return
    }

    // CHUNK handling (receiver side)
    ETradioMsg[id].chunks[ix] = msg
})

namespace etradio {

    export function createBuffer(id: string) {
        if (!ETradioMsg[id])
            ETradioMsg[id] = { sent: [], received: [], chunks: [], handler: null }
    }

    export function clearBuffer(id: string) {
        if (ETradioMsg[id])
            delete ETradioMsg[id]
    }

    export function send(id: string, msg: string, timeout: number = 0) {
        // messages are broadcasted

        let len = Math.max(1, 15 - id.length)
        let ix = 0
        let chunk = ""
        let ack_id = control.millis().toString() + Math.randomRange(0, 999).toString()
        ack_id = ack_id.substr(0, len)

        // create a buffer for id if not existing
        createBuffer(id)

        // send message in chunks
        while (msg.length > 0) {
            chunk = id + "|" + ix.toString() + "|" + msg.substr(0, len)
            msg = msg.substr(len)
            radio.sendString(chunk)
            basic.pause(1)
            ix += 1
        }

        // (1) raise ACK flag
        // (2) sent ack_id so that receiver can ACK
        // (3) wait for ACK flag being cleared by radio.onReceivedString
        // (4) clear ACK flag in case of timeout
        // Not fully fail save, but best in terms of successfull transmission
        // Timeout is the savety net
        // After timeout clear the ACK flag anyway

        // (1)
        ETradioMsg[id].sent.push(ack_id)

        // (2)
        chunk = id + "|" + ET_EOM.toString() + "|" + ack_id
        radio.sendString(chunk)

        // (3)
        let tm = control.millis() + timeout
        while (control.millis() < tm && ETradioMsg[id].sent.indexOf(ack_id) >= 0)
            basic.pause(1)

        // (4)
        if ((ix = ETradioMsg[id].sent.indexOf(ack_id)) >= 0)
            ETradioMsg[id].sent.splice(ix, 1)
    }

    export function available(id: string): boolean {
        return !!(ETradioMsg[id] && (ETradioMsg[id].received.length > 0))
    }

    export function read(id: string): string {
        if (!ETradioMsg[id] || !ETradioMsg[id].received.length)
            return ""
        let msg = ETradioMsg[id].received.shift()
        return msg
    }

    export function registerMessageHandler(id: string, handler: (msg: string) => void) {
        createBuffer(id)
        ETradioMsg[id].handler = handler
    }

    export function registerGroupHandler(handler: (group: number) => void) {
        ETgroupHandlers.push(handler)
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

//////////////////
//  INCLUDE     //
//  ettrack.ts  //
//////////////////

enum ETtrackType {
    //% block="calibrated"
    //% block.loc.nl="gecalibreerd"
    Calibrated = 0,
    //% block="dark on light"
    //% block.loc.nl="donker op licht"
    DarkOnLight = 0,
    //% block="light on dark"
    //% block.loc.nl="licht op donker"
    LightOnDark = 1,
}

enum ETtrackMask {
    //% block="two sensors"
    //% block.loc.nl="twee sensoren"
    Track2 = 10, // x o x o x
    //% block="three sensors"
    //% block.loc.nl="drie sensoren"
    Track3 = 14, // x o o o x
    //% block="four sensors"
    //% block.loc.nl="vier sensoren"
    Track4 = 27, // o o x o o
    //% block="five sensors"
    //% block.loc.nl="vijf sensoren"
    Track5 = 31, // o o o o o
}

enum ETtrack {
    //% block="off the track"
    //% block.loc.nl="van de lijn af"
    OffTrack = 0,
    //% block="almost at right off the track"
    //% block.loc.nl="bijna rechts van de lijn"
    FarLeft = 1,
    //% block="right on the track"
    //% block.loc.nl="rechts op de lijn"
    Left = 2,
    //% block="midst of the track"
    //% block.loc.nl="midden op de lijn"
    Mid = 4,
    //% block="left on the track"
    //% block.loc.nl="links op de lijn"
    Right = 8,
    //% block="almost at left off the track"
    //% block.loc.nl="bijna links van de lijn"
    FarRight = 16,
}

function etTrackPosition(track: number, mask = ETtrackMask.Track2, tracktype = ETtrackType.DarkOnLight): ETtrack {

    if (tracktype === ETtrackType.LightOnDark) track = ~track

    if (track & 1) {
        if (track & 16) return ETtrack.Mid
        if (track & 2) return ETtrack.Left
        return ETtrack.FarLeft
    }
    if (track & 16) {
        if (track & 8) return ETtrack.Right
        return ETtrack.FarRight
    }
    if (track & 2) {
        if (track & 8) return ETtrack.Mid
        return ETtrack.Left
    }
    if (track & 8) return ETtrack.Right

    return ETtrack.OffTrack
}

///////////////////
//  END INCLUDE  //
///////////////////

//////////////////////
//  INCLUDE         //
//  px-nezhapro.ts  //
//////////////////////

enum RJPort {
    //% block="J1"
    J1,
    //% block="J2"
    J2,
    //% block="J3"
    J3,
    //% block="J4"
    J4,
}

enum RJLine {
    //% block="L1"
    L1,
    //% block="L2"
    L2,
}

enum MotorPort {
    //% block="M1"
    M1,
    //% block="M2"
    M2,
    //% block="M3"
    M3,
    //% block="M4"
    M4,
}

enum ServoPort {
    //% block="S1"
    S1,
    //% block="S2"
    S2,
    //% block="S3"
    S3,
    //% block="S4"
    S4,
}

namespace RJ {
    const AnalogRJ = [AnalogPin.P8, AnalogPin.P1,
    AnalogPin.P12, AnalogPin.P2,
    AnalogPin.P14, AnalogPin.P13,
    AnalogPin.P16, AnalogPin.P15]

    const DigitalRJ = [DigitalPin.P8, DigitalPin.P1,
    DigitalPin.P12, DigitalPin.P2,
    DigitalPin.P14, DigitalPin.P13,
    DigitalPin.P16, DigitalPin.P15]

    export function analogPin(port: RJPort, line: RJLine): AnalogPin {
        return AnalogRJ[port * 2 + line]
    }

    export function digitalPin(port: RJPort, line: RJLine): DigitalPin {
        return DigitalRJ[port * 2 + line]
    }
}

type Motor = { Port: MotorPort, Revert: boolean }
type Servo = { Port: ServoPort, Revert: boolean }

///////////////////
//  END INCLUDE  //
///////////////////

///////////////////////
//  INCLUDE          //
//  px-trackfour.ts  //
///////////////////////

namespace PxTrackFour {

    export class Device {

        private trackType: ETtrackType
        private i2cAddress: number = 0x1A

        constructor(_type: ETtrackType = ETtrackType.Calibrated, i2c_address: number = 0x1A) {
            this.i2cAddress = i2c_address
            this.trackType = _type
        }

        setTrackType(_type: ETtrackType) {
            this.trackType = _type
        }

        read(): ETtrack {
            pins.i2cWriteNumber(this.i2cAddress, 4, NumberFormat.Int8LE)
            let state = pins.i2cReadNumber(this.i2cAddress, NumberFormat.UInt8LE, false)
            basic.pause(5)
            // From left to right the track sensors represent a bit in 'state'.
            // Since in enum 'ETtrack' the values 1-2-4-8-16 agree with FL-L-M-R-FR,
            // on the current 4-line track sensor:
            // - track values 1 (FL) and 2 (L) stay the same
            // - track value 4 is not used
            // - track values 8 and 16 come from the shifted bit values 4 (R) and 8 (FR)
            let track = (state & 3) + ((state & 12) << 1)
            track = etTrackPosition(track, ETtrackMask.Track4, this.trackType)
            return track
        }

        isTrackFarLeft(): boolean {
            let track = this.read()
            return (track === ETtrack.FarLeft)
        }

        isTrackAtLeft(): boolean {
            let track = this.read()
            return (track === ETtrack.Left)
        }

        isTrackFarRight(): boolean {
            let track = this.read()
            return (track === ETtrack.FarRight)
        }

        isTrackAtRight(): boolean {
            let track = this.read()
            return (track === ETtrack.Right)
        }

        isOnTrack(): boolean {
            let track = this.read()
            return (track === ETtrack.Mid)
        }

        isOffTrack(): boolean {
            let track = this.read()
            return (track === ETtrack.OffTrack)
        }
    }

    export function create(_type: ETtrackType = ETtrackType.Calibrated, i2c_address: number = 0x1A): Device {
        let device = new Device(_type, i2c_address)
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

/////////////////////
//  INCLUDE        //
//  etdistance.ts  //
/////////////////////

/*
The code below is a copy of:
- the HealthyWalk VL53L1X library:
  https://github.com/healthywalk/vl53l1x-microbit/main.ts

The only difference is, that here it is stripped from the
typescript codeblock information so that it won't show up
in MakeCode as a menu on its own.

MIT-license.
*/

namespace EtDistance {

    type ResultBuffer = {
        range_status: number
        stream_count: number
        dss_actual_effective_spads_sd0: number
        ambient_count_rate_mcps_sd0: number
        final_crosstalk_corrected_range_mm_sd0: number
        peak_signal_count_rate_crosstalk_corrected_mcps_sd0: number
    }

    enum RangeStatus {
        RangeValid = 0,
        SigmaFail = 1,
        SignalFail = 2,
        RangeValidMinRangeClipped = 3,
        OutOfBoundsFail = 4,
        HardwareFail = 5,
        RangeValidNoWrapCheckFail = 6,
        WrapTargetFail = 7,
        XtalkSignalFail = 9,
        SynchronizationInt = 10,
        MinRangeFail = 13,
        None = 255,
    }

    type RangingData = {
        range_mm?: number
        range_status?: RangeStatus
        peak_signal_count_rate_MCPS?: number
        ambient_count_rate_MCPS?: number
    }

    const SOFT_RESET = 0x0000
    const OSC_MEASURED__FAST_OSC__FREQUENCY = 0x0006
    const VHV_CONFIG__TIMEOUT_MACROP_LOOP_BOUND = 0x0008
    const VHV_CONFIG__INIT = 0x000B
    const ALGO__PART_TO_PART_RANGE_OFFSET_MM = 0x001E
    const MM_CONFIG__OUTER_OFFSET_MM = 0x0022
    const DSS_CONFIG__TARGET_TOTAL_RATE_MCPS = 0x0024
    const PAD_I2C_HV__EXTSUP_CONFIG = 0x002E
    const GPIO__TIO_HV_STATUS = 0x0031
    const SIGMA_ESTIMATOR__EFFECTIVE_PULSE_WIDTH_NS = 0x0036
    const SIGMA_ESTIMATOR__EFFECTIVE_AMBIENT_WIDTH_NS = 0x0037
    const ALGO__CROSSTALK_COMPENSATION_VALID_HEIGHT_MM = 0x0039
    const ALGO__RANGE_IGNORE_VALID_HEIGHT_MM = 0x003E
    const ALGO__RANGE_MIN_CLIP = 0x003F
    const ALGO__CONSISTENCY_CHECK__TOLERANCE = 0x0040
    const CAL_CONFIG__VCSEL_START = 0x0047
    const PHASECAL_CONFIG__TIMEOUT_MACROP = 0x004B
    const PHASECAL_CONFIG__OVERRIDE = 0x004D
    const DSS_CONFIG__ROI_MODE_CONTROL = 0x004F
    const SYSTEM__THRESH_RATE_HIGH = 0x0050
    const SYSTEM__THRESH_RATE_LOW = 0x0052
    const DSS_CONFIG__MANUAL_EFFECTIVE_SPADS_SELECT = 0x0054
    const DSS_CONFIG__APERTURE_ATTENUATION = 0x0057
    const MM_CONFIG__TIMEOUT_MACROP_A = 0x005A
    const MM_CONFIG__TIMEOUT_MACROP_B = 0x005C
    const RANGE_CONFIG__TIMEOUT_MACROP_A = 0x005E
    const RANGE_CONFIG__VCSEL_PERIOD_A = 0x0060
    const RANGE_CONFIG__TIMEOUT_MACROP_B = 0x0061
    const RANGE_CONFIG__VCSEL_PERIOD_B = 0x0063
    const RANGE_CONFIG__SIGMA_THRESH = 0x0064
    const RANGE_CONFIG__MIN_COUNT_RATE_RTN_LIMIT_MCPS = 0x0066
    const RANGE_CONFIG__VALID_PHASE_HIGH = 0x0069
    const SYSTEM__GROUPED_PARAMETER_HOLD_0 = 0x0071
    const SYSTEM__SEED_CONFIG = 0x0077
    const SD_CONFIG__WOI_SD0 = 0x0078
    const SD_CONFIG__WOI_SD1 = 0x0079
    const SD_CONFIG__INITIAL_PHASE_SD0 = 0x007A
    const SD_CONFIG__INITIAL_PHASE_SD1 = 0x007B
    const SYSTEM__GROUPED_PARAMETER_HOLD_1 = 0x007C
    const SD_CONFIG__QUANTIFIER = 0x007E
    const SYSTEM__SEQUENCE_CONFIG = 0x0081
    const SYSTEM__GROUPED_PARAMETER_HOLD = 0x0082
    const SYSTEM__INTERRUPT_CLEAR = 0x0086
    const SYSTEM__MODE_START = 0x0087
    const RESULT__RANGE_STATUS = 0x0089
    const PHASECAL_RESULT__VCSEL_START = 0x00D8
    const RESULT__OSC_CALIBRATE_VAL = 0x00DE
    const FIRMWARE__SYSTEM_STATUS = 0x00E5
    const TargetRate = 0x0A00
    const TimingGuard = 4528
    const i2cAddr = 0x29
    const io_timeout = 500

    export class Device {

        calibrated: boolean = false
        fast_osc_frequency = 1
        saved_vhv_init = 0
        saved_vhv_timeout = 0
        results: ResultBuffer = {
            range_status: 0,
            stream_count: 0,
            dss_actual_effective_spads_sd0: 0,
            ambient_count_rate_mcps_sd0: 0,
            final_crosstalk_corrected_range_mm_sd0: 0,
            peak_signal_count_rate_crosstalk_corrected_mcps_sd0: 0
        }
        ranging_data: RangingData = {}
        osc_calibrate_val = 0
        timeout_start_ms = 0

        constructor() {
            this.init()
        }

        private init(): void {
            this.writeReg(SOFT_RESET, 0x00)
            basic.pause(1)
            this.writeReg(SOFT_RESET, 0x01)
            basic.pause(1)
            this.startTimeout()
            while ((this.readReg(FIRMWARE__SYSTEM_STATUS) & 0x01) === 0) {
                if (this.checkTimeoutExpired()) {
                    return
                }
            }
            this.writeReg(PAD_I2C_HV__EXTSUP_CONFIG,
                this.readReg(PAD_I2C_HV__EXTSUP_CONFIG) | 0x01)
            this.fast_osc_frequency = this.readReg16Bit(OSC_MEASURED__FAST_OSC__FREQUENCY)
            this.osc_calibrate_val = this.readReg16Bit(RESULT__OSC_CALIBRATE_VAL)
            this.writeReg16Bit(DSS_CONFIG__TARGET_TOTAL_RATE_MCPS, TargetRate)
            this.writeReg(GPIO__TIO_HV_STATUS, 0x02)
            this.writeReg(SIGMA_ESTIMATOR__EFFECTIVE_PULSE_WIDTH_NS, 8)
            this.writeReg(SIGMA_ESTIMATOR__EFFECTIVE_AMBIENT_WIDTH_NS, 16)
            this.writeReg(ALGO__CROSSTALK_COMPENSATION_VALID_HEIGHT_MM, 0x01)
            this.writeReg(ALGO__RANGE_IGNORE_VALID_HEIGHT_MM, 0xFF)
            this.writeReg(ALGO__RANGE_MIN_CLIP, 0)
            this.writeReg(ALGO__CONSISTENCY_CHECK__TOLERANCE, 2)

            this.writeReg16Bit(SYSTEM__THRESH_RATE_HIGH, 0x0000)
            this.writeReg16Bit(SYSTEM__THRESH_RATE_LOW, 0x0000)
            this.writeReg(DSS_CONFIG__APERTURE_ATTENUATION, 0x38)

            this.writeReg16Bit(RANGE_CONFIG__SIGMA_THRESH, 360)
            this.writeReg16Bit(RANGE_CONFIG__MIN_COUNT_RATE_RTN_LIMIT_MCPS, 192)

            this.writeReg(SYSTEM__GROUPED_PARAMETER_HOLD_0, 0x01)
            this.writeReg(SYSTEM__GROUPED_PARAMETER_HOLD_1, 0x01)
            this.writeReg(SD_CONFIG__QUANTIFIER, 2)

            this.writeReg(SYSTEM__GROUPED_PARAMETER_HOLD, 0x00)
            this.writeReg(SYSTEM__SEED_CONFIG, 1)
            this.writeReg(SYSTEM__SEQUENCE_CONFIG, 0x8B)
            this.writeReg16Bit(DSS_CONFIG__MANUAL_EFFECTIVE_SPADS_SELECT, 200 << 8)
            this.writeReg(DSS_CONFIG__ROI_MODE_CONTROL, 2)
            this.setLongDistanceMode()
            this.setMeasurementTimingBudget(50000)
            this.writeReg16Bit(ALGO__PART_TO_PART_RANGE_OFFSET_MM,
                this.readReg16Bit(MM_CONFIG__OUTER_OFFSET_MM) * 4)
        }

        private setLongDistanceMode(): void {
            this.writeReg(RANGE_CONFIG__VCSEL_PERIOD_A, 0x0F)
            this.writeReg(RANGE_CONFIG__VCSEL_PERIOD_B, 0x0D)
            this.writeReg(RANGE_CONFIG__VALID_PHASE_HIGH, 0xB8)
            this.writeReg(SD_CONFIG__WOI_SD0, 0x0F)
            this.writeReg(SD_CONFIG__WOI_SD1, 0x0D)
            this.writeReg(SD_CONFIG__INITIAL_PHASE_SD0, 14)
            this.writeReg(SD_CONFIG__INITIAL_PHASE_SD1, 14)
        }

        private setMeasurementTimingBudget(budget_us: number): boolean {
            if (budget_us <= TimingGuard) { return false }
            budget_us -= TimingGuard
            let range_config_timeout_us = budget_us
            if (range_config_timeout_us > 1100000) { return false }
            range_config_timeout_us = Math.floor(range_config_timeout_us / 2)
            let macro_period_us = this.calcMacroPeriod(this.readReg(RANGE_CONFIG__VCSEL_PERIOD_A))
            let phasecal_timeout_mclks = this.timeoutMicrosecondsToMclks(1000, macro_period_us)
            if (phasecal_timeout_mclks > 0xFF) { phasecal_timeout_mclks = 0xFF }
            this.writeReg(PHASECAL_CONFIG__TIMEOUT_MACROP, phasecal_timeout_mclks)
            this.writeReg16Bit(MM_CONFIG__TIMEOUT_MACROP_A, this.encodeTimeout(
                this.timeoutMicrosecondsToMclks(1, macro_period_us)))
            this.writeReg16Bit(RANGE_CONFIG__TIMEOUT_MACROP_A, this.encodeTimeout(
                this.timeoutMicrosecondsToMclks(range_config_timeout_us, macro_period_us)))
            macro_period_us = this.calcMacroPeriod(this.readReg(RANGE_CONFIG__VCSEL_PERIOD_B))
            this.writeReg16Bit(MM_CONFIG__TIMEOUT_MACROP_B, this.encodeTimeout(
                this.timeoutMicrosecondsToMclks(1, macro_period_us)))
            this.writeReg16Bit(RANGE_CONFIG__TIMEOUT_MACROP_B, this.encodeTimeout(
                this.timeoutMicrosecondsToMclks(range_config_timeout_us, macro_period_us)))
            return true
        }

        private readRaw(): number {
            this.startTimeout()
            while (!this.dataReady()) {
                if (this.checkTimeoutExpired()) {
                    return 0
                }
            }
            this.readResults()
            if (!this.calibrated) {
                this.setupManualCalibration()
                this.calibrated = true
            }
            this.updateDSS()
            let range = this.results.final_crosstalk_corrected_range_mm_sd0
            this.ranging_data.range_mm = Math.floor((range * 2011 + 0x0400) / 0x0800)
            this.writeReg(SYSTEM__INTERRUPT_CLEAR, 0x01)
            if (this.results.range_status === 4) this.ranging_data.range_mm = 9999
            return this.ranging_data.range_mm
        }

        private setupManualCalibration(): void {
            this.saved_vhv_init = this.readReg(VHV_CONFIG__INIT)
            this.saved_vhv_timeout = this.readReg(VHV_CONFIG__TIMEOUT_MACROP_LOOP_BOUND)
            this.writeReg(VHV_CONFIG__INIT, this.saved_vhv_init & 0x7F)
            this.writeReg(VHV_CONFIG__TIMEOUT_MACROP_LOOP_BOUND,
                (this.saved_vhv_timeout & 0x03) + (3 << 2))
            this.writeReg(PHASECAL_CONFIG__OVERRIDE, 0x01)
            this.writeReg(CAL_CONFIG__VCSEL_START, this.readReg(PHASECAL_RESULT__VCSEL_START))
        }

        private readResults(): void {
            pins.i2cWriteNumber(i2cAddr, RESULT__RANGE_STATUS, NumberFormat.UInt16BE, false)
            let buf = pins.i2cReadBuffer(i2cAddr, 17, false)
            this.results.range_status = buf.getNumber(NumberFormat.UInt8BE, 0)
            this.results.stream_count = buf.getNumber(NumberFormat.UInt8BE, 2)
            this.results.dss_actual_effective_spads_sd0 = buf.getNumber(NumberFormat.UInt16BE, 3)
            this.results.ambient_count_rate_mcps_sd0 = buf.getNumber(NumberFormat.UInt16BE, 7)
            this.results.final_crosstalk_corrected_range_mm_sd0 = buf.getNumber(NumberFormat.UInt16BE, 13)
            this.results.peak_signal_count_rate_crosstalk_corrected_mcps_sd0 = buf.getNumber(NumberFormat.UInt16BE, 15)
        }

        private updateDSS(): void {
            let spadCount = this.results.dss_actual_effective_spads_sd0
            if (spadCount !== 0) {
                let totalRatePerSpad =
                    this.results.peak_signal_count_rate_crosstalk_corrected_mcps_sd0 +
                    this.results.ambient_count_rate_mcps_sd0
                if (totalRatePerSpad > 0xFFFF) { totalRatePerSpad = 0xFFFF }
                totalRatePerSpad <<= 16
                totalRatePerSpad = Math.floor(totalRatePerSpad / spadCount)
                if (totalRatePerSpad !== 0) {
                    let requiredSpads = Math.floor((TargetRate << 16) / totalRatePerSpad)
                    if (requiredSpads > 0xFFFF || requiredSpads < 0) { requiredSpads = 0xFFFF }
                    this.writeReg16Bit(DSS_CONFIG__MANUAL_EFFECTIVE_SPADS_SELECT, requiredSpads)
                    return
                }
            }
            this.writeReg16Bit(DSS_CONFIG__MANUAL_EFFECTIVE_SPADS_SELECT, 0x8000)
        }

        private writeReg(reg: number, d: number): void {
            let buf = pins.createBuffer(3)
            buf.setNumber(NumberFormat.UInt16BE, 0, reg)
            buf.setNumber(NumberFormat.UInt8BE, 2, d)
            pins.i2cWriteBuffer(i2cAddr, buf, false)
        }

        private writeReg16Bit(reg: number, d: number): void {
            let tmp = (reg << 16) | d
            pins.i2cWriteNumber(i2cAddr, tmp, NumberFormat.UInt32BE, false)
        }

        private readReg(reg: number): number {
            pins.i2cWriteNumber(i2cAddr, reg, NumberFormat.UInt16BE, false)
            let d = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8BE, false)
            return d
        }

        private readReg16Bit(reg: number): number {
            pins.i2cWriteNumber(i2cAddr, reg, NumberFormat.UInt16BE, false)
            let d = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt16BE, false)
            return d
        }

        private encodeTimeout(timeout_mclks: number): number {
            let ls_byte = 0
            let ms_byte = 0
            if (timeout_mclks > 0) {
                ls_byte = timeout_mclks - 1
                while ((ls_byte & 0xFFFFFF00) > 0) {
                    ls_byte >>= 1
                    ms_byte++
                }
                return (ms_byte << 8) | (ls_byte & 0xFF)
            } else {
                return 0
            }
        }

        private timeoutMicrosecondsToMclks(timeout_us: number, macro_period_us: number): number {
            return Math.floor(((timeout_us << 12) + (macro_period_us >> 1)) / macro_period_us)
        }

        private calcMacroPeriod(vcsel_period: number): number {
            let pll_period_us = Math.floor((0x01 << 30) / this.fast_osc_frequency)
            let vcsel_period_pclks = (vcsel_period + 1) << 1

            let macro_period_us = 2304 * pll_period_us
            macro_period_us >>= 6
            macro_period_us *= vcsel_period_pclks
            macro_period_us >>= 6
            return macro_period_us
        }

        private startTimeout(): void {
            this.timeout_start_ms = input.runningTime()
        }

        private checkTimeoutExpired(): boolean {
            return (io_timeout > 0) && ((input.runningTime() - this.timeout_start_ms) > io_timeout)
        }

        private dataReady(): boolean {
            return (this.readReg(GPIO__TIO_HV_STATUS) & 0x01) === 0
        }

        read(): number {
            this.writeReg(SYSTEM__INTERRUPT_CLEAR, 0x01)
            this.writeReg(SYSTEM__MODE_START, 0x10)
            return Math.round(this.readRaw() / 10)
        }
    }

    export function create(): Device {
        let device = new Device()
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

///////////////////
//  INCLUDE      //
//  px-distance  //
///////////////////

namespace PxDistance {

    export class Device {

        trigger: DigitalPin
        echo: DigitalPin

        constructor(port: RJPort) {
            this.echo = RJ.digitalPin(port, RJLine.L1)
            this.trigger = RJ.digitalPin(port, RJLine.L2)
        }

        read(): number {
            pins.setPull(this.trigger, PinPullMode.PullNone)
            pins.digitalWritePin(this.trigger, 0)
            control.waitMicros(2)
            pins.digitalWritePin(this.trigger, 1)
            control.waitMicros(10)
            pins.digitalWritePin(this.trigger, 0)

            // read pulse
            let d = pins.pulseIn(this.echo, PulseValue.High, 25000)
            let distance = d * 34 / 2 / 1000

            if (distance === 0 || distance > 430)
                return 999

            return Math.floor(distance)
        }
    }

    export function create(port: RJPort): Device {
        let device = new Device(port)
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

///////////////////
//  INCLUDE      //
//  px-color.ts  //
///////////////////

/*
The code below is a refactoring of:
- the ElecFreaks 'pxt-PlanetX' library:
  https://github.com/elecfreaks/pxt-PlanetX/blob/master/basic.ts
MIT-license.
*/

namespace PxColor {

    const APDS9960_ENABLE = 0x80
    const APDS9960_ATIME = 0x81
    const APDS9960_CONTROL = 0x8F
    const APDS9960_STATUS = 0x93
    const APDS9960_CDATAL = 0x94
    const APDS9960_CDATAH = 0x95
    const APDS9960_RDATAL = 0x96
    const APDS9960_RDATAH = 0x97
    const APDS9960_GDATAL = 0x98
    const APDS9960_GDATAH = 0x99
    const APDS9960_BDATAL = 0x9A
    const APDS9960_BDATAH = 0x9B
    const APDS9960_GCONF4 = 0xAB
    const APDS9960_AICLEAR = 0xE7


    export class Device {

        private color_first_init = false
        private color_new_init = false
        private i2cAddress: number = 0x39

        private i2c_write(reg: number, value: number) {
            let buf = pins.createBuffer(2)
            buf[0] = reg
            buf[1] = value
            pins.i2cWriteBuffer(this.i2cAddress, buf)
        }

        private i2c_read(reg: number) {
            pins.i2cWriteNumber(this.i2cAddress, reg, NumberFormat.UInt8BE)
            basic.pause(1)
            let val = pins.i2cReadNumber(this.i2cAddress, NumberFormat.UInt8BE)
            return val;
        }

        private init() {
            this.i2c_write(APDS9960_ATIME, 252)
            this.i2c_write(APDS9960_CONTROL, 0x03)
            this.i2c_write(APDS9960_ENABLE, 0x00)
            this.i2c_write(APDS9960_GCONF4, 0x00)
            this.i2c_write(APDS9960_AICLEAR, 0x00)
            this.i2c_write(APDS9960_ENABLE, 0x01)
            this.color_first_init = true
            // set to color mode
            let tmp = this.i2c_read(APDS9960_ENABLE) | 0x2;
            this.i2c_write(APDS9960_ENABLE, tmp)
        }

        constructor(i2c_address: number = 0x39) {
            this.i2cAddress = i2c_address
            this.init()
        }

        read(): ETcolor {
            let buf = pins.createBuffer(2)
            let c = 0
            let r = 0
            let g = 0
            let b = 0
            let temp_c = 0
            let temp_r = 0
            let temp_g = 0
            let temp_b = 0
            let temp = 0

            if (this.color_new_init === false && this.color_first_init === false) {
                let i = 0;
                while (i++ < 15) {
                    buf[0] = 0x81
                    buf[1] = 0xCA
                    pins.i2cWriteBuffer(this.i2cAddress, buf)
                    buf[0] = 0x80
                    buf[1] = 0x17
                    pins.i2cWriteBuffer(this.i2cAddress, buf)
                    basic.pause(50)

                    if ((this.i2c_read(0xA4) + this.i2c_read(0xA5) * 256) !== 0) {
                        this.color_new_init = true
                        break;
                    }
                }
            }
            if (this.color_new_init === true) {
                basic.pause(150)
                c = this.i2c_read(0xA6) + this.i2c_read(0xA7) * 256;
                r = this.i2c_read(0xA0) + this.i2c_read(0xA1) * 256;
                g = this.i2c_read(0xA2) + this.i2c_read(0xA3) * 256;
                b = this.i2c_read(0xA4) + this.i2c_read(0xA5) * 256;

                r *= 1.3 * 0.47 * 0.83
                g *= 0.69 * 0.56 * 0.83
                b *= 0.80 * 0.415 * 0.83
                c *= 0.3

                if (r > b && r > g) {
                    b *= 1.18;
                    g *= 0.95
                }

                temp_c = c
                temp_r = r
                temp_g = g
                temp_b = b

                r = Math.min(r, 4095.9356)
                g = Math.min(g, 4095.9356)
                b = Math.min(b, 4095.9356)
                c = Math.min(c, 4095.9356)

                if (temp_b < temp_g) {
                    temp = temp_b
                    temp_b = temp_g
                    temp_g = temp
                }
            }
            else {
                if (this.color_first_init === false)
                    this.init()
                let tmp = this.i2c_read(APDS9960_STATUS) & 0x1;
                while (!tmp) {
                    basic.pause(5)
                    tmp = this.i2c_read(APDS9960_STATUS) & 0x1;
                }
                c = this.i2c_read(APDS9960_CDATAL) + this.i2c_read(APDS9960_CDATAH) * 256;
                r = this.i2c_read(APDS9960_RDATAL) + this.i2c_read(APDS9960_RDATAH) * 256;
                g = this.i2c_read(APDS9960_GDATAL) + this.i2c_read(APDS9960_GDATAH) * 256;
                b = this.i2c_read(APDS9960_BDATAL) + this.i2c_read(APDS9960_BDATAH) * 256;
            }

            // map to rgb based on clear channel
            let avg = c / 3;
            r = r * 255 / avg;
            g = g * 255 / avg;
            b = b * 255 / avg;

            return etFromRgbValues(r / 255, g / 255, b / 255)
        }
    }

    export function create(i2c_address: number = 0x39): Device {
        let device = new Device(i2c_address)
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

//////////////////
//  INCLUDE     //
//  et-heading  //
//////////////////

enum ETheading {
    //% block="North"
    //% block.loc.nl="noorden"
    N = 0,
    //% block="North-Northeast"
    //% block.loc.nl="noord-noordoosten"
    NNE = 22.5,
    //% block="Northeast"
    //% block.loc.nl="noordoosten"
    NE = 45,
    //% block="East-Northeast"
    //% block.loc.nl="oost-noordoosten"
    ENE = 67.5,
    //% block="East"
    //% block.loc.nl="oosten"
    E = 90,
    //% block="East-Southeast"
    //% block.loc.nl="oost-zuidoosten"
    ESE = 112.5,
    //% block="Southeast"
    //% block.loc.nl="zuidoosten"
    SE = 135,
    //% block="South-Southeast"
    //% block.loc.nl="zuid-zuidoosten"
    SSE = 157.5,
    //% block="South"
    //% block.loc.nl="Zuid"
    S = 180,
    //% block="South-Southwest"
    //% block.loc.nl="zuid-zuidwesten"
    SSW = 200.5,
    //% block="Southwest"
    //% block.loc.nl="zuidwesten"
    SW = 225,
    //% block="West-Southwest"
    //% block.loc.nl="west-zuidwesten"
    WSW = 247.5,
    //% block="West"
    //% block.loc.nl="westen"
    W = 270,
    //% block="west-northwesten"
    //% block.loc.nl="West-Noordwest"
    WNW = 292.5,
    //% block="Northwest"
    //% block.loc.nl="noordwesten"
    NW = 315,
    //% block="North-Northwest"
    //% block.loc.nl="noord-noordwesten"
    NNW = 337.5,
}

namespace EtHeading {

    export class Device {

        read(): ETheading {
            let hd = Math.round(input.compassHeading() / 22.5) * 22.5
            if (hd === 360) hd = 0
            return hd
        }
    }

    export function create(): Device {
        let device = new Device()
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

///////////////////
//  INCLUDE      //
//  px-servo.ts  //
///////////////////

enum ETangle {
    //% block="relative"
    //% block.loc.nl="relatieve"
    Relative,
    //%block="absolute"
    //%block.loc.nl="absolute"
    Absolute,
}
namespace PxServo {

    export class Device {

        private SV: Servo
        private relative = false
        private curangle = 0

        private readAngle(): number {
            basic.pause(4)
            let buf = pins.createBuffer(8)
            buf[0] = 0xFF
            buf[1] = 0xF9;
            buf[2] = this.SV.Port + 1;
            buf[3] = 0x00;
            buf[4] = 0x46;
            buf[5] = 0x00;
            buf[6] = 0xF5;
            buf[7] = 0x00;
            pins.i2cWriteBuffer(0x10, buf)
            basic.pause(20)
            let arr = pins.i2cReadBuffer(0x10, 4)
            return (arr[3] << 24) | (arr[2] << 16) | (arr[1] << 8) | (arr[0])
        }

        constructor(servo: Servo) {
            this.SV = servo
        }

        coast() {
            // there is no special coast command
            // work around: speed 0 causes coasting
            let buf = pins.createBuffer(8)
            buf[0] = 0xFF
            buf[1] = 0xF9;
            buf[2] = this.SV.Port + 1;
            buf[3] = 0;
            buf[4] = 0x60;
            buf[5] = 0x00;
            buf[6] = 0x00;
            buf[7] = 0x00;
            pins.i2cWriteBuffer(0x10, buf)
            basic.pause(20)
        }

        angle(rotation: ETrotate, angle: number) {
            // angle in degrees
            if (this.SV.Revert) {
                rotation = (rotation === ETrotate.Clockwise ? ETrotate.AntiClockwise : ETrotate.Clockwise)
                angle = 360 - angle
            }
            if (this.relative)
                this.curangle += (rotation === ETrotate.Clockwise ? angle : -angle)
            else
                this.curangle = angle
            while (this.curangle < 0) this.curangle += 360
            angle %= 360
            let buf = pins.createBuffer(8)
            buf[0] = 0xFF
            buf[1] = 0xF9;
            buf[2] = this.SV.Port + 1;
            buf[3] = 0x00;
            buf[4] = 0x5D; // absolute angle
            buf[5] = (this.curangle >> 8) & 0xFF
            // buf[6]:
            // 1 = short route
            // 2 = clockwise
            // 3 = anticlockwise
            buf[6] = (rotation === ETrotate.Clockwise ? 2 : 3)
            buf[7] = this.curangle & 0xFF
            pins.i2cWriteBuffer(0x10, buf)
            basic.pause(20)
        }

        setAngleMode(mode: ETangle) {
            this.relative = (mode === ETangle.Relative)
        }

        read(): number {
            // angle in degrees
            let position = this.readAngle()
            while (position < 0) {
                position += 3600;
            }
            let angle = (position % 3600) * 0.1;
            if (this.SV.Revert) angle = 360 - angle
            return angle
        }
    }

    export function create(servo: Servo): Device {
        let device = new Device(servo)
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

///////////////////////
//  INCLUDE          //
//  px-wheelstwo.ts  //
///////////////////////

namespace PxWheelsTwo {

    export class Device {

        private ML: Motor
        private MR: Motor
        private calForw = 0 // pos: perc. slowing down left motor
        private calRev = 0  // neg: perc. slowing down right motor
        private diameter: number = 67

        constructor(left: Motor, right: Motor) {
            this.ML = left
            this.MR = right
        }

        private _speed(motor: MotorPort, rotation: ETrotate, speed: number): void {
            // speed in %
            if (speed > 100) speed = 100
            let buf = pins.createBuffer(8)
            buf[0] = 0xFF
            buf[1] = 0xF9;
            buf[2] = motor + 1;
            buf[3] = rotation - 2;
            buf[4] = 0x60;
            buf[5] = Math.floor(speed)
            buf[6] = 0xF5;
            buf[7] = 0x00;
            pins.i2cWriteBuffer(0x10, buf)
            basic.pause(20)
        }

        private _read(): [number, number] {
            // speed in rotations per second (rps)
            let buf = pins.createBuffer(8)
            buf[0] = 0xFF
            buf[1] = 0xF9;
            buf[2] = this.ML.Port + 1;
            buf[3] = 0x00;
            buf[4] = 0x47;
            buf[5] = 0x00;
            buf[6] = 0xF5;
            buf[7] = 0x00;
            pins.i2cWriteBuffer(0x10, buf)
            basic.pause(20)
            let arr = pins.i2cReadBuffer(0x10, 2)
            let retData = (arr[1] << 8) | (arr[0])
            let left = Math.floor(retData / 3.6) * 0.01;
            buf[2] = this.MR.Port + 1
            pins.i2cWriteBuffer(0x10, buf)
            arr = pins.i2cReadBuffer(0x10, 2)
            retData = (arr[1] << 8) | (arr[0])
            let right = Math.floor(retData / 3.6) * 0.01;
            return [left, right]
        }

        setDiameter(diameter: number) {
            // diameter in mm
            this.diameter = diameter
        }

        speed(left: number, right: number) {
            // speed in % [-100, 100]
            left = (this.ML.Revert ? -left : left)
            right = (this.MR.Revert ? -right : right)
            this._speed(this.ML.Port, left >= 0 ? ETrotate.Clockwise : ETrotate.AntiClockwise, Math.abs(left))
            this._speed(this.MR.Port, right >= 0 ? ETrotate.Clockwise : ETrotate.AntiClockwise, Math.abs(right))
        }

        speedRps(left: number, right: number) {
            this.speed(Math.round(left * 38.46), Math.round(right * 38.46))
        }

        speedCps(left: number, right: number) {
            left = Math.round(left * 0.314 * this.diameter)
            right = Math.round(right * 0.314 * this.diameter)
            this.speed(left, right)
        }

        stop() {
            let buf = pins.createBuffer(8)
            buf[0] = 0xFF
            buf[1] = 0xF9;
            buf[2] = this.ML.Port + 1;
            buf[3] = 0x00;
            buf[4] = 0x5F;
            buf[5] = 0x00;
            buf[6] = 0xF5;
            buf[7] = 0x00;
            pins.i2cWriteBuffer(0x10, buf)
            basic.pause(20)
            buf[2] = this.MR.Port + 1;
            pins.i2cWriteBuffer(0x10, buf)
            basic.pause(20)
        }

        read(): [number, number] {
            // speed in %
            let val = this._read()
            let left = Math.round(val[0] * 38.46)
            let right = Math.round(val[1] * 38.46)
            return [left, right]
        }

        readRps(): [number, number] {
            // rotations per second
            let val = this._read()
            let left = Math.round(val[0])
            let right = Math.round(val[1])
            return [left, right]
        }

        readCps(): [number, number] {
            // centimeters per second
            let val = this._read()
            let left = Math.round(val[0] * 0.314 * this.diameter)
            let right = Math.round(val[1] * 0.314 * this.diameter)
            return [left, right]
        }
    }

    export function create(left: Motor, right: Motor): Device {
        let device = new Device(left, right)
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

/////////////////
//  EXTENSION  //
//  etbuggy.ts //
/////////////////

enum ETfield {
    //% block="in the field"
    //% block.loc.nl="in het veld"
    InField,
    //% block="on the line"
    //% block.loc.nl="op de lijn"
    OnBorder,
    //% block="outside the field"
    //% block.loc.nl="buiten het veld"
    OutsideField,
}

enum ETdistSens {
    //% block="Planet X ultrasone"
    //% block.loc.nl="Planet X ultrasone"
    Ultrasone,
    //% block="ElecTricks lidar"
    //% block.loc.nl="ElecTricks lidar"
    Lidar,
}

//% color="#FF8844" icon="\uf1b9"
//% block="Buggy"
//% block.loc.nl="Buggy"
namespace EtBuggy {

    let car = PxWheelsTwo.create({ Port: MotorPort.M4, Revert: true },
        { Port: MotorPort.M1, Revert: false })
    export let servo = PxServo.create({ Port: ServoPort.S2, Revert: false })
    let tracksens = PxTrackFour.create()
    let lidarsens = EtDistance.create()
    let ultrasonesens = PxDistance.create(RJPort.J1)
    let colorsens = PxColor.create()
    let headingsens = EtHeading.create()

    let excludeservo = false
    let tracktype = ETtrackType.DarkOnLight
    let trackcolor = ETcolor.Black
    let islidar = true
    let cmnear = 30
    let cmfar = 200
    let cmmax = 250
    car.setDiameter(67)
    servo.setAngleMode(ETangle.Relative)

    let speedPerc = 0
    let bendPerc = 0

    function go(): void {
        speedPerc = Math.max(-100, Math.min(100, speedPerc))
        bendPerc = Math.max(-100, Math.min(100, bendPerc))

        let bend = bendPerc / 100 // -1 .. +1
        let left = speedPerc
        let right = speedPerc

        if (bend > 0) // turn right from 0 to +speedPerc
            right = speedPerc * (1 - bend)
        else
            if (bend < 0) // turn left from 0 to +speedPerc
                left = speedPerc * (1 + bend)

        if (Math.abs(bend) > 0.5) {
            let spinFactor = (Math.abs(bend) - 0.5) * 2 // 0..1
            if (bend > 0)
                // turn right from 0 to -speedPerc
                right = speedPerc * (1 - 2 * spinFactor)
            else
                // turn left from 0 to -speedPerc
                left = speedPerc * (1 - 2 * spinFactor)
        }

        car.speed(left, right)
    }

    // because of the construction of a model, direct access
    // to the servo may be destructive
    // therefore, extensions are offered the possibility to
    // exclude direct access
    export function excludeServo() {
        excludeservo = true
    }

    //% subcategory="Windroos"
    //% block="is driving to the %heading"
    //% block.loc.nl="gaat naar het %heading"
    export function isHeading(heading: ETheading): boolean {
        return (headingsens.read() === heading)
    }

    //% subcategory="Windroos"
    //% block="drive direction"
    //% block.loc.nl="rijrichting"
    export function readHeading(): ETheading {
        return headingsens.read()
    }

    //% subcategory="Afstand"
    //% block="an object is far away"
    //% block.loc.nl="een voorwerp is ver weg"
    export function isFarDistance(): boolean {
        let cm = readDistance()
        return (cm > cmfar && cm < cmmax)
    }

    //% subcategory="Afstand"
    //% block="an object is near"
    //% block.loc.nl="een voorwerp is dichtbij"
    export function isCloseDistance(): boolean {
        return (readDistance() < cmnear)
    }

    //% subcategory="Afstand"
    //% block="an object is observed"
    //% block.loc.nl="er wordt een voorwerp waargenomen"
    export function isObserved(): boolean {
        return (readDistance() < cmmax)
    }

    //% subcategory="Afstand"
    //% block="nothing observed"
    //% block.loc.nl="niets waargenomen"
    export function nothingObserved(): number {
        return 999
    }

    //% subcategory="Afstand"
    //% block="distance"
    //% block.loc.nl="afstand"
    export function readDistance(): number {
        return (islidar ? lidarsens.read() : ultrasonesens.read())
    }

    //% subcategory="Veld"
    //% block="is driving over %color"
    //% block.loc.nl="rijdt over %color"
    export function isFieldColor(color: ETcolor): boolean {
        return (colorsens.read() === color)
    }

    //% subcategory="Veld"
    //% block="is driving %pos"
    //% block.loc.nl="rijdt %pos"
    export function isFieldPos(pos: ETfield): boolean {
        return (pos === readFieldPos())
    }

    //% subcategory="Veld"
    //% block="field color"
    //% block.loc.nl="veldkleur"
    export function readFieldColor(): ETcolor {
        return colorsens.read()
    }

    //% subcategory="Veld"
    //% block="field position"
    //% block.loc.nl="veldpositie"
    export function readFieldPos(): ETfield {
        if (colorsens.read() === trackcolor)
            return ETfield.OutsideField
        if (tracksens.read() === ETtrack.OffTrack)
            return ETfield.InField
        return ETfield.OnBorder
    }

    //% subcategory="Lijn"
    //% block="is driving %pos"
    //% block.loc.nl="rijdt %pos"
    export function isLinePos(pos: ETtrack): boolean {
        return (tracksens.read() === pos)
    }

    //% subcategory="Lijn"
    //% block="line position"
    //% block.loc.nl="lijnpositie"
    export function readLinePos(): ETtrack {
        return tracksens.read()
    }

    //% subcategory="Instellingen"
    //% block="the biggest distance is %max cm"
    //% block.loc.nl="de grootste afstand is %max cm"
    export function setMaxDistance(max: number) {
        cmmax = max
    }

    //% subcategory="Instellingen"
    //% block="close is < %close cm and far is > %far cm"
    //% block.loc.nl="dichtbij is < %close cm en ver is > %far cm"
    export function setDistances(close: number, far: number) {
        cmnear = close
        cmfar = far
    }

    //% subcategory="Instellingen"
    //% block="use the %sens sensor"
    //% block.loc.nl="gebruik de %sens sensor"
    export function setDistanceSensor(sens: ETdistSens) {
        islidar = (sens === ETdistSens.Lidar)
    }

    //% subcategory="Instellingen"
    //% block="use servo with %mode angles"
    //% block.loc.nl="gebruik de servo met %mode hoeken"
    export function setAngleMode(mode: ETangle) {
        servo.setAngleMode(mode)
    }

    //% subcategory="Instellingen"
    //% block="the line is %line having color %clr"
    //% block.loc.nl="de lijn is %line met kleur %clr"
    export function setTrackType(line: ETtrackType, clr: ETcolor) {
        trackcolor = clr
        tracktype = line
        tracksens.setTrackType(line)
    }

    //% block="release the power from the work motor"
    //% block.loc.nl="haal de kracht van de werkmotor"
    export function coastServo() {
        servo.coast()
    }

    //% block="turn the work motor %angle degrees %dir"
    //% block.loc.nl="draai de werkmotor %angle graden %dir"
    export function turnServo(angle: number, dir: ETmoveZ) {
        if (excludeservo) {
            basic.showString("no servo access")
            basic.showIcon(IconNames.No)
            return
        }
        // up and down are regarded from the buggy front side
        servo.angle(dir === ETmoveZ.Up ? ETrotate.Clockwise : ETrotate.AntiClockwise, angle)
    }

    //% block="turn %rot to the %heading"
    //% block.loc.nl="keer %rot naar het %heading"
    export function turnTo(rot: ETrotate, heading: ETheading) {
        let speedL, speedR: number
        if (rot == ETrotate.Clockwise) {
            speedL = 30
            speedR = -30
        }
        else {
            speedL = -30
            speedR = 30
        }
        car.speed(speedL, speedR)
        let tm = control.millis() + 5000
        while (headingsens.read() !== heading && tm > control.millis())
            basic.pause(1)
    }

    //% block="steer %steer with a %bend \\% turn"
    //% block.loc.nl="stuur %steer met een %bend \\% bocht"
    //% bend.min = 0 bend.max=100 bend.defl=25
    export function bend(steer: ETturn, bend: number) {
        if (bend < 0) bend = 0
        if (bend > 100) bend = 100
        bendPerc = (steer === ETturn.Left ? -bend : bend)
        go()
    }

    //% block="drive straight"
    //% block.loc.nl="rijd rechtuit"
    export function straight() {
        bendPerc = 0
        go()
    }

    //% block="drive %dir with %speed \\% speed"
    //% block.loc.nl="rijd %dir met %speed \\% snelheid"
    //% speed.min = 0 speed.max=100 speed.defl=30
    export function drive(dir: ETmoveY, speed: number) {
        if (speed < 0) speed = 0
        if (speed > 100) speed = 100
        speedPerc = (dir === ETmoveY.Forward ? speed : -speed)
        go()
    }

    //% block="stop"
    //% block.loc.nl="stop"
    export function stop() {
        speedPerc = 0
        go()
    }
}

/////////////////////
//  END EXTENSION  //
/////////////////////

////////////////////
//  INCLUDE       //
//  px-ailens.ts  //
////////////////////

enum ETrecognition {
    //% block="balls"
    //% block.loc.nl="ballen"
    Ball = 7,
    //% block="colors"
    //% block.loc.nl="kleuren"
    Color = 9
}

namespace PxAILens {

    const CameraAddr = 0X14;

    export class Device {

        private DataBuffer = pins.createBuffer(9)
        private ITEM = 0

        constructor() {
            this.init()
        }

        private init() {
            let timeout = input.runningTime()
            while (!(pins.i2cReadNumber(CameraAddr, NumberFormat.Int8LE))) {
                if (input.runningTime() - timeout > 30000) {
                    while (true) {
                        basic.showString("Init of AI-Lens failed")
                    }
                }
            }
        }

        setRecognition(item: ETrecognition): void {
            this.ITEM = item
            let buff = pins.i2cReadBuffer(CameraAddr, 9)
            buff[0] = 0x20
            buff[1] = item
            pins.i2cWriteBuffer(CameraAddr, buff)
        }

        fetch(): void {
            this.DataBuffer = pins.i2cReadBuffer(CameraAddr, 9)
            basic.pause(30)
        }

        readCount(): number {
            if (this.DataBuffer[0] != this.ITEM)
                return 0
            return this.DataBuffer[7]
        }

        readID(): number {
            return this.DataBuffer[8]
        }

        readConfidence(): number {
            return 100 - this.DataBuffer[6]
        }

        readPosX(): number {
            return this.DataBuffer[2]
        }

        readPosY(): number {
            return this.DataBuffer[3]
        }

        readSize(): number {
            return this.DataBuffer[4]
        }

        readColor(): ETcolor {
            switch (this.DataBuffer[1]) {
                case 0: return ETcolor.Red;
                case 1: return ETcolor.Green;
                case 2: return ETcolor.Blue;
                case 3: return ETcolor.Yellow;
                case 4: return ETcolor.Black;
                case 5: return ETcolor.Orange;
                case 6: return ETcolor.White;
            }
            return ETcolor.Black
        }

        isColor(color: ETcolor): boolean {
            switch (color) {
                case ETcolor.Red: return (this.DataBuffer[1] == 0)
                case ETcolor.Green: return (this.DataBuffer[1] == 1)
                case ETcolor.Blue: return (this.DataBuffer[1] == 2)
                case ETcolor.Yellow: return (this.DataBuffer[1] == 3)
                case ETcolor.Black: return (this.DataBuffer[1] == 4)
                case ETcolor.Orange: return (this.DataBuffer[1] == 5)
                case ETcolor.White: return (this.DataBuffer[1] == 6)
            }
            return false
        }
    }

    export function create(): Device {
        let device = new Device()
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

//////////////////////
//  INCLUDE         //
//  et-ledstrip.ts  //
//////////////////////

enum NeopixelMode {
    GRB = 1,
    RGBW = 2,
    RGB = 3
}

namespace EtLedstrip {

    export class Device {

        pin: DigitalPin
        max: number
        mode: NeopixelMode
        buffer: Buffer
        size: number
        bright: number = 10

        constructor(pin: DigitalPin, leds: number, mode: NeopixelMode) {
            this.pin = pin
            this.max = leds - 1
            this.mode = mode
            this.size = leds * (mode == NeopixelMode.RGBW ? 4 : 3)
            this.buffer = pins.createBuffer(this.size)
        }

        show() {
            light.sendWS2812Buffer(this.buffer, this.pin)
        }

        setPixelRGB(offset: number, red: number, green: number, blue: number, white: number = 0): void {
            offset *= (this.mode == NeopixelMode.RGBW ? 4 : 3)
            switch (this.mode) {
                case NeopixelMode.GRB:
                    this.buffer[offset + 0] = Math.floor(green * this.bright / 100)
                    this.buffer[offset + 1] = Math.floor(red * this.bright / 100)
                    this.buffer[offset + 2] = Math.floor(blue * this.bright / 100)
                    break;
                case NeopixelMode.RGB:
                    this.buffer[offset + 0] = Math.floor(red * this.bright / 100)
                    this.buffer[offset + 1] = Math.floor(green * this.bright / 100)
                    this.buffer[offset + 2] = Math.floor(blue * this.bright / 100)
                    break;
                case NeopixelMode.RGBW:
                    this.buffer[offset + 0] = Math.floor(red * this.bright / 100)
                    this.buffer[offset + 1] = Math.floor(green * this.bright / 100)
                    this.buffer[offset + 2] = Math.floor(blue * this.bright / 100)
                    this.buffer[offset + 3] = Math.floor(white * this.bright / 100)
                    break;
            }
        }

        setPixelColor(pixel: number, color: ETcolor, white: number = 0): void {
            if (pixel < 0 || pixel >= 8)
                return
            let rgb = etFromColor(color)
            let red = (rgb >> 16) & 0xFF
            let green = (rgb >> 8) & 0xFF
            let blue = (rgb) & 0xFF
            this.setPixelRGB(pixel, red, green, blue, white)
        }

        setRGB(red: number, green: number, blue: number, white: number = 0) {
            for (let i = 0; i < 8; ++i)
                this.setPixelRGB(i, red, green, blue, white)
        }

        setColor(color: ETcolor, white: number = 0) {
            let rgb = etFromColor(color)
            let red = (rgb >> 16) & 0xFF
            let green = (rgb >> 8) & 0xFF
            let blue = (rgb) & 0xFF
            for (let i = 0; i < 8; ++i)
                this.setPixelRGB(i, red, green, blue, white)
        }

        setClear(): void {
            this.buffer.fill(0, 0, this.size)
        }

        setBrightness(brightness: number) {
            if (brightness < 0) brightness = 0
            if (brightness > 100) brightness = 100
            // small steps at low brightness and big steps at high brightness
            brightness = (brightness ^ 2 / 100)
            this.bright = brightness
        }

        setRotate(rotation: ETrotate): void {
            let offset = (this.mode == NeopixelMode.RGBW ? 4 : 3)
            if (rotation == ETrotate.Clockwise)
                this.buffer.rotate(-offset, 0, this.size)
            else
                this.buffer.rotate(offset, 0, this.size)
        }

        rainbow(rotation: ETrotate, pace: ETpace = ETpace.Normal) {
            if (rotation == ETrotate.Clockwise) {
                this.setPixelColor(0, ETcolor.Red)
                this.setPixelColor(1, ETcolor.Orange)
                this.setPixelColor(2, ETcolor.Yellow)
                this.setPixelColor(3, ETcolor.Green)
                this.setPixelColor(4, ETcolor.Blue)
                this.setPixelColor(5, ETcolor.Indigo)
                this.setPixelColor(6, ETcolor.Violet)
                this.setPixelColor(7, ETcolor.Purple)
            }
            else {
                this.setPixelColor(7, ETcolor.Red)
                this.setPixelColor(6, ETcolor.Orange)
                this.setPixelColor(5, ETcolor.Yellow)
                this.setPixelColor(4, ETcolor.Green)
                this.setPixelColor(3, ETcolor.Blue)
                this.setPixelColor(2, ETcolor.Indigo)
                this.setPixelColor(1, ETcolor.Violet)
                this.setPixelColor(0, ETcolor.Purple)
            }
            this.show()
            basic.pause(pace)
            pace = (pace + 1) * 75
            for (let i = 0; i < this.max; i++) {
                this.setRotate(rotation)
                this.show()
                basic.pause(pace)
            }
        }

        snake(color: ETcolor, rotation: ETrotate, pace: ETpace = ETpace.Normal) {
            let rgb = etFromColor(color)
            let red = (rgb >> 16) & 0xFF
            let green = (rgb >> 8) & 0xFF
            let blue = (rgb) & 0xFF
            this.setClear()
            this.show()
            pace = (pace + 1) * 75
            for (let i = this.max; i >= 0; i--) {
                if (rotation == ETrotate.Clockwise)
                    this.setPixelRGB(this.max - i, red, green, blue)
                else
                    this.setPixelRGB(i, red, green, blue)
                this.show()
                basic.pause(pace)
            }
            this.show()
            for (let i = this.max - 1; i >= 0; i--) {
                if (rotation == ETrotate.Clockwise)
                    this.setPixelRGB(this.max - i, 0, 0, 0)
                else
                    this.setPixelRGB(i, 0, 0, 0)
                this.show()
                basic.pause(pace)
            }
            if (rotation == ETrotate.Clockwise)
                this.setPixelRGB(0, 0, 0, 0)
            else
                this.setPixelRGB(this.max, 0, 0, 0)
            this.show()
            basic.pause(pace)
        }
    }

    export function create(pin: DigitalPin, leds: number, mode: NeopixelMode = NeopixelMode.GRB): Device {
        let device = new Device(pin, leds, mode)
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

//////////////////
//  INCLUDE     //
//  etmatch.ts  //
//////////////////

const ET_MATCHID = "MA"

const ET_START = "sta"
const ET_STOP = "sto"
const ET_PAUSE = "pau"
const ET_POINT = "poi"
const ET_PENALTY = "pen" // penalty point

enum ETmatchStatus {
    Stopped,
    Playing,
    Paused,
}
let ETmatch = ETmatchStatus.Stopped

enum ETmatchPosition {
    //% block="in the field"
    //% block.loc.nl="in het veld"
    InField,
    //% block="on the border"
    //% block.loc.nl="op de lijn"
    OnBorder,
    //% block="outside the field"
    //% block.loc.nl="buiten het veld"
    OutsideField,
}
let ETplayerPosition = ETmatchPosition.InField

interface ETmatchPlayer {
    points: number
}
let ETmatchPlayers: { [player: string]: ETmatchPlayer } = {} // interface to all players
let ETplayers: string[] = [] // list of all players
let ETplayer = ""            // current player

let etMatchPositionHandler: () => ETmatchPosition
let etMatchInFieldHandler: () => void
let etMatchOnBorderHandler: () => void
let etMatchOutsideFieldHandler: () => void

let etMatchStopHandler: () => void
let etMatchPointHandler: (points: number) => void
let etMatchWinnerHandler: () => void

function etMatchStart() {
    ETmatch = ETmatchStatus.Playing // activates playing in basic.forever
}
etinput.registerStartHandler(etMatchStart)

function etMatchStop() {
    ETmatch = ETmatchStatus.Stopped // deactivate playing in basic.forever
    if (etMatchStopHandler) etMatchStopHandler() // must be registered by extensions
}
etinput.registerStopHandler(etMatchStop)

function etMatchMessageHandler(message: string) {
    let command = ""
    let player = ""
    let ix = message.indexOf(":")
    if (ix < 0) {
        command = message
    }
    else {
        command = message.substr(0, ix)
        player = message.substr(ix + 1)
        if (!ETmatchPlayers[player]) {
            // subscribe player
            ETplayers.push(player)
            ETmatchPlayers[player] = { points: 0 }
        }
    }

    if (command == ET_START) {
        etMatchStart()
    }

    if (command == ET_PAUSE) {
        ETmatch = ETmatchStatus.Paused
        if (etMatchStopHandler) etMatchStopHandler() // must be registered by extensions
    }

    if (command == ET_STOP) {
        etMatchStop()

        // celebrate the winner
        if (etMatchWinnerHandler) {
            let winner: string[] = []
            let current: string
            let hipoints = 0
            for (let ix = 0; ix < ETplayers.length; ix++) {
                current = ETplayers[ix]
                if (!ETmatchPlayers[current]) continue
                if (ETmatchPlayers[current].points > hipoints) {
                    winner = []
                    hipoints = ETmatchPlayers[current].points
                }
                if (ETmatchPlayers[current].points === hipoints)
                    winner.push(current)
            }
            for (let ix = 0; ix < winner.length; ix++)
                if (winner[ix] === ETplayer) {
                    etMatchWinnerHandler()
                    break
                }
        }
        // clear all points
        for (let ix = 0; ix < ETplayers.length; ix++)
            if (ETmatchPlayers[ETplayers[ix]])
                ETmatchPlayers[ETplayers[ix]].points = 0
    }

    if (command == ET_POINT) {
        ETmatch = ETmatchStatus.Paused
        // count and celebrate the point
        if (ETmatchPlayers[player]) {
            ETmatchPlayers[player].points += 1
            // player extension has (ETplayer == "<player id>")
            // arbiter app has (ETplayer == "")
            if ((ETplayer == player || ETplayer == "") && etMatchPointHandler)
                etMatchPointHandler(ETmatchPlayers[player].points)
        }
    }

    if (command == ET_PENALTY) {
        if (ETmatchPlayers[player] && (ETmatchPlayers[player].points > 0)) {
            ETmatchPlayers[player].points -= 1
            if ((player == ETplayer || ETplayer == "") && etMatchPointHandler)
                etMatchPointHandler(ETmatchPlayers[player].points)
        }
    }
}
etradio.registerMessageHandler(ET_MATCHID, etMatchMessageHandler)

basic.forever(function () {
    if (ETmatch != ETmatchStatus.Playing) return
    if (!etMatchPositionHandler) return

    switch (etMatchPositionHandler()) {
        case ETmatchPosition.InField:
            if (etMatchInFieldHandler) etMatchInFieldHandler()
            break
        case ETmatchPosition.OnBorder:
            if (etMatchOnBorderHandler) etMatchOnBorderHandler()
            break
        case ETmatchPosition.OutsideField:
            etMatchStop()
            if (etMatchOutsideFieldHandler) etMatchOutsideFieldHandler()
            break
    }
})

//% color="#00CC00" icon="\uf091"
//% block="Match"
//% block.loc.nl="Wedstrijd"
namespace etmatch {

    export function isPlaying(): boolean {
        return (ETmatch === ETmatchStatus.Playing)
    }

    export function isPaused(): boolean {
        return (ETmatch === ETmatchStatus.Paused)
    }

    export function isStopped(): boolean {
        return (ETmatch === ETmatchStatus.Stopped)
    }

    export function start() {
        etradio.send(ET_MATCHID, ET_START)
        etMatchStart()
    }

    export function pause() {
        etradio.send(ET_MATCHID, ET_PAUSE)
        ETmatch = ETmatchStatus.Paused
    }

    export function stop() {
        etradio.send(ET_MATCHID, ET_STOP)
        etMatchStop()
    }

    export function point(player: string) {
        etradio.send(ET_MATCHID, ET_POINT + ":" + player)
        if (ETmatchPlayers[player])
            ETmatchPlayers[player].points += 1
        if (etMatchPointHandler) etMatchPointHandler(ETmatchPlayers[player].points)
    }

    export function penaltyPoint(player: string) {
        etradio.send(ET_MATCHID, ET_PENALTY + ":" + player)
        if (ETmatchPlayers[player] && (ETmatchPlayers[player].points > 0))
            ETmatchPlayers[player].points -= 1
        if (etMatchPointHandler) etMatchPointHandler(ETmatchPlayers[player].points)
    }

    //% block="player position"
    //% block.loc.nl="speler positie"
    export function readPosition() {
        if (etMatchPositionHandler)
            return etMatchPositionHandler()
        return ETmatchPosition.OutsideField
    }

    //% block="this is player %player"
    //% block.loc.nl="dit is speler %player"
    export function isPlayer(player: string): boolean {
        return (ETplayer === player)
    }

    //% block="subscribe player %player"
    //% block.loc.nl="schrijf speler %player in"
    export function subscribe(player: string) {
        ETplayer = player
        if (!ETmatchPlayers[player]) {
            ETplayers.push(player)
            ETmatchPlayers[player] = { points: 0 }
        }
    }

    //% color="#802080"
    //% block="code for celebrating the winning"
    //% block.loc.nl="code om het winnen te vieren"
    export function onWinner(code: () => void): void {
        etMatchWinnerHandler = code
    }

    //% color="#802080"
    //% block="code for celebrating a point"
    //% block.loc.nl="code om een punt te vieren"
    export function onPoint(code: (points: number) => void) {
        etMatchPointHandler = code
    }

    //% color="#802080"
    //% block="when on the border, do"
    //% block.loc.nl="wanneer op de lijn, doe"
    export function onOnBorder(code: () => void) {
        etMatchOnBorderHandler = code
    }

    //% color="#802080"
    //% block="when in the field, do"
    //% block.loc.nl="wanneer in het veld, doe"
    export function onInField(code: () => void) {
        etMatchInFieldHandler = code
    }

    // registering should be done by the extension
    // the routine must stop all moving parts of a model
    export function registerStopHandler(handler: () => void) {
        etMatchStopHandler = handler
    }

    // registering should be done by the extension
    // the routine must return the buggy position (in field, on border, outside field)
    export function registerPositionHandler(handler: () => ETmatchPosition) {
        etMatchPositionHandler = handler
    }

    // registering may be done by the extension
    // the routine should inform about the outside field fact
    export function registerOutsideFieldHandler(handler: () => void) {
        etMatchOutsideFieldHandler = handler
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

/////////////////
// EXTENSION   //
// etsoccer.ts //
/////////////////

let ETledring = EtLedstrip.create(RJ.digitalPin(RJPort.J1, RJLine.L1), 8)
let ETailens = PxAILens.create()

etmatch.registerPositionHandler(EtBuggy.readFieldPos as () => number)

function etStop() {
    EtBuggy.stop()
    EtSoccer.openGripper()
}
etmatch.registerStopHandler(etStop)

function etOutsideField() {
    ETledring.setColor(ETcolor.Red)
    ETledring.show()
}
etmatch.registerOutsideFieldHandler(etOutsideField)

//% color="#00CC00" icon="\uf1e3"
//% block="Soccer"
//% block.loc.nl="Voetbal"
namespace EtSoccer {
    let oppHeading = EtBuggy.readHeading()
    let tmPossess = 0
    let tmProhibit = 0
    let gripperOpen = true
    let onBorder = false

    export function openGripper() {
        if (gripperOpen) return
        gripperOpen = true
        EtBuggy.turnServo(45, ETmoveZ.Down)
        EtBuggy.coastServo()
    }

    export function closeGripper() {
        if (!gripperOpen) return
        gripperOpen = false
        EtBuggy.turnServo(45, ETmoveZ.Up)
    }

    basic.forever(function () {
        onBorder = EtBuggy.isFieldPos(ETfield.OnBorder)
        if (tmPossess && (tmPossess < control.millis())) {
            openGripper()
            tmPossess = 0
            tmProhibit = control.millis() + 5000 // disable possessBall routine
        }
        if (tmProhibit && (tmProhibit < control.millis()))
            tmProhibit = 0 // enable possessBall routine
    })

    //% subcategory="Bewegen"
    //% block="attack"
    //% block.loc.nl="val aan"
    export function attack() {
        if (!etmatch.isPlaying() || onBorder) return
        EtBuggy.drive(ETmoveY.Forward, 50)
        let tm = control.millis() + 5000
        while (EtBuggy.isFieldPos(ETfield.InField) && (tm > control.millis())) {
            if (!etmatch.isPlaying()) return
            basic.pause(1)
        }
        EtBuggy.stop()
    }

    //% subcategory="Bewegen"
    //% block="turn to the start direction"
    //% block.loc.nl="draai in de startrichting"
    export function turnToOpponent() {
        if (!etmatch.isPlaying() || onBorder) return
        EtBuggy.bend(ETturn.Left, 100)
        EtBuggy.drive(ETmoveY.Forward, 30)
        let tm = control.millis() + 5000
        while (!EtBuggy.isHeading(oppHeading) && (tm > control.millis())) {
            if (!etmatch.isPlaying()) return
            basic.pause(1)
        }
        EtBuggy.straight()
        EtBuggy.stop()
    }

    //% subcategory="Bewegen"
    //% block="run to the ball"
    //% block.loc.nl="rijd naar de bal"
    export function approachBall() {
        if (!etmatch.isPlaying() || onBorder) return
        let x, y: number
        ETailens.setRecognition(ETrecognition.Ball)
        let tm = control.millis() + 500
        EtBuggy.straight()
        EtBuggy.drive(ETmoveY.Forward, 30)
        do {
            if (!etmatch.isPlaying() || onBorder) return
            ETailens.fetch()
            x = ETailens.readPosX()
            if (x) {
                x -= 145
                EtBuggy.bend(x < 0 ? ETturn.Left : ETturn.Right,
                    Math.map(Math.abs(x), 0, 100, 0, 30))
            }
            else
                EtBuggy.straight()
            y = ETailens.readPosY()
            if (y > 80)
                tm = control.millis() + 500
            if (tm < control.millis())
                break
            basic.pause(1)
        } while (y == 0 || y > 85)
        EtBuggy.straight()
        EtBuggy.stop()
    }

    //% subcategory="Bewegen"
    //% block="back to the field"
    //% block.loc.nl="terug het veld in"
    export function returnToField() {
        if (!etmatch.isPlaying()) return
        openGripper()
        EtBuggy.straight()
        EtBuggy.drive(ETmoveY.Backward, 50)
        basic.pause(1000)
        EtBuggy.stop()
    }

    //% color="#00CC00"
    //% block="has found the ball"
    //% block.loc.nl="heeft de bal gevonden"
    export function foundBall(): boolean {
        ETailens.setRecognition(ETrecognition.Ball)
        ETailens.fetch()
        return (ETailens.readCount() > 0)
    }

    function runRandom() {
        EtBuggy.straight()
        EtBuggy.drive(ETmoveY.Forward, 50)
        let tm = control.millis() + etbasic.randomInt(3, 6) * 100
        while (tm > control.millis()) {
            if (!etmatch.isPlaying() || onBorder) break
            basic.pause(1)
        }
        EtBuggy.stop()
    }

    function search(): boolean {
        EtBuggy.bend(ETturn.Left, 100)
        EtBuggy.drive(ETmoveY.Forward, 15)
        let hd = EtBuggy.readHeading() + 22.5
        if (hd >= 360) hd -= 360
        do {
            if (!etmatch.isPlaying() || onBorder) break
            ETailens.fetch()
            basic.pause(1)
            if (ETailens.readCount()) return true
        } while (hd != EtBuggy.readHeading())
        return false
    }

    //% subcategory="Bewegen"
    //% block="turn to the ball"
    //% block.loc.nl="draai richting de bal"
    export function findBall() {
        if (!etmatch.isPlaying() || onBorder) return
        ETailens.setRecognition(ETrecognition.Ball)
        let found = false
        while (!found) {
            if (!etmatch.isPlaying() || onBorder) return
            found = search()
            if (!found) runRandom()
        }
        EtBuggy.straight()
        EtBuggy.stop()
    }

    //% subcategory="Bal-controle"
    //% block="close the gripper"
    //% block.loc.nl="sluit de grijparm"
    export function closeClaw() {
        if (!etmatch.isPlaying() || onBorder) return
        if (tmProhibit) return // still disabled after previous possession
        closeGripper()
        tmPossess = control.millis() + 5000
    }

    //% subcategory="Bal-controle"
    //% block="open the gripper"
    //% block.loc.nl="open de grijparm"
    export function openClaw() {
        if (!etmatch.isPlaying()) return
        openGripper()
    }

    //% subcategory="Show"
    //% color="#FFCC44"
    //% block="tornado"
    //% block.loc.nl="tornado"
    export function tornado() {
        let on = true
        for (let speed = 10; speed < 50; speed += 5) {
            on = !on
            EtBuggy.drive(speed, -speed)
            basic.pause(200)
        }
        for (let speed = 50; speed >= 0; speed -= 5) {
            on = !on
            EtBuggy.drive(speed, -speed)
            basic.pause(200)
        }
    }

    //% subcategory="Show"
    //% color="#FFCC44"
    //% block="shake"
    //% block.loc.nl="schudden"
    export function shake() {
        for (let i = 0; i < 6; i++) {
            EtBuggy.drive(30, 30)
            basic.pause(200)
            EtBuggy.drive(-30, -30)
            basic.pause(230)
        }
        EtBuggy.drive(0, 0)
    }
}

///////////////////
// END EXTENSION //
///////////////////
