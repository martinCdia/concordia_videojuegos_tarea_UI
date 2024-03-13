import { Container, NineSlicePlane, Texture } from "pixi.js";
import { UICoin } from "../game/UICoin";
import { UIDiamond } from "../game/UIDiamond";
import { StarComplete } from "../game/StarComplete";
import { UIBanner } from "../game/UIBanner";
import { Buttons } from "../ui/Buttons";

export class UITarea extends Container {

    private myButtonClose: Buttons;
    private myButtonReplay: Buttons;

    constructor() {
        super();

        const uiDialog = new Container();
        uiDialog.scale.set(0.8);
        uiDialog.position.set(600,70);


        const background: NineSlicePlane = new NineSlicePlane(
            Texture.from("Box"),
            0,0,0,0
        );
        background.width = 225;
        background.height = 230;
        background.scale.set(3);
        //background.position.set(550,100);
        uiDialog.addChild(background);

        const myUiBanner: UIBanner = new UIBanner();
        //myUiBanner.position.set(620,-5);
        myUiBanner.position.x = background.width / 2;
        myUiBanner.position.y = background.y - 100;
        uiDialog.addChild(myUiBanner);

        this.myButtonClose = new Buttons(
            Texture.from("ButtonX"),
            Texture.from("ButtonXWhiteOutline"),
        );
        this.myButtonClose.on("buttonClick", this.onButtonClickClose, this);
        this.myButtonClose.scale.set(0.3);
        //myButtonClose.position.set(1100,90)
        this.myButtonClose.position.x = myUiBanner.x + 540;
        this.myButtonClose.position.y = myUiBanner.y + 150;
        this.myButtonClose.interactive = true;
        uiDialog.addChild(this.myButtonClose);

        const myStarComplete: StarComplete = new StarComplete();
        //myStarComplete.position.set(620,200);
        myStarComplete.position.y = myUiBanner.y + 220;
        myStarComplete.position.x = background.width / 2;
        uiDialog.addChild(myStarComplete);

        const myUiCoin:  UICoin = new UICoin();
        //myUiCoin.position.set(622,410);
        myUiCoin.position.x = background.width / 2;
        myUiCoin.position.y = myStarComplete.y + 240; 
        uiDialog.addChild(myUiCoin);

        const myUiDiamond: UIDiamond = new UIDiamond();
        //myUiDiamond.position.set(865,410);
        myUiDiamond.position.x = myUiCoin.x + 245;
        myUiDiamond.position.y = myUiCoin.y; 
        uiDialog.addChild(myUiDiamond);

        this.myButtonReplay = new Buttons(
            Texture.from("ButtonReplay"),
            Texture.from("ButtonReplayOff")
        )
        this.myButtonReplay.interactive = true;
        this.myButtonReplay.on("buttonClick", this.onButtonClickReplay, this)
        this.myButtonReplay.scale.set(0.4);
        //myButtonReplay.position.set(660,510);
        this.myButtonReplay.position.x = background.width / 2 * 3;
        this.myButtonReplay.position.y = myUiCoin.y + 180;
        uiDialog.addChild(this.myButtonReplay);

        this.addChild(uiDialog);

    };

    private onButtonClickClose() {
        console.log("Button clicked!", this);
    }

    private onButtonClickReplay() {
        console.log("Button clicked!", this);
    }
};