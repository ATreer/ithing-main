/**
* makecode I2C OLED 128x64 Package.
* From microbit/micropython Chinese community.
* http://www.micropython.org.cn
*/

//% weight=20 color=#0855AA icon="O" block="OLED"
namespace OLED12864_I2C {
    let font: number[] = [];
    font[0] = 0x0022d422;
    font[1] = 0x0022d422;
    font[2] = 0x0022d422;
    font[3] = 0x0022d422;
    font[4] = 0x0022d422;
    font[5] = 0x0022d422;
    font[6] = 0x0022d422;
    font[7] = 0x0022d422;
    font[8] = 0x0022d422;
    font[9] = 0x0022d422;
    font[10] = 0x0022d422;
    font[11] = 0x0022d422;
    font[12] = 0x0022d422;
    font[13] = 0x0022d422;
    font[14] = 0x0022d422;
    font[15] = 0x0022d422;
    font[16] = 0x0022d422;
    font[17] = 0x0022d422;
    font[18] = 0x0022d422;
    font[19] = 0x0022d422;
    font[20] = 0x0022d422;
    font[21] = 0x0022d422;
    font[22] = 0x0022d422;
    font[23] = 0x0022d422;
    font[24] = 0x0022d422;
    font[25] = 0x0022d422;
    font[26] = 0x0022d422;
    font[27] = 0x0022d422;
    font[28] = 0x0022d422;
    font[29] = 0x0022d422;
    font[30] = 0x0022d422;
    font[31] = 0x0022d422;
    font[32] = 0x00000000;
    font[33] = 0x000002e0;
    font[34] = 0x00018060;
    font[35] = 0x00afabea;
    font[36] = 0x00aed6ea;
    font[37] = 0x01991133;
    font[38] = 0x010556aa;
    font[39] = 0x00000060;
    font[40] = 0x000045c0;
    font[41] = 0x00003a20;
    font[42] = 0x00051140;
    font[43] = 0x00023880;
    font[44] = 0x00002200;
    font[45] = 0x00021080;
    font[46] = 0x00000100;
    font[47] = 0x00111110;
    font[48] = 0x0007462e;
    font[49] = 0x00087e40;
    font[50] = 0x000956b9;
    font[51] = 0x0005d629;
    font[52] = 0x008fa54c;
    font[53] = 0x009ad6b7;
    font[54] = 0x008ada88;
    font[55] = 0x00119531;
    font[56] = 0x00aad6aa;
    font[57] = 0x0022b6a2;
    font[58] = 0x00000140;
    font[59] = 0x00002a00;
    font[60] = 0x0008a880;
    font[61] = 0x00052940;
    font[62] = 0x00022a20;
    font[63] = 0x0022d422;
    font[64] = 0x00e4d62e;
    font[65] = 0x000f14be;
    font[66] = 0x000556bf;
    font[67] = 0x0008c62e;
    font[68] = 0x0007463f;
    font[69] = 0x0008d6bf;
    font[70] = 0x000094bf;
    font[71] = 0x00cac62e;
    font[72] = 0x000f909f;
    font[73] = 0x000047f1;
    font[74] = 0x0017c629;
    font[75] = 0x0008a89f;
    font[76] = 0x0008421f;
    font[77] = 0x01f1105f;
    font[78] = 0x01f4105f;
    font[79] = 0x0007462e;
    font[80] = 0x000114bf;
    font[81] = 0x000b6526;
    font[82] = 0x010514bf;
    font[83] = 0x0004d6b2;
    font[84] = 0x0010fc21;
    font[85] = 0x0007c20f;
    font[86] = 0x00744107;
    font[87] = 0x01f4111f;
    font[88] = 0x000d909b;
    font[89] = 0x00117041;
    font[90] = 0x0008ceb9;
    font[91] = 0x0008c7e0;
    font[92] = 0x01041041;
    font[93] = 0x000fc620;
    font[94] = 0x00010440;
    font[95] = 0x01084210;
    font[96] = 0x00000820;
    font[97] = 0x010f4a4c;
    font[98] = 0x0004529f;
    font[99] = 0x00094a4c;
    font[100] = 0x000fd288;
    font[101] = 0x000956ae;
    font[102] = 0x000097c4;
    font[103] = 0x0007d6a2;
    font[104] = 0x000c109f;
    font[105] = 0x000003a0;
    font[106] = 0x0006c200;
    font[107] = 0x0008289f;
    font[108] = 0x000841e0;
    font[109] = 0x01e1105e;
    font[110] = 0x000e085e;
    font[111] = 0x00064a4c;
    font[112] = 0x0002295e;
    font[113] = 0x000f2944;
    font[114] = 0x0001085c;
    font[115] = 0x00012a90;
    font[116] = 0x010a51e0;
    font[117] = 0x010f420e;
    font[118] = 0x00644106;
    font[119] = 0x01e8221e;
    font[120] = 0x00093192;
    font[121] = 0x00222292;
    font[122] = 0x00095b52;
    font[123] = 0x0008fc80;
    font[124] = 0x000003e0;
    font[125] = 0x000013f1;
    font[126] = 0x00841080;
    font[127] = 0x0022d422;

    let _I2CAddr = 60;
    let _screen = pins.createBuffer(1025);
    let _buf2 = pins.createBuffer(2);


    function cmd1(d: number) {
        _buf2[0] = 0x80;
        _buf2[1] = d;
        pins.i2cWriteBuffer(_I2CAddr, _buf2);
    }

    function set_pos(col: number = 0, page: number = 0) {
        cmd1(0xb0 | page) // page number
        cmd1(0x00 | (col % 16)) // lower start column address
        cmd1(0x10 | (col >> 4)) // upper start column address    
    }

    // clear bit
    function clrbit(d: number, b: number): number {
        if (d & (1 << b))
            d -= (1 << b)
        return d
    }

    /**
     * set pixel in OLED
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param color is dot color, eg: 1
     */
    //% blockId="OLED12864_I2C_PIXEL" block="set pixel at x %x|y %y|color %color"
    //% weight=70 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function pixel(x: number, y: number, color: number = 1) {
        let page = y >> 3
        let shift_page = y % 8
        let ind = x + page * 128 + 1
        let b = (color) ? (_screen[ind] | (1 << shift_page)) : clrbit(_screen[ind], shift_page)
        _screen[ind] = b
        set_pos(x, page)

        _buf2[0] = 0x40
        _buf2[1] = b
        pins.i2cWriteBuffer(_I2CAddr, _buf2)
    }

    /**
     * show text in OLED
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param s is the text will be show, eg: 'Hello!'
     * @param color is string color, eg: 1
     */
    //% blockId="OLED12864_I2C_SHOWSTRING" block="show string at x %x|y %y|text %s|color %color"
    //% weight=80 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function showString(x: number, y: number, s: string, color: number = 1) {
        let col = 0
        let p = 0
        let ind = 0
        for (let n = 0; n < s.length; n++) {
            p = font[s.charCodeAt(n)]
            console.log("s:" + s)
            console.log("s.charCodeAt(n):" + s.charCodeAt(n))
            for (let i = 0; i < 5; i++) {
                col = 0
                for (let j = 0; j < 5; j++) {
                    if (p & (1 << (5 * i + j)))
                        col |= (1 << (j +
                            1))
                }
                ind = (x + n) * 5 + (y >> 3) * 128 + i + 1;
                if (color == 0)
                    col = 255 - col
                _screen[ind] = col
            }
        }
        set_pos(x, (y >> 3))
        let ind0 = x * 5 + (y >> 3) * 128

        let buf = _screen.slice(ind0, ind + 1)
        buf[0] = 0x40
        pins.i2cWriteBuffer(_I2CAddr, buf)


    }


    /**
     * show text in OLED
     * @param x0 is X alis, eg: 0
     * @param y0 is Y alis, eg: 0
     * @param r is the text will be show, eg: 'Hello!'
     * @param color is string color, eg: 1
     */
    //% blockId="OLED12864_I2C_Circle" block="show string at x0 %x0|y0 %y0|r %r|color %color"
    //% weight=80 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function drawCircle(x0: number, y0: number, r: number, color: number) {
        let f = 1 - r;
        let ddF_x = 1;
        let ddF_y = -2 * r;
        let x = 0;
        let y = r;

        pixel(x0, y0 + r, color);
        pixel(x0, y0 - r, color);
        pixel(x0 + r, y0, color);
        pixel(x0 - r, y0, color);

        while (x < y) {
            if (f >= 0) {
                y--;
                ddF_y += 2;
                f += ddF_y;
            }
            x++;
            ddF_x += 2;
            f += ddF_x;

            pixel(x0 + x, y0 + y, color);
            pixel(x0 - x, y0 + y, color);
            pixel(x0 + x, y0 - y, color);
            pixel(x0 - x, y0 - y, color);
            pixel(x0 + y, y0 + x, color);
            pixel(x0 - y, y0 + x, color);
            pixel(x0 + y, y0 - x, color);
            pixel(x0 - y, y0 - x, color);
        }
    }
    /**
     * show a number in OLED
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param num is the number will be show, eg: 12
     * @param color is number color, eg: 1
     */
    //% blockId="OLED12864_I2C_NUMBER" block="show a Number at x %x|y %y|number %num|color %color"
    //% weight=80 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function showNumber(x: number, y: number, num: number, color: number = 1) {
        showString(x, y, num.toString(), color)
    }

    /**
     * draw a horizontal line
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param len is the length of line, eg: 10
     * @param color is line color, eg: 1
     */
    //% blockId="OLED12864_I2C_HLINE" block="draw a horizontal line at x %x|y %y|number %len|color %color"
    //% weight=71 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function hline(x: number, y: number, len: number, color: number = 1) {
        for (let i = x; i < (x + len); i++)
            pixel(i, y, color)
    }

    /**
     * draw a vertical line
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param len is the length of line, eg: 10
     * @param color is line color, eg: 1
     */
    //% blockId="OLED12864_I2C_VLINE" block="draw a vertical line at x %x|y %y|number %len|color %color"
    //% weight=72 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function vline(x: number, y: number, len: number, color: number = 1) {
        for (let i = y; i < (y + len); i++)
            pixel(x, i, color)
    }

    /**
     * draw a rectangle
     * @param x1 is X alis, eg: 0
     * @param y1 is Y alis, eg: 0
     * @param x2 is X alis, eg: 60
     * @param y2 is Y alis, eg: 30
     * @param color is line color, eg: 1
     */
    //% blockId="OLED12864_I2C_RECT" block="draw a rectangle at x1 %x1|y1 %y1|x2 %x2|y2 %y2|color %color"
    //% weight=73 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function rect(x1: number, y1: number, x2: number, y2: number, color: number = 1) {
        if (x1 > x2)
            x1 = [x2, x2 = x1][0];
        if (y1 > y2)
            y1 = [y2, y2 = y1][0];
        hline(x1, y1, x2 - x1 + 1, color)
        hline(x1, y2, x2 - x1 + 1, color)
        vline(x1, y1, y2 - y1 + 1, color)
        vline(x2, y1, y2 - y1 + 1, color)
    }

    /**
     * invert display
     * @param d true: invert / false: normal, eg: true
     */
    //% blockId="OLED12864_I2C_INVERT" block="invert display %d"
    //% weight=65 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function invert(d: boolean = true) {
        let n = (d) ? 0xA7 : 0xA6
        cmd1(n)
    }

    /**
     * draw / redraw screen
     */
    //% blockId="OLED12864_I2C_DRAW" block="draw"
    //% weight=64 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function draw() {

        for (let i = 0; i < 8; i++) {
            set_pos(0, i)
            let buf = _screen.slice(i * 128 + 1, 128)
            pins.i2cWriteBuffer(_I2CAddr, _screen)
        }

    }

    /**
     * clear screen
     */
    //% blockId="OLED12864_I2C_CLEAR" block="clear"
    //% weight=63 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function clear() {
        _screen.fill(0)
        _screen[0] = 0x40
        draw()
    }

    /**
     * turn on screen
     */
    //% blockId="OLED12864_I2C_ON" block="turn on"
    //% weight=62 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function on() {
        cmd1(0xAF)
    }

    /**
     * turn off screen
     */
    //% blockId="OLED12864_I2C_OFF" block="turn off"
    //% weight=61 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function off() {
        cmd1(0xAE)
    }

    /**
     * OLED initialize
     */
    //% blockId="OLED12864_I2C_init" block="init OLED"
    //% weight=100 blockGap=8
    //% parts=OLED12864_I2C trackArgs=0
    export function init() {

        cmd1(0xAE)//--display off
        cmd1(0x00)//---set low column address
        cmd1(0x10)//---set high column address
        cmd1(0x40)//--set start line address  
        cmd1(0xB0)//--set page address
        cmd1(0x81) // contract control
        cmd1(0xFF)//--128   
        cmd1(0xA1)//set segment remap 
        cmd1(0xA6)//--normal / reverse
        cmd1(0xA8)//--set multiplex ratio(1 to 64)
        cmd1(0x3F)//--1/32 duty
        cmd1(0xC8)//Com scan direction
        cmd1(0xD3)//-set display offset
        cmd1(0x00)//
        cmd1(0xD5)//set osc division
        cmd1(0x80)//
        cmd1(0xD8)//set area color mode off
        cmd1(0x05)//
        cmd1(0xD9)//Set Pre-Charge Period
        cmd1(0xF1)//
        cmd1(0xDA)//set com pin configuartion
        cmd1(0x12)//
        cmd1(0xDB)//set Vcomh
        cmd1(0x30)//
        cmd1(0x8D)//set charge pump enable
        cmd1(0x14)//
        cmd1(0xAF)//--turn on oled panel
        clear()
    }
}

/**
 * 超声波模块
 */
//% weight=100 color=#00278D icon="\uf124" block="超声波"
//% 
namespace UltrasonicPac {
    /**
    * 获取超声波实时距离 (厘米)
    * @param echo 超声波echo信号
    * @param trig 超声波trig信号
    */
    //% weight=97 blockId=Ultrasonic block="超声波距离(ECHO %echo|TRIG %trig)"
    //% group="超声波传感器"
       export function Ultrasonic(echo: DigitalPin, trig: DigitalPin): number {
           //init pins
       let echoPin:DigitalPin = echo;
       let trigPin:DigitalPin = trig;
       pins.setPull(echoPin, PinPullMode.PullNone);
       pins.setPull(trigPin, PinPullMode.PullNone);
               
       // send pulse
       pins.digitalWritePin(trigPin, 0);
       control.waitMicros(2);
       pins.digitalWritePin(trigPin, 1);
       control.waitMicros(10);
       pins.digitalWritePin(trigPin, 0);
       control.waitMicros(2);
       // read pulse
       let d = pins.pulseIn(echoPin, PulseValue.High, 11600);
       return Math.ceil(d/58);
       }
    
    }
/**
 * 安芯教育图形包.
 */

/**
 * 安芯教育图形块
 */
//% weight=100 color=#50A820 icon="\uf162" block="数码管"

namespace anxinSegPac {
    let TM1637_CMD1 = 0x40;
    let TM1637_CMD2 = 0xC0;
    let TM1637_CMD3 = 0x80;
    let _SEGMENTS = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71];

    /**
     * TM1637 LED display
     */
    export class TM1637LEDs {
        buf: Buffer;
        clk: DigitalPin;
        dio: DigitalPin;
        _ON: number;
        brightness: number;
        count: number;  // number of LEDs

        /**
         * initial TM1637
         */
        init(): void {
            pins.digitalWritePin(this.clk, 0);
            pins.digitalWritePin(this.dio, 0);
            this._ON = 8;
            this.buf = pins.createBuffer(this.count);
            this.clear();
        }

        /**
         * Start 
         */
        _start() {
            pins.digitalWritePin(this.dio, 0);
            pins.digitalWritePin(this.clk, 0);
        }

        /**
         * Stop
         */
        _stop() {
            pins.digitalWritePin(this.dio, 0);
            pins.digitalWritePin(this.clk, 1);
            pins.digitalWritePin(this.dio, 1);
        }

        /**
         * send command1
         */
        _write_data_cmd() {
            this._start();
            this._write_byte(TM1637_CMD1);
            this._stop();
        }

        /**
         * send command3
         */
        _write_dsp_ctrl() {
            this._start();
            this._write_byte(TM1637_CMD3 | this._ON | this.brightness);
            this._stop();
        }

        /**
         * send a byte to 2-wire interface
         */
        _write_byte(b: number) {
            for (let i = 0; i < 8; i++) {
                pins.digitalWritePin(this.dio, (b >> i) & 1);
                pins.digitalWritePin(this.clk, 1);
                pins.digitalWritePin(this.clk, 0);
            }
            pins.digitalWritePin(this.clk, 1);
            pins.digitalWritePin(this.clk, 0);
        }

        /**
         * 设置数码管亮度, 范围是 [0-8], 0 表明关闭.
         * @param val 数码管的亮度值, eg: 7
         */
        //% blockId="TM1637_set_intensity" block="%tm|设置亮度为 %val"
        //% weight=82 blockGap=8
        //% parts="TM1637"
		//% color="#50A820"
		//% group="数码管显示"
        intensity(val: number = 7) {
            if (val < 1) {
                this.off();
                return;
            }
            if (val > 8) val = 8;
            this._ON = 8;
            this.brightness = val - 1;
            this._write_data_cmd();
            this._write_dsp_ctrl();
        }

        /**
         * set data to TM1637, with given bit
         */
        _dat(bit: number, dat: number) {
            this._write_data_cmd();
            this._start();
            this._write_byte(TM1637_CMD2 | (bit % this.count))
            this._write_byte(dat);
            this._stop();
            this._write_dsp_ctrl();
        }

        /**
         * 在指定位置显示数字. 
         * @param num 要显示的数字, eg: 5
         * @param bit 显示的位置, eg: 0
         */
        //% blockId="TM1637_showbit" block="%tm|显示数字 %num |在 %bit"
        //% weight=89 blockGap=8
        //% parts="TM1637"
		//% color="#50A820"
		//% group="数码管显示"
        showbit(num: number = 5, bit: number = 0) {
            this.buf[bit % this.count] = _SEGMENTS[num % 16]
            this._dat(bit, _SEGMENTS[num % 16])
        }

        /**
          * 显示数字. 
          * @param num 数字, eg: 0
          */
        //% blockId="TM1637_shownum" block="%tm|显示数字 %num"
        //% weight=89 blockGap=8
        //% parts="TM1637"
		//% color="#50A820"
		//% group="数码管显示"
        showNumber(num: number) {
            if (num < 0) {
                this._dat(0, 0x40) // '-'
                num = -num
            }
            else
                this.showbit(Math.idiv(num, 1000) % 10)
            this.showbit(num % 10, 3)
            this.showbit(Math.idiv(num, 10) % 10, 2)
            this.showbit(Math.idiv(num, 100) % 10, 1)
        }

        /**
          * 显示十六进制数. 
          * @param num 是一个十六进制数, eg: 0
          */
        //% blockId="TM1637_showhex" block="%tm|显示十六进制数 %num"
        //% weight=82 blockGap=8
        //% parts="TM1637"
		//% color="#50A820"
		//% group="数码管显示"
        showHex(num: number) {
            if (num < 0) {
                this._dat(0, 0x40) // '-'
                num = -num
            }
            else
                this.showbit((num >> 12) % 16)
            this.showbit(num % 16, 3)
            this.showbit((num >> 4) % 16, 2)
            this.showbit((num >> 8) % 16, 1)
        }

        /**
         * 显示或者隐藏小数点 
         * @param bit 是小数点位置, eg: 1
         * @param show 是否显示, eg: true
         */
        //% blockId="TM1637_showDP" block="%tm|在 %bit位置的小数点|显示状态: %show"
        //% weight=83 blockGap=8
        //% parts="TM1637"
		//% color="#50A820"
		//% group="数码管显示"
        showDP(bit: number = 1, show: boolean = true) {
            bit = bit % this.count
            if (show) this._dat(bit, this.buf[bit] | 0x80)
            else this._dat(bit, this.buf[bit] & 0x7F)
        }

        /**
         * 显示为0. 
         */
        //% blockId="TM1637_clear" block="%tm 显示为0"
        //% weight=84 blockGap=8
        //% parts="TM1637"
		//% color="#50A820"
		//% group="数码管显示"
        clear() {
            for (let i = 0; i < this.count; i++) {
                this._dat(i, 0)
                this.buf[i] = 0
            }
        }

        /**
         * 点亮数码管. 
         */
        //% blockId="TM1637_on" block="点亮数码管 %tm"
        //% weight=86 blockGap=8
        //% parts="TM1637"
		//% color="#50A820"
		//% group="数码管显示"
        on() {
            this._ON = 8;
            this._write_data_cmd();
            this._write_dsp_ctrl();
        }

        /**
         * 关闭数码管 LED. 
         */
        //% blockId="TM1637_off" block="关闭数码管 %tm"
        //% weight=85 blockGap=8
        //% parts="TM1637"
		//% color="#50A820"
		//% group="数码管显示"
        off() {
            this._ON = 0;
            this._write_data_cmd();
            this._write_dsp_ctrl();
        }
    }

    /**
     * 创建一个数码管变量.
     * @param clk 引脚CLK, eg: DigitalPin.P1
     * @param dio 引脚DIO, eg: DigitalPin.P2
     */
    //% weight=195 blockGap=8
    //% blockId="TM1637_create" block="创建数码管变量 CLK %clk|DIO %dio"
	//% color="#50A820"
	//% group="数码管显示"
    export function create(clk: DigitalPin, dio: DigitalPin): TM1637LEDs {
        let tm = new TM1637LEDs();
        tm.clk = clk;
        tm.dio = dio;
        tm.count = 4;
        tm.brightness = 8;
        tm.init();
        return tm;
    }

}

/**
 * 安芯教育图形包.
 */

enum NeoPixelColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}

/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum NeoPixelMode {
    //% block="RGB (GRB format)"
    RGB = 0,
    //% block="RGB+W"
    RGBW = 1,
    //% block="RGB (RGB format)"
    RGB_RGB = 2
}

namespace ws2812b {
    //% shim=sendBufferAsm
    export function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }
}
/**
 * 安芯教育图形块
 */
//% weight=99 color=#008fbe icon="\uf0eb" block="彩灯"
namespace anxinRGBLeds {
    /**
     * A NeoPixel strip
     */
    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _matrixWidth: number; // number of leds in a matrix - if any

        /**
         * 显示给定颜色的所有LED（r，g，b的范围为0-255）. 
         * @param rgb RGB颜色
         */
        //% blockId="neopixel_set_strip_color" block="%strip|显示颜色 %rgb=neopixel_colors" 
        //% weight=69 blockGap=8
        //% parts="neopixel"
		//% group="彩灯"
        showColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }

        /**
         * 在所有LED上显示彩虹图案. 
         * @param startHue 彩虹的起始色调值, eg: 1
         * @param endHue 彩虹的结束色调值, eg: 360
         */
        //% blockId="neopixel_set_strip_rainbow" block="%strip|从 %startHue|到 %endHue|显示彩虹图案" 
        //% weight=69 blockGap=8
        //% parts="neopixel"
		//% group="彩灯"
        showRainbow(startHue: number = 1, endHue: number = 360) {
            if (this._length <= 0) return;

            startHue = startHue >> 0;
            endHue = endHue >> 0;
            const saturation = 100;
            const luminance = 50;
            const steps = this._length;
            const direction = HueInterpolationDirection.Clockwise;

            //hue
            const h1 = startHue;
            const h2 = endHue;
            const hDistCW = ((h2 + 360) - h1) % 360;
            const hStepCW = Math.idiv((hDistCW * 100), steps);
            const hDistCCW = ((h1 + 360) - h2) % 360;
            const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
            let hStep: number;
            if (direction === HueInterpolationDirection.Clockwise) {
                hStep = hStepCW;
            } else if (direction === HueInterpolationDirection.CounterClockwise) {
                hStep = hStepCCW;
            } else {
                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
            }
            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

            //sat
            const s1 = saturation;
            const s2 = saturation;
            const sDist = s2 - s1;
            const sStep = Math.idiv(sDist, steps);
            const s1_100 = s1 * 100;

            //lum
            const l1 = luminance;
            const l2 = luminance;
            const lDist = l2 - l1;
            const lStep = Math.idiv(lDist, steps);
            const l1_100 = l1 * 100

            //interpolate
            if (steps === 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let i = 1; i < steps - 1; i++) {
                    const h = Math.idiv((h1_100 + i * hStep), 100) + 360;
                    const s = Math.idiv((s1_100 + i * sStep), 100);
                    const l = Math.idiv((l1_100 + i * lStep), 100);
                    this.setPixelColor(i, hsl(h, s, l));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }

        /**
         * 根据“value”和“high”值显示垂直条形图.
         * 如果`high`为0，则会自动调整图表.
         * @param value 要绘制的当前值
         * @param high 最大值, eg: 255
         */
        //% weight=69
        //% blockId=neopixel_show_bar_graph block="%strip|从 %value|到 %high|显示条形图" 
        //% parts="neopixel"
		//% group="彩灯"
        showBarGraph(value: number, high: number): void {
            if (high <= 0) {
                this.clear();
                this.setPixelColor(0, NeoPixelColors.Yellow);
                this.show();
                return;
            }

            value = Math.abs(value);
            const n = this._length;
            const n1 = n - 1;
            let v = Math.idiv((value * n), high);
            if (v == 0) {
                this.setPixelColor(0, 0x666600);
                for (let i = 1; i < n; ++i)
                    this.setPixelColor(i, 0);
            } else {
                for (let i = 0; i < n; ++i) {
                    if (i <= v) {
                        const b = Math.idiv(i * 255, n1);
                        this.setPixelColor(i, rgb(b, 0, 255 - b));
                    }
                    else this.setPixelColor(i, 0);
                }
            }
            this.show();
        }

        /**
         * 将LED设置为给定颜色（r，g，b的范围为0-255）. 
         * 你需要调用``显示``来使变化可见.
         * @param pixeloffset 灯带中的位置
         * @param rgb LED的RGB颜色
         */
        //% blockId="neopixel_set_pixel_color" block="%strip|设置位置 %pixeloffset|的颜色为 %rgb=neopixel_colors" 
        //% blockGap=8
        //% weight=69
        //% parts="neopixel" 
		//% group="彩灯"
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset >> 0, rgb >> 0);
        }

        /**
         * 设置矩阵形条带中的像素数
         * @param width 行个数
         */
        //% blockId=neopixel_set_matrix_width block="%strip|设置矩阵的宽度为 %width"
        //% blockGap=8
        //% weight=69
        //% parts="neopixel" 
		//% group="彩灯"
        setMatrixWidth(width: number) {
            this._matrixWidth = Math.min(this._length, width >> 0);
        }

        /**
         * 设置LED为给定的颜色(r, g, b的范围为0-255)
         * 你需要调用``显示``来使变化可见.
         * @param x 位置X
         * @param y 位置Y
         * @param rgb LED的RGB颜色
         */
        //% blockId="neopixel_set_matrix_color" block="%strip|设置灯带中 x %x|y %y|颜色为 %rgb=neopixel_colors" 
        //% weight=69
        //% parts="neopixel" 
		//% group="彩灯"
        setMatrixColor(x: number, y: number, rgb: number) {
            if (this._matrixWidth <= 0) return; // not a matrix, ignore
            x = x >> 0;
            y = y >> 0;
            rgb = rgb >> 0;
            const cols = Math.idiv(this._length, this._matrixWidth);
            if (x < 0 || x >= this._matrixWidth || y < 0 || y >= cols) return;
            let i = x + y * this._matrixWidth;
            this.setPixelColor(i, rgb);
        }
        
        /**
         * 对于带RGB + W LED的灯带，请设置白色LED亮度。 这仅适用于RGB + W 灯带.
         * @param pixeloffset 灯带中LED的位置
         * @param white LED的亮度
         */
        //% blockId="neopixel_set_pixel_white" block="%strip|设置灯带中第 %pixeloffset|个LED亮度为 %white" 
        //% blockGap=8
        //% weight=69
        //% parts="neopixel"
		//% group="彩灯"
        setPixelWhiteLED(pixeloffset: number, white: number): void {            
            if (this._mode === NeoPixelMode.RGBW) {
                this.setPixelW(pixeloffset >> 0, white >> 0);
            }
        }

        /** 
         * 将所有更改发送到条带.
         */
        //% blockId="neopixel_show" block="%strip|显示" blockGap=8
        //% weight=69
        //% parts="neopixel"
		//% group="彩灯"
        show() {
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
         * 关闭所有LED.
         * 你需要调用``显示``来使变化可见.
         */
        //% blockId="neopixel_clear" block="%strip|关闭"
        //% weight=69
        //% parts="neopixel"
		//% group="彩灯"
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * 获取条带上声明的像素数
         */
        //% blockId="neopixel_length" block="%strip|长度" blockGap=8
        //% weight=69 
		//% group="彩灯"
        length() {
            return this._length;
        }

        /**
         * 设置条带的亮度。 该标志仅适用于将来的操作.
         * @param brightness LED亮度 0-255. eg: 255
         */
        //% blockId="neopixel_set_brightness" block="%strip|设置亮度值为 %brightness" blockGap=8
        //% weight=69
        //% parts="neopixel" 
		//% group="彩灯"
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * 使用二次缓动功能将亮度应用于当前颜色.
         **/
        //% blockId="neopixel_each_brightness" block="%strip|缓解亮度" blockGap=8
        //% weight=69
        //% parts="neopixel" 
		//% group="彩灯"
        easeBrightness(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const br = this.brightness;
            const buf = this.buf;
            const end = this.start + this._length;
            const mid = Math.idiv(this._length, 2);
            for (let i = this.start; i < end; ++i) {
                const k = i - this.start;
                const ledoffset = i * stride;
                const br = k > mid
                    ? Math.idiv(255 * (this._length - 1 - k) * (this._length - 1 - k), (mid * mid))
                    : Math.idiv(255 * k * k, (mid * mid));
                serial.writeLine(k + ":" + br);
                const r = (buf[ledoffset + 0] * br) >> 8; buf[ledoffset + 0] = r;
                const g = (buf[ledoffset + 1] * br) >> 8; buf[ledoffset + 1] = g;
                const b = (buf[ledoffset + 2] * br) >> 8; buf[ledoffset + 2] = b;
                if (stride == 4) {
                    const w = (buf[ledoffset + 3] * br) >> 8; buf[ledoffset + 3] = w;
                }
            }
        }

        /** 
         * 创建灯显示范围.
         * @param start 起始位置
         * @param length 显示长度. eg: 4
         */
        //% weight=69
        //% blockId="neopixel_range" block="%strip|从 %start|显示 %length|个LED"
        //% parts="neopixel"
        //% blockSetVariable=range
		//% group="彩灯"
        range(start: number, length: number): Strip {
            start = start >> 0;
            length = length >> 0;
            let strip = new Strip();
            strip.buf = this.buf;
            strip.pin = this.pin;
            strip.brightness = this.brightness;
            strip.start = this.start + Math.clamp(0, this._length - 1, start);
            strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);
            strip._matrixWidth = 0;
            strip._mode = this._mode;
            return strip;
        }

        /**
         * 向前移动LED并用零清除.
         * 你需要调用``显示``来使变化可见.
         * @param offset 向前移动的像素数, eg: 1
         */
        //% blockId="neopixel_shift" block="%strip|向前移动的像素数为 %offset" blockGap=8
        //% weight=69
        //% parts="neopixel"
		//% group="彩灯"
        shift(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * 向前旋转LED.
         * 你需要调用``显示``来使变化可见.
         * @param offset 向前旋转的像素数, eg: 1
         */
        //% blockId="neopixel_rotate" block="%strip|向前旋转的像素数为 %offset" blockGap=8
        //% weight=69
        //% parts="neopixel"
		//% group="彩灯"
        rotate(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * 设置灯带连接的引脚，默认为P0.
         */
        //% weight=69
        //% parts="neopixel" 
		//% group="彩灯"
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * 估计当前灯配置消耗的电流（mA）.
         */
        //% weight=69 blockId=neopixel_power block="%strip|电流 (mA)"
		//% group="彩灯"
        power(): number {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const end = this.start + this._length;
            let p = 0;
            for (let i = this.start; i < end; ++i) {
                const ledoffset = i * stride;
                for (let j = 0; j < stride; ++j) {
                    p += this.buf[i + j];
                }
            }
            return Math.idiv(this.length(), 2) /* 0.5mA per neopixel */
                + Math.idiv(p * 433, 10000); /* rought approximation */
        }

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }

    /**
     * 创建一个彩灯.
     * @param pin 彩灯连接的引脚.
     * @param numleds 条带中的LED数量, eg: 24,30,60,64
     */
    //% blockId="neopixel_create" block="引脚 %pin|数量 %numleds|模式 %mode"
    //% weight=69 blockGap=8
    //% parts="neopixel"
    //% trackArgs=0,2
    //% blockSetVariable=strip
	//% group="彩灯"
    export function createPixel(pin: DigitalPin, numleds: number, mode: NeoPixelMode): Strip {
        let strip = new Strip();
        let stride = mode === NeoPixelMode.RGBW ? 4 : 3;
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = mode;
        strip._matrixWidth = 0;
        strip.setBrightness(255)
        strip.setPin(pin)
        return strip;
    }

    /**
     * 将红色，绿色，蓝色通道转换为RGB颜色
     * @param red 红色通道值 0 - 255. eg: 255
     * @param green 绿色通道值 0 - 255. eg: 255
     * @param blue 蓝色通道值 0 - 255. eg: 255
     */
    //% weight=69
    //% blockId="neopixel_rgb" block="红 %red|绿 %green|蓝 %blue"
	//% group="彩灯"
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * 获取已知颜色的RGB值
    */
    //% weight=69 blockGap=8
    //% blockId="neopixel_colors" block="%color"
	//% group="彩灯"
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

    /**
     * 将色调饱和度光度值转换为RGB颜色
     * @param h 色调 0 - 360
     * @param s 饱和度 0 - 99
     * @param l 光度 0 - 99
     */
	//% weight=69
    //% blockId=neopixelHSL block="色调 %h|饱和度 %s|光度 %l"
	//% group="彩灯"
    export function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);
        
        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h1 = Math.idiv(h, 60);//[0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c; g$ = x; b$ = 0;
        } else if (h1 == 1) {
            r$ = x; g$ = c; b$ = 0;
        } else if (h1 == 2) {
            r$ = 0; g$ = c; b$ = x;
        } else if (h1 == 3) {
            r$ = 0; g$ = x; b$ = c;
        } else if (h1 == 4) {
            r$ = x; g$ = 0; b$ = c;
        } else if (h1 == 5) {
            r$ = c; g$ = 0; b$ = x;
        }
        let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;
        return packRGB(r, g, b);
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }
}
/**
 * 安芯教育图形包.
 */

let table_B3950 = [
    999, 997, 995, 993, 991,   // -40  -  -36
    989, 986, 984, 981, 978,   // -35  -  -31
    975, 972, 969, 965, 962,   // -30  -  -26
    958, 954, 949, 945, 940,   // -25  -  -21
    935, 930, 925, 919, 914,   // -20  -  -16
    908, 901, 895, 888, 881,   // -15  -  -11
    874, 867, 859, 851, 843,   // -10  -  -6
    834, 826, 817, 808, 799,   //  -5  -  -1
    789, 780, 770, 760, 749,   //   0  -  4
    739, 728, 718, 707, 696,   //   5  -  9
    685, 673, 662, 651, 639,   //  10  -  14
    628, 616, 604, 593, 581,   //  15  -  19
    570, 558, 546, 535, 523,   //  20  -  24
    512, 501, 489, 478, 467,   //  25  -  29
    456, 445, 435, 424, 414,   //  30  -  34
    404, 394, 384, 374, 364,   //  35  -  39
    355, 346, 336, 328, 319,   //  40  -  44
    310, 302, 294, 286, 278,   //  45  -  49
    270, 263, 256, 249, 242,   //  50  -  54
    235, 228, 222, 216, 210,   //  55  -  59
    204, 198, 193, 187, 182,   //  60  -  64
    177, 172, 167, 162, 158,   //  65  -  69
    153, 149, 145, 141, 137,   //  70  -  74
    133, 129, 126, 122, 119,   //  75  -  79
    115, 112, 109, 106, 103,   //  80  -  84
    100
]

/**
 * 安芯教育图形块
 */
//% weight=100 color=#BB2700 icon="\uf2c9" block="温度"
namespace ntcPac {
    /**
     * 将 NTC 的 ADC 数据转换为温度
     * @param adcpin 是ADC的输入引脚
     */
    //% weight=50 blockId="temperature" block="获取温度 %adcpin"
	//% group="温度传感器"
    export function Temperature(adcpin: AnalogPin): number {
		let ainPin:AnalogPin = adcpin;
		let adc:number = pins.analogReadPin(ainPin)
        for (let i = 0; i < table_B3950.length; i++) {
            if (adc > table_B3950[i])
                return i - 40;
        }
        return 85;
    }

}
/**
 * makecode BME180 digital pressure and humidity sensor Package.
 * From microbit/micropython Chinese community.
 */


/**
 * BME180 block
 */
//% weight=100 color=#70c0f0 icon="\uf042" block="BME180"
namespace BME180 {
    let BME180_I2C_ADDR = 0x77

    function setreg(reg: number, dat: number): void {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = dat;
        pins.i2cWriteBuffer(BME180_I2C_ADDR, buf);
    }

    function getreg(reg: number): number {
        pins.i2cWriteNumber(BME180_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(BME180_I2C_ADDR, NumberFormat.UInt8BE);
    }

    function getInt8LE(reg: number): number {
        pins.i2cWriteNumber(BME180_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(BME180_I2C_ADDR, NumberFormat.Int8LE);
    }

    function getUInt16LE(reg: number): number {
        pins.i2cWriteNumber(BME180_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(BME180_I2C_ADDR, NumberFormat.UInt16LE);
    }

    function getInt16LE(reg: number): number {
        pins.i2cWriteNumber(BME180_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(BME180_I2C_ADDR, NumberFormat.Int16LE);
    }

    let ac1 = getInt16LE(0xAA)
	let ac2 = getInt16LE(0xAC)
	let ac3 = getInt16LE(0xAE)
	let ac4 = getInt16LE(0xB0)
	let	ac5 = getInt16LE(0xB2)
	let ac6 = getInt16LE(0xB4)
	let b1 = getInt16LE(0xB6)
	let b2 = getInt16LE(0xB8)
	let mb = getInt16LE(0xBA)
	let mc = getInt16LE(0xBC)
	let md = getInt16LE(0xBE)
	let b5 = 0
	let T = 0
	let P = 0
	let alt = 0
	let OSS = 0
	
    function bmp085GetTemperature(ut:number): number {

	  let x1 = ((ut - ac6)*ac5) >> 15
	  let x2 = (mc << 11)/(x1 + md)
	  b5 = x1 + x2

	  let temp = ((b5 + 8)>>4)
	  temp = temp /10

	  return Math.ceil(temp)
	}

	function bmp085GetPressure(up: number): number{
	  let p=0
	  let value=0

	  let b6 = b5 - 4000
	  // Calculate B3
	  let x1 = (b2 * (b6 * b6)>>12)>>11
	  let x2 = (ac2 * b6)>>11;
	  let x3 = x1 + x2
	  let b3 = ((((ac1)*4 + x3)<<OSS) + 2)>>2

	  // Calculate B4
	  x1 = (ac3 * b6)>>13;
	  x2 = (b1 * ((b6 * b6)>>12))>>16
	  x3 = ((x1 + x2) + 2)>>2;
	  
	  let b4 = (ac4 * (x3 + 32768))>>15

	  let b7 = ((up - b3) * (50000>>OSS))
	  	
	  if (b7 < 0x80000000)
		p = ((b7*2)/b4)
	  else
		p = ((b7/b4))*2

	  x1 = (p>>8) * (p>>8)
	  x1 = (x1 * 3038)>>16
	  x2 = (-7357 * p)>>16
	  p += (x1 + x2 + 3791)>>4

	  return Math.ceil(p)
	}

	function bmp085ReadUT(): number{
	  // Write 0x2E into Register 0xF4
	  // This requests a temperature reading
		setreg(0xF4,0x2E)
	  // Wait at least 4.5ms
		control.waitMicros(10);

	  // Read two bytes from registers 0xF6 and 0xF7
		let ut = getInt16LE(0xF6);
		return ut;
	}

	function bmp085ReadUP(): number{
	  let up = 0;

	  // Write 0x34+(OSS<<6) into register 0xF4
	  // Request a pressure reading w/ oversampling setting
		setreg(0xF4,0x34 + (OSS<<6))
	  // Wait for conversion, delay time dependent on OSS
		control.waitMicros(10);

	  // Read register 0xF6 (MSB), 0xF7 (LSB), and 0xF8 (XLSB)
		up = getUInt16LE(0xF6);
		up &= 0x0000FFFF;

	  return up;
	}

	function calcAltitude(pressure: number): number{
	  let A = pressure/101325;
	  let B = 0.190295;
	  let C = Math.pow(A,B);
	  C = 1 - C;
	  C = C*44330;
	  return C;
	}
	function refresh(){
		let temp = bmp085ReadUT()
		T = bmp085GetTemperature(temp)
		let up = bmp085ReadUP()
		P = bmp085GetPressure(up)
		alt = calcAltitude(P)
	}
    /**
     * get pressure
     */
    //% blockId="BME180_GET_PRESSURE" block="get pressure"
    //% weight=80 blockGap=8
    export function pressure(): number {
		refresh()
        return P;
    }

    /**
     * get temperature
     */
    //% blockId="BME180_GET_TEMPERATURE" block="get temperature"
    //% weight=80 blockGap=8
    export function temperature(): number {
		refresh()
        return T;
    }

    /**
     * get altitude
     */
    //% blockId="BME180_GET_HUMIDITY" block="get altitude"
    //% weight=80 blockGap=8
    export function altitude(): number {
        refresh()
        return alt;
    }
    /**
     * get id
     */
    //% blockId="BME180_GET_ID" block="get id"
    //% weight=80 blockGap=8
    export function id(): number {
        let id = getreg(0xD0)
        return id;
    }
	
	
}