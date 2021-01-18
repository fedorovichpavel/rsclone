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
// eslint-disable-next-line import/extensions
// @ts-ignore
var gestures_js_1 = require("phaser3-rex-plugins/plugins/gestures.js");
// @ts-ignore
var Memory_ts_1 = require("../Memory.ts");
var style = {
    fontFamily: 'Pixel',
    color: '#000000',
    fontSize: '18px'
};
var Race = /** @class */ (function (_super) {
    __extends(Race, _super);
    function Race() {
        var _this = _super.call(this, 'RaceGame') || this;
        _this.Memory = new Memory_ts_1["default"]();
        _this.movementPX = 60;
        return _this;
    }
    Race.prototype.create = function () {
        var _this = this;
        this.arrEnemyCar = [];
        this.score = 0;
        this.speed = 5;
        this.swipe = new gestures_js_1.Swipe(this);
        this.road = this.add.tileSprite(0, 0, 220, 460, 'background').setOrigin(0, 0);
        this.car = this.physics.add.sprite(21, 370, 'carPlayer').setOrigin(0, 0);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.spawnEnemyCar();
        this.physics.add.collider(this.car, this.arrEnemyCar, function () { return _this.gameOver(); });
        this.tableScore = this.add.text(22, 0, "Score:" + this.score, style);
    };
    Race.prototype.update = function () {
        this.road.tilePositionY -= this.speed;
        this.moveCarLeftAndRight();
        this.moveEnemyCar();
        this.updateSpeed();
        this.tableScore.text = "Score:" + this.score;
    };
    Race.prototype.moveCarLeftAndRight = function () {
        if (this.cursors.right.isDown || this.swipe.right) {
            this.cursors.right.isDown = false;
            if (this.car.x !== 141) {
                this.car.x += this.movementPX;
            }
        }
        if (this.cursors.left.isDown || this.swipe.left) {
            this.cursors.left.isDown = false;
            if (this.car.x !== 21) {
                this.car.x -= this.movementPX;
            }
        }
    };
    // eslint-disable-next-line class-methods-use-this
    Race.prototype.coinToss = function () {
        return Math.floor(Math.random() * 3);
    };
    Race.prototype.spawnEnemyCar = function () {
        var x;
        var y;
        for (var i = 0; i < 5; i += 1) {
            y = -200 * (i + 1);
            x = this.px();
            this.arrEnemyCar.push(this.physics.add.sprite(x, y, 'car').setOrigin(0, 0));
        }
    };
    // eslint-disable-next-line consistent-return
    Race.prototype.px = function () {
        var x = this.coinToss();
        if (x === this.prevCount)
            x += 1;
        if (x === 3)
            x -= Math.round(1 - 0.5 + Math.random() * (2 - 1 + 1));
        // eslint-disable-next-line default-case
        switch (x) {
            case 0:
                this.prevCount = 0;
                return 20;
            case 1:
                this.prevCount = 1;
                return 80;
            case 2:
                this.prevCount = 2;
                return 140;
        }
    };
    Race.prototype.moveEnemyCar = function () {
        for (var i = 0; i < this.arrEnemyCar.length; i += 1) {
            if (this.arrEnemyCar[i].y > 560) {
                this.score += this.speed;
                this.arrEnemyCar[i].x = this.px();
                this.arrEnemyCar[i].y = -560;
            }
            this.arrEnemyCar[i].y += this.speed;
        }
    };
    Race.prototype.gameOver = function () {
        var _this = this;
        this.scene.pause();
        this.Memory.setScorePoint(this.score);
        this.Memory.setPrevGame('RaceGame');
        setTimeout(function () {
            _this.scene.restart(_this);
            _this.scene.stop();
            _this.scene.start('GameOver');
        }, 500);
    };
    Race.prototype.updateSpeed = function () {
        // eslint-disable-next-line default-case
        switch (this.score) {
            case 150:
                this.score += 1;
                this.speed += 1;
                break;
            case 301:
                this.score += 1;
                this.speed += 1;
                break;
            case 449:
                this.score += 1;
                this.speed += 1;
                break;
            case 602:
                this.score += 1;
                this.speed += 1;
                break;
            case 756:
                this.score += 1;
                this.speed += 1;
                break;
            case 907:
                this.score += 1;
                this.speed += 1;
                break;
            case 1051:
                this.score += 1;
                this.speed += 1;
                break;
            case 1292:
                this.score += 1;
                this.speed += 1;
                break;
        }
    };
    return Race;
}(Phaser.Scene));
exports["default"] = Race;
