var k; //scale
var texturs = null;
var tileTexturs = null //array of tile texturs
var ctx = null; //canvas
var gameMap = null; //Map
var bar;
var wallTexturs = null; //array of wall texturs
var objects; //array of objects
var pla;
var playerStay;
var playerRun;
var debug = 0;
var cam;
var barTexturs;
var pistolTexturs;
var machineGunTexturs;
var shotgunTexturs;
var crossbowTexturs;
var enemyBulletsTexturs;
var playerBulletTexturs;
var inv;
var pause;
var button;
var onButton;
var men;
var menuStage = 0;
var spawnRate;
var toSpawn;
var ammoTexture;
var enemySaty;
var enemyRun;
var score = 0;
var szWindow = {
    'x': 0,
    'y': 0
};
var mousePos = {
    x: 0,
    y: 0
};
var activeKey = {
    w: 0,
    a: 0,
    s: 0,
    d: 0,
    l: 0
};
function tileSize() {
    return k * tileTexturSize;
} //return size of tile on canvas
var types = {
    playerType: -1,
    wallType: 1,
    enemyBulletType: 2,
    playerBulletType: 3,
    enemyType: 4,
    ammoType: 5
}
var sizes = {
    playerXSize: 25,
    playerYSize: 31,
    tileTexturSize: 20,
    smallEnemyBulletSize: 9,
    bigEnemyBulletSize: 20,
    smallPlayerBulletSize: 4,
    mediumPlayerBulletSize: 4,
    bigPlayerBulletSize: 5
}
var damages = {
    smallEnemyBulletDamage: 3,
    bigEnemyBulletDamage: 6,
    smallPlayerBulletDamage: 2,
    mediumPlayerBulletDamage: 5,
    bigPlayerBulletDamage: 3,
    arrowDamage: 10
};
var bulletSpeeds = {
    smallEnemyBulletSpeed: 4,
    bigEnemyBulletSpeed: 3,
    smallPlayerBulletSpeed: 7,
    mediumPlayerBulletSpeed: 4,
    bigPlayerBulletSpeed: 4,
    arrowSpeed: 7
};
