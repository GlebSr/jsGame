var k = null; //scale
var texturs = null;
var tileTexturs = null; //array of tile texturs
var tileTexturSize = null;
var szWindow = {'x': 0, 'y': 0};
var activeKey = {
    w: 0, a: 0, s: 0, d: 0
};
var ctx = null; //canvas
var gameMap = null; //Map

var wallTexturs = null; //array of wall texturs

function tileSize(){
    return k * tileTexturSize;
} //return size of tile on canvas
var objects; //array of objects
var pla;
var playerStay;
var playerRun;
var debug = 1;
