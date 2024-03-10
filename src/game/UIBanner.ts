import { Container, Sprite, Text } from "pixi.js";

export class UIBanner extends Container {
    constructor() {
        super();

        const myBanner: Sprite = Sprite.from("Banner");
        myBanner.scale.set(0.4);
        myBanner.position.set(0,20);
        this.addChild(myBanner);

        const myTextLevel: Text = new Text(
            "Level Complete!",
            {
                fontSize:50, 
                fontWeight:"bold", 
                fill: 0xFFFFFF, 
                leading: -10
            }
        );
        myTextLevel.style.wordWrap = true;
        myTextLevel.style.align = "center";
        myTextLevel.style.strokeThickness = 8;
        myTextLevel.position.set(100,25);
        this.addChild(myTextLevel);
    };
};