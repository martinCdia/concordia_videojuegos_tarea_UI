import { Container, NineSlicePlane, Sprite, Text, Texture } from "pixi.js";
import { Keyboard } from "../utils/Keyboard";

export class UIKeyboard extends Container {

    private keyUpGrey: Sprite;
    private keyDownGrey: Sprite;
    private keyRightGrey: Sprite;
    private keyLeftGrey: Sprite;

    constructor(){
        super();

        const uiKeyboard = new Container();
        uiKeyboard.position.set(150,200);

        const backgroundKeyboard: NineSlicePlane = new NineSlicePlane(
            Texture.from("Box"),
            0,0,0,0
        );
        backgroundKeyboard.width = 500;
        backgroundKeyboard.height = 300;
        backgroundKeyboard.scale.set(0.8);
        uiKeyboard.addChild(backgroundKeyboard);

        const dialogBox: Sprite = Sprite.from("DialogBox");
        dialogBox.scale.set(0.2);
        dialogBox.anchor.set(0.5);
        dialogBox.position.y = backgroundKeyboard.y - 60;
        dialogBox.position.x = backgroundKeyboard.width / 2 - 50;
        uiKeyboard.addChild(dialogBox);

        const textDialog: Text = new Text(
            "Pobando el teclado...",
            {
                fontSize:25, 
                fontWeight:"bold", 
                fill: 0xFFFFFF, 
                leading: -5
            }
        );
        textDialog.style.wordWrap = true;
        textDialog.style.align = "center";
        textDialog.style.strokeThickness = 8;
        textDialog.position.y = dialogBox.y - 55;
        textDialog.position.x = dialogBox.width / 2 + 30;
        uiKeyboard.addChild(textDialog);


        this.keyUpGrey = Sprite.from("ButtonUpGrey");
        this.keyUpGrey.anchor.set(0.5);
        this.keyUpGrey.x = backgroundKeyboard.width / 2 - 50;
        this.keyUpGrey.y = dialogBox.y + 130;
        uiKeyboard.addChild(this.keyUpGrey)

        this.keyDownGrey = Sprite.from("ButtonDownGrey");
        this.keyDownGrey.anchor.set(0.5);
        this.keyDownGrey.x = this.keyUpGrey.x;
        this.keyDownGrey.y = this.keyUpGrey.y + 75;
        uiKeyboard.addChild(this.keyDownGrey)

        this.keyRightGrey = Sprite.from("ButtonRightGrey");
        this.keyRightGrey.anchor.set(0.5);
        this.keyRightGrey.x = this.keyDownGrey.x + 80;
        this.keyRightGrey.y = this.keyUpGrey.y + 75;
        uiKeyboard.addChild(this.keyRightGrey)

        this.keyLeftGrey = Sprite.from("ButtonLeftGrey");
        this.keyLeftGrey.anchor.set(0.5);
        this.keyLeftGrey.x = this.keyDownGrey.x - 80;
        this.keyLeftGrey.y = this.keyUpGrey.y + 75;
        uiKeyboard.addChild(this.keyLeftGrey)

        Keyboard.down.on("ArrowUp", this.onKeyDownArrowUp, this);
        Keyboard.up.on("ArrowUp", this.onKeyUpArrowUp, this); 
        Keyboard.down.on("ArrowLeft", this.onKeyDownArrowLeft, this);
        Keyboard.up.on("ArrowLeft", this.onKeyUpArrowLeft, this); 
        Keyboard.down.on("ArrowDown", this.onKeyDownArrowDown, this);
        Keyboard.up.on("ArrowDown", this.onKeyUpArrowDown, this); 
        Keyboard.down.on("ArrowRight", this.onKeyDownArrowRight, this);
        Keyboard.up.on("ArrowRight", this.onKeyUpArrowRight, this);


        this.addChild(uiKeyboard);
    }

    private onKeyDownArrowUp() {
        this.keyUpGrey.texture = Texture.from("ButtonUpOrange");
    }

    private onKeyUpArrowUp() {
        this.keyUpGrey.texture = Texture.from("ButtonUpGrey");
    }

    private onKeyDownArrowLeft() {
        this.keyLeftGrey.texture = Texture.from("ButtonLeftOrange");
    }

    private onKeyUpArrowLeft() {
        this.keyLeftGrey.texture = Texture.from("ButtonLeftGrey");
    }

    private onKeyDownArrowDown() {
        this.keyDownGrey.texture = Texture.from("ButtonDownOrange");
    }

    private onKeyUpArrowDown() {
        this.keyDownGrey.texture = Texture.from("ButtonDownGrey");
    }

    private onKeyDownArrowRight() {
        this.keyRightGrey.texture = Texture.from("ButtonRightOrange");
    }

    private onKeyUpArrowRight() {
        this.keyRightGrey.texture = Texture.from("ButtonRightGrey");
    }
}