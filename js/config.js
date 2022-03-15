var k = 2; //scale
var texturs = null;
var tileTexturs = null //array of tile texturs
var szWindow = {
    'x': 0,
    'y': 0
};

var mousePos = {
    x: 0,
    y: 0
}
var activeKey = {
    w: 0,
    a: 0,
    s: 0,
    d: 0
};
var ctx = null; //canvas
var gameMap = null; //Map
var bar;
var wallTexturs = null; //array of wall texturs

function tileSize() {
    return k * tileTexturSize;
} //return size of tile on canvas
var objects; //array of objects
var pla;
var playerStay;
var playerRun;
var debug = 0;
var cam;
var bull;
var types = {
    playerType: -1,
    wallType: 1,
    enemyBulletType: 2
}
var sizes = {
    playerXSize: 25,
    playerYSize: 31,
    tileTexturSize: 20,
    smallBulletSize: 9,
    BigBulletSize: 20
}

var barTexturs;

//types 1 - wall, -1 - player, 2 - small red bullet
var test;
var testWeapon;

var pistolTexturs;
var machineGunTexturs;
var shotgunTexturs;
var crossbowTexturs;
