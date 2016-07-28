//%
enum Colors {
    Black = 0,
    White = ~0x0,
    Blue = 0x0000ff00
}
namespace neopixel {
    //% blockId=neopixel_effects_colors block="%c"
    //% weight=1
    export function colors(c: Colors): number {
        return <number>c;
    }

    /**
     * Set a color on the strip
     */
    //% blockId="neopixel_effects_rainbow" block="neopixel|%strip|paint %c=neopixel_effects_colors"
    //% weight=20
    export function paint(st: Strip, c: number) {

    }
}