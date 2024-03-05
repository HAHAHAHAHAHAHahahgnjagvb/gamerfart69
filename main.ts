namespace gamerFart69{
    /**
     * Skibidi
     */
    //% blockId="gamerFart69skibiditoilet"
    //% block="say $text $num"
    //% num.min=1 num.max=69
    export function skibiditoilet(text:string,num:number){
        if (num <= 0){
            return;
        }
        for (let i = 0; i < num; i++) {
            basic.showString(text)
        }
    }
}