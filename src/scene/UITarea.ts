import { Container, NineSlicePlane, Sprite, Texture } from "pixi.js";
import { UICoin } from "../game/UICoin";
import { UIDiamond } from "../game/UIDiamond";
import { StarComplete } from "../game/StarComplete";
import { UIBanner } from "../game/UIBanner";

export class UITarea extends Container {

    constructor() {
        super();

        const background: NineSlicePlane = new NineSlicePlane(
            Texture.from("Box"),
            0,0,0,0
        );
        background.width = 200;
        background.height = 200;
        background.scale.set(3);
        background.position.set(550,100);
        this.addChild(background);

        const myUiBanner: UIBanner = new UIBanner();
        myUiBanner.position.set(620,-5);
        this.addChild(myUiBanner);

        const myButtonClose: Sprite = Sprite.from("ButtonX");
        myButtonClose.scale.set(0.3);
        myButtonClose.position.set(1100,90)
        this.addChild(myButtonClose);

        const myStarComplete: StarComplete = new StarComplete();
        myStarComplete.position.set(620,200);
        this.addChild(myStarComplete);

        const myUiCoin:  UICoin = new UICoin();
        myUiCoin.position.set(622,410);
        this.addChild(myUiCoin);

        const myUiDiamond: UIDiamond = new UIDiamond();
        myUiDiamond.position.set(865,410);
        this.addChild(myUiDiamond);

        const myButtonReplay: Sprite = Sprite.from("ButtonReplay");
        myButtonReplay.scale.set(0.4);
        myButtonReplay.position.set(660,510);
        this.addChild(myButtonReplay);

    };
};