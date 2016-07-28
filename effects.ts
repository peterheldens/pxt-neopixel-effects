//%
enum Colors {
    Black = 0,
    White = ~0x0,
    Blue = 0x0000ff00
}
namespace neopixelEffects {
    /**
     * A sample image
     */
    //% blockId="neopixel_effects_rainbow" block="neopixel|%strip|paint %c=neopixel_effects_colors"
    export function paint(st: Strip, c: number) {

    }

    //% block=neopixel_effects_colors block="%c"
    export function colors(c: Colors): number {
        return <number>c;
    }
}