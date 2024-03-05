enum yousuf{
    isbad = 69
}

namespace gamerFart69{
    /**
     * Skibidi
     */
    //% blockId="gamerFart69skibiditoilet"
    //% block="say $text $num times"
    //% num.min=1 num.max=69
    export function skibiditoilet(text:string,num:number){
        if (num <= 0){
            return;
        }
        for (let i = 0; i < num; i++) {
            basic.showString(text)
        }
    }
    /**
     * Sigma function.
     */
    //% blockId="gamerFart69sigmafunction"
    //% block="sigma min $min max $max"
    export function sigma(min:number,max:number) {
        let currentnum = min
        let answer = min
        if (min <= 0||max <= 0) {
            return 0;
        }
        while (currentnum <= max - 1) {
            currentnum += 1
            answer = answer + currentnum
        }
        return answer;
    }
}