import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 400,
    height: 400,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
var pacman;
var red;

function preload ()
{
    this.load.spritesheet('spritesheet',
        'assets/basic_pacman.png',
        { frameWidth: 14, frameHeight: 14 }
    );
}

function create ()
{
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('spritesheet', { start: 0, end: 1 }),
        frameRate: 2,
        repeat: -1
    });

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('spritesheet', { start: 2, end: 3 }),
        frameRate: 2,
        repeat: -1
    });

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('spritesheet', { start: 4, end: 5 }),
        frameRate: 2,
        repeat: -1
    });

    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('spritesheet', { start: 6, end: 7 }),
        frameRate: 2,
        repeat: -1
    });

    this.anims.create({
        key: 'red_right',
        frames: this.anims.generateFrameNumbers('spritesheet', { start: 8, end: 9 }),
        frameRate: 2,
        repeat: -1
    });

    this.anims.create({
        key: 'red_left',
        frames: this.anims.generateFrameNumbers('spritesheet', { start: 10, end: 11 }),
        frameRate: 2,
        repeat: -1
    });

    this.anims.create({
        key: 'red_up',
        frames: this.anims.generateFrameNumbers('spritesheet', { start: 12, end: 13 }),
        frameRate: 2,
        repeat: -1
    });

    this.anims.create({
        key: 'red_down',
        frames: this.anims.generateFrameNumbers('spritesheet', { start: 14, end: 15 }),
        frameRate: 2,
        repeat: -1
    });

    pacman = this.add.sprite(50, 50, 'spritesheet').play('right');
    red = this.add.sprite(300, 300, 'spritesheet').play('red_right');

}
