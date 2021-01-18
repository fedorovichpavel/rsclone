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
var Tetris = /** @class */ (function (_super) {
    __extends(Tetris, _super);
    //private tween: Phaser.Tweens;
    function Tetris() {
        var _this = _super.call(this, 'tetris') || this;
        _this.speed = 1;
        return _this;
    }
    ;
    Tetris.prototype.randomFig = function () {
        var arr = [
            [],
            [
                [80, 20],
                [100, 20],
                [120, 20],
                [120, 0]
            ],
            [
                [60, 0],
                [80, 0],
                [100, 0],
                [120, 0]
            ],
            [
                [80, 20],
                [100, 0],
                [100, 20],
                [120, 20]
            ],
            [
                [80, 20],
                [100, 20],
                [120, 0],
                [120, 20]
            ],
            [
                [80, 20],
                [100, 0],
                [100, 20],
                [120, 0]
            ],
            [
                [100, 0],
                [100, 20],
                [120, 20],
                [120, 0]
            ],
            [
                [80, 0],
                [100, 20],
                [100, 0],
                [120, 20]
            ]
        ];
        var randomNum = Math.floor(Math.random() * (7 - 1) + 1);
        this.fig = this.physics.add.group();
        this.fig.create(arr[randomNum][0][0] + 10, arr[randomNum][0][1] + 10, 'figure');
        this.fig.create(arr[randomNum][1][0] + 10, arr[randomNum][1][1] + 10, 'figure');
        this.fig.create(arr[randomNum][2][0] + 10, arr[randomNum][2][1] + 10, 'figure');
        this.fig.create(arr[randomNum][3][0] + 10, arr[randomNum][3][1] + 10, 'figure');
        this.numberFigure = randomNum;
    };
    Tetris.prototype.create = function () {
        this.map = this.add.tileSprite(0, 0, 220, 460, 'backgroundTetris').setOrigin(0, 0);
        this.borderBottom = this.physics.add.sprite(0, 459, 'line').setOrigin(0, 0);
        this.borderLeft = this.physics.add.sprite(0, 0, 'line2').setOrigin(0, 0);
        this.borderRight = this.physics.add.sprite(219, 0, 'line2').setOrigin(0, 0);
        this.group = this.physics.add.group();
        this.YGroup = [10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410, 430, 450];
        this.checkRight = true;
        this.checkLeft = true;
        this.checkBottom = true;
        this.checkRightFig = true;
        this.numberFigure;
        this.randomFig();
        //this.physics.add.existing(this.fig);
        this.physics.add.existing(this.borderBottom);
        this.physics.add.existing(this.borderLeft);
        this.physics.add.existing(this.borderRight);
        //this.fig.body.collideWorldBounds = true;
        // @ts-ignore
        this.tween = this.tweens.addCounter({
            from: 1,
            to: 2,
            duration: 10000,
            ease: 'Since.easeInOut',
            yoyo: true,
            repeat: -1
        });
        this.cursors = this.input.keyboard.createCursorKeys();
        console.log(this.fig);
    };
    Tetris.prototype.update = function () {
        if (this.checkBottom) {
            this.fallComplete(this.fig);
        }
        else {
            this.checkLeft = true;
            this.checkRight = true;
        }
        this.fallFig(1);
        this.moveFig();
    };
    Tetris.prototype.checkNeedDelet = function () {
        var _this = this;
        var checkDel = {};
        this.YGroup.forEach(function (coorY) {
            checkDel[coorY] = [];
            _this.group.getChildren().forEach(function (child) {
                for (var i = 10; i <= 210; i += 20) {
                    // @ts-ignore
                    if (child.getBounds().contains(i, coorY)) {
                        checkDel[coorY].push(child);
                    }
                }
            });
            if (checkDel[coorY].length === 11) {
                checkDel[coorY].forEach(function (e) { return e.destroy(); });
                _this.group.getChildren().forEach(function (e) {
                    // @ts-ignore
                    if (e.y < coorY) {
                        // @ts-ignore
                        e.y += 20;
                    }
                });
            }
        });
    };
    Tetris.prototype.rotation = function (item) {
        var pressNum = 1;
        item.getChildren().forEach(function (e) {
            console.log(e.x, e.y);
            e.x = (Math.round(e.x / 10) % 2 !== 0 ? Math.round(e.x / 10) : Math.round(e.x / 10) + pressNum) * 10;
            e.y = (Math.round(e.y / 10) % 2 !== 0 ? Math.round(e.y / 10) : Math.round(e.y / 10) + pressNum) * 10;
            console.log(e.x, e.y);
        });
        if (item.getChildren().map(function (e) { return e.x; }).includes(230)) {
            item.getChildren().forEach(function (e) { return e.x -= 20; });
        }
        pressNum *= -1;
        this.checkLeft = true;
        this.checkRight = true;
    };
    Tetris.prototype.fallComplete = function (figurrr) {
        var _this = this;
        this.physics.add.collider(figurrr.getChildren(), this.borderBottom, function () {
            _this.checkLeft = false;
            _this.checkRight = false;
            _this.checkBottom = false;
        });
        this.physics.add.collider(figurrr.getChildren(), this.group.getChildren(), function () {
            _this.checkBottom = false;
            _this.checkLeft = false;
            _this.checkRight = false;
        });
    };
    Tetris.prototype.fallFig = function (speedy) {
        var _this = this;
        if (this.checkBottom) {
            this.fig.getChildren().forEach(function (e) {
                e.y += _this.speed + speedy;
            });
        }
        if (!this.checkBottom) {
            this.fig.getChildren().forEach(function (e) {
                e.y = e.y - 1; // @ts-ignore
                var yYG = Math.round(e.y / 10) % 2 !== 0 ? Math.round(e.y / 10) : Math.round(e.y / 10) + 1; // @ts-ignore
                _this.group.create(e.x, yYG * 10, 'figure');
            });
            this.fig.children.entries.forEach(function (e) { return e.destroy(); });
            this.fig.children.entries.forEach(function (e) { return e.destroy(); });
            this.fig.children.entries.forEach(function (e) { return e.destroy(); });
            this.fig.children.entries.forEach(function (e) { return e.destroy(); });
            this.fig = null;
            this.physics.world.colliders.getActive().forEach(function (e) { return _this.physics.world.colliders.remove(e); });
            this.checkBottom = true;
            this.randomFig();
            //this.physics.add.existing(this.group);
            this.checkNeedDelet();
        }
    };
    Tetris.prototype.moveFig = function () {
        var _this = this;
        if (this.cursors.right.isDown) {
            this.checkLeft = true;
            this.cursors.right.isDown = false;
            if (this.checkRight) {
                var checkR_1 = false;
                this.fig.getChildren().forEach(function (e) {
                    var yY = (Math.round(e.y / 10) % 2 !== 0 ? Math.round(e.y / 10) : Math.round(e.y / 10) + 1) * 10;
                    _this.group.getChildren().forEach(function (child) {
                        if (child.getBounds().contains(e.x + 20, yY)) {
                            checkR_1 = true;
                        }
                    });
                });
                if (!checkR_1) {
                    this.fig.getChildren().forEach(function (e) {
                        e.x += 20;
                    });
                }
                checkR_1 = false;
            }
            this.physics.add.overlap(this.fig.getChildren(), this.borderRight, function () { _this.checkRight = false; });
        }
        if (this.cursors.left.isDown) {
            this.physics.add.collider(this.fig, this.group, function () {
                _this.checkLeft = false;
            });
            this.checkRight = true;
            this.cursors.left.isDown = false;
            if (this.checkLeft) {
                var checkL_1 = false;
                this.fig.getChildren().forEach(function (e) {
                    var yY = (Math.round(e.y / 10) % 2 !== 0 ? Math.round(e.y / 10) : Math.round(e.y / 10) + 1) * 10;
                    _this.group.getChildren().forEach(function (child) {
                        if (child.getBounds().contains(e.x - 20, yY)) {
                            checkL_1 = true;
                        }
                    });
                });
                if (!checkL_1) { // @ts-ignore
                    this.fig.getChildren().forEach(function (e) {
                        e.x -= 20;
                    });
                }
                checkL_1 = false;
            }
            this.physics.add.overlap(this.fig.getChildren(), this.borderLeft, function () { _this.checkLeft = false; });
        }
        if (this.cursors.down.isDown) {
            this.cursors.down.isDown = false;
            this.fallFig(20);
        }
        if (this.cursors.space.isDown) {
            this.cursors.space.isDown = false;
            if (this.numberFigure !== 6) { // @ts-ignore
                var coorX = this.fig.getChildren().map(function (e) { return e.x; }).reduce(function (a, e) { return a + e; }) / 4; // @ts-ignore
                var coorY = this.fig.getChildren().map(function (e) { return e.y; }).reduce(function (a, e) { return a + e; }) / 4;
                this.fig.rotateAround({ x: coorX, y: coorY }, Math.PI / 2);
                this.rotation(this.fig);
            }
        }
        if (this.cursors.up.isDown) {
            this.cursors.up.isDown = false;
        }
    };
    return Tetris;
}(Phaser.Scene));
exports["default"] = Tetris;
var config = {
    type: Phaser.AUTO,
    physics: {
        "default": 'arcade',
        arcade: {
            debug: true
        },
        bounds: {}
    },
    width: 220,
    height: 460,
    backgroundColor: '#ababab',
    parent: 'game',
    scene: [Tetris]
};
//const game = new Phaser.Game(config);
