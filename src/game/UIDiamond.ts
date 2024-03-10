import { Container, Sprite, Text } from "pixi.js";

export class UIDiamond extends Container {
    constructor() {
        super();

        const myTextFieldBlue: Sprite = Sprite.from("TextFieldBlue");
        myTextFieldBlue.alpha=0.8;
        myTextFieldBlue.scale.set(0.4);
        myTextFieldBlue.position.y = 10;
        myTextFieldBlue.position.x = 12;
        this.addChild(myTextFieldBlue); 

        const myDiamond: Sprite = Sprite.from("IconDiamond");
        myDiamond.scale.set(0.4);
        myDiamond.position.y = 3;
        this.addChild(myDiamond);

        const myNumberDiamond: Text = new Text(
            "1023",
            {
                fontSize:32, 
                fontWeight:"bold", 
                fill: 0x51D1F6, 
                fontFamily: 'Arial',
                stroke: 0x000000
            }
        );
        myNumberDiamond.style.wordWrap = true;
        myNumberDiamond.style.align = "center";
        myNumberDiamond.position.x =  95;
        myNumberDiamond.position.y =  18;
        this.addChild(myNumberDiamond);
    }
};