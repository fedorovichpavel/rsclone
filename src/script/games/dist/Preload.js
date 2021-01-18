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
var defaultScreen = require('../../assets/image/screen.png');
var road = require('../../assets/image/road.png');
var car = require('../../assets/image/car.png');
var carPlayer = require('../../assets/image/carPlayer.png');
var btnNoActive = require('../../assets/image/btnNoActive.png');
var btnActive = require('../../assets/image/btnActive.png');
var map = require('../../assets/image/map.png');
var figure = require('../../assets/image/figure.png');
var line = require('../../assets/image/Line.png');
var line2 = require('../../assets/image/Line2.png');
var Preload = /** @class */ (function (_super) {
    __extends(Preload, _super);
    function Preload() {
        return _super.call(this, 'Preload') || this;
    }
    Preload.prototype.preload = function () {
        this.load.image('defaultScreen', defaultScreen);
        this.load.image('background', road);
        this.load.image('car', car);
        this.load.image('carPlayer', carPlayer);
        this.load.image('btnNoActive', btnNoActive);
        this.load.image('btnActive', btnActive);
        this.load.image('backgroundTetris', map);
        this.load.image('figure', figure);
        this.load.image('line', line);
        this.load.image('line2', line2);
        // Ваши картинки все
        this.create();
    };
    Preload.prototype.create = function () {
        this.scene.launch('MainMenu');
    };
    return Preload;
}(Phaser.Scene));
exports["default"] = Preload;
