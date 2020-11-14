/// <reference path="../../typings/phaser.d.ts" />
// @ts-check

import Phaser from 'phaser';

class Game extends Phaser.Scene {
    create(){
        let hero = this.physics.add.sprite(400; 300; "mage");
        hero.body.setCollideWorldBounds(true);
    }
}

export default Game;