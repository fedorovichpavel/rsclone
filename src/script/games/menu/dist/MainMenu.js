"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Phaser = require("phaser");
// @ts-ignore
var Memory_ts_1 = require("../Memory.ts");
// @ts-ignore
var CustomButton_ts_1 = require("../buttons/CustomButton.ts");
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        var _this = _super.call(this, 'MainMenu') || this;
        _this.Memory = new Memory_ts_1["default"]();
        return _this;
    }
    MainMenu.prototype.create = function () {
        var _this = this;
        this.background = this.add.tileSprite(0, 0, 220, 460, 'defaultScreen').setOrigin(0, 0);
        this.text = this.add.text(0, 45, 'TETRIS', {
            fontFamily: 'Pixel',
            color: '#000000',
            fontSize: '39px'
        });
        this.text.x = (this.Memory.getConfig().width - this.text.width) / 2;
        var btnRaceGame = new CustomButton_ts_1["default"](this, 110, 135, 'Race game');
        this.add.existing(btnRaceGame);
        btnRaceGame.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, function () {
            _this.scene.start('RaceGame');
        });
        var btnTetrisGame = new CustomButton_ts_1["default"](this, 110, 185, 'Tetris game');
        this.add.existing(btnTetrisGame);
        btnTetrisGame.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, function () {
            _this.scene.start('tetris');
        });
    };
    return MainMenu;
}(Phaser.Scene));
exports["default"] = MainMenu;
