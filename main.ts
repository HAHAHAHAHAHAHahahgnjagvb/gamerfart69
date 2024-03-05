enum yousuf{
    isbad = 69
}

namespace gamerFart7000{
    /**
     * Skibidi
     */
    //% blockId="gamerFart7000skibiditoilet"
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
    //% blockId="gamerFart7000sigmafunction"
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