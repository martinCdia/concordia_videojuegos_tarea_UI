import { Container, NineSlicePlane, Sprite, Text,Texture } from "pixi.js";

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

        const myBanner: Sprite = Sprite.from("Banner");
        myBanner.scale.set(0.4);
        myBanner.position.x = 620;
        myBanner.position.y = 20;
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
        myTextLevel.position.set(730,25);
        this.addChild(myTextLevel);

        const myButtonClose: Sprite = Sprite.from("ButtonX");
        myButtonClose.scale.set(0.3);
        myButtonClose.position.set(1100,90)
        this.addChild(myButtonClose);

        const myButtonText: Sprite = Sprite.from("ButtonTextLarge");
        myButtonText.alpha=0.3;
        myButtonText.width = 460;
        myButtonText.height = 150;
        myButtonText.scale.set(0.395);
        myButtonText.position.set(620,220);
        this.addChild(myButtonText);

        const myStarGrey: Sprite = Sprite.from("IconSmallStarGrey");
        myStarGrey.scale.set(0.6);
        myStarGrey.position.set(950,240);
        this.addChild(myStarGrey);

        const myStarGold: Sprite = Sprite.from("IconSmallStar");
        myStarGold.scale.set(0.6);
        myStarGold.position.set(635,240);
        this.addChild(myStarGold);
    
        const myLargeStar: Sprite = Sprite.from("IconLargeStar");
        myLargeStar.scale.set(0.5);
        myLargeStar.position.set(770,190);
        this.addChild(myLargeStar);

        const myTextFieldOrange: Sprite = Sprite.from("TextFieldOrange");
        myTextFieldOrange.alpha=0.8;
        myTextFieldOrange.scale.set(0.4);
        myTextFieldOrange.position.set(640,420);
        this.addChild(myTextFieldOrange); 

        const myTextFieldBlue: Sprite = Sprite.from("TextFieldBlue");
        myTextFieldBlue.alpha=0.8;
        myTextFieldBlue.scale.set(0.4);
        myTextFieldBlue.position.set(875,420);
        this.addChild(myTextFieldBlue); 

        const myCoin: Sprite = Sprite.from("IconCoin");
        myCoin.scale.set(0.4);
        myCoin.position.set(620,410);
        this.addChild(myCoin); 
        
        const myDiamond: Sprite = Sprite.from("IconDiamond");
        myDiamond.scale.set(0.4);
        myDiamond.position.set(850,410);
        this.addChild(myDiamond); 

        const myButtonReplay: Sprite = Sprite.from("ButtonReplay");
        myButtonReplay.scale.set(0.4);
        myButtonReplay.position.set(660,510);
        this.addChild(myButtonReplay);

        const myNumberCoin: Text = new Text(
            "51459",
            {
                fontSize:32, 
                fontWeight:"bold", 
                fill: 0xFC4B08, 
                fontFamily: 'Arial', 
                //strokeThickness: 1, 
                stroke: 0x000000
            }
        );
        myNumberCoin.style.wordWrap = true;
        myNumberCoin.style.align = "center";
        myNumberCoin.position.set(710,427);
        this.addChild(myNumberCoin);

        const myNumberDiamond: Text = new Text(
            "1023",
            {
                fontSize:32, 
                fontWeight:"bold", 
                fill: 0x51D1F6, 
                fontFamily: 'Arial',
                //strokeThickness: 1, 
                stroke: 0x000000
            }
        );
        myNumberDiamond.style.wordWrap = true;
        myNumberDiamond.style.align = "center";
        myNumberDiamond.position.set(950,427);
        this.addChild(myNumberDiamond);

    };
};