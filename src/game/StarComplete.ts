import { Container, Sprite } from "pixi.js";

export class StarComplete extends Container {
    constructor() {
        super();

        const myButtonText: Sprite = Sprite.from("ButtonTextLarge");
        myButtonText.alpha=0.3;
        myButtonText.width = 460;
        myButtonText.height = 150;
        myButtonText.scale.set(0.395);
        myButtonText.position.set(0,30);
        this.addChild(myButtonText);

        const myStarGold: Sprite = Sprite.from("IconSmallStar");
        myStarGold.scale.set(0.6);
        myStarGold.position.set(20,48);
        this.addChild(myStarGold);

        const myLargeStar: Sprite = Sprite.from("IconLargeStar");
        myLargeStar.scale.set(0.5);
        myLargeStar.position.set(150,0);
        this.addChild(myLargeStar);

        const myStarGrey: Sprite = Sprite.from("IconSmallStarGrey");
        myStarGrey.scale.set(0.6);
        myStarGrey.position.set(325,48);
        this.addChild(myStarGrey);
    
    };
};