import { Container, Sprite, Text } from "pixi.js";


export class UICoin extends Container {
    constructor() {
        super();

        const myTextFieldOrange: Sprite = Sprite.from("TextFieldOrange");
        myTextFieldOrange.alpha = 0.8;
        myTextFieldOrange.scale.set(0.4);
        myTextFieldOrange.position.y = 10;
        myTextFieldOrange.position.x =10;
        this.addChild(myTextFieldOrange);

        const myCoin: Sprite = Sprite.from("IconCoin");
        myCoin.scale.set(0.4);
        this.addChild(myCoin);

        const myNumberCoin: Text = new Text(
            "51459",
            {
                fontSize: 32,
                fontWeight: "bold",
                fill: 16534280,
                fontFamily: 'Arial',
                stroke: 0
            }
        );
        myNumberCoin.style.wordWrap = true;
        myNumberCoin.style.align = "center"
        myNumberCoin.position.x =  85;
        myNumberCoin.position.y =  20;
        this.addChild(myNumberCoin);
    };
}
