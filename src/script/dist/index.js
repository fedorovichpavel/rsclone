"use strict";
exports.__esModule = true;
require("../styles/style.scss");
var Phaser = require("phaser");
// @ts-ignore
// eslint-disable-next-line import/extensions
var gestures_plugin_js_1 = require("phaser3-rex-plugins/plugins/gestures-plugin.js");
// @ts-ignore
var Race_ts_1 = require("./games/race/Race.ts");
// @ts-ignore
var tetris_ts_1 = require("./games/tetris/tetris.ts");
// @ts-ignore
var Preload_ts_1 = require("./games/Preload.ts");
// @ts-ignore
var GameOver_ts_1 = require("./games/GameOver.ts");
// @ts-ignore
var Memory_ts_1 = require("./games/Memory.ts");
// @ts-ignore
var MainMenu_ts_1 = require("./games/menu/MainMenu.ts");
// eslint-disable-next-line import/extensions
var config = {
    type: Phaser.WEBGL,
    physics: {
        "default": 'arcade'
    },
    plugins: {
        scene: [{
                key: 'rexGestures',
                plugin: gestures_plugin_js_1["default"],
                mapping: 'rexGestures'
            }]
    },
    width: 220,
    height: 460,
    parent: 'game',
    scene: [Preload_ts_1["default"], MainMenu_ts_1["default"], Race_ts_1["default"], tetris_ts_1["default"], GameOver_ts_1["default"]]
};
var memory = new Memory_ts_1["default"]();
memory.setConfig(config);
exports["default"] = new Phaser.Game(config);
