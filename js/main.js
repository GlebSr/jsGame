function onResize() {
    szWindow.x = window.innerWidth;
    szWindow.y = window.innerHeight;
    let cvs = document.getElementById("canvas");
	cvs.setAttribute('width', szWindow.x);
	cvs.setAttribute('height', szWindow.y);

}


function generateMap(){
    for(i = 0; i < 200; i++){
        let x = Math.floor(Math.random() * (gameMap.getSizeX() - 1));
        let y = Math.floor(Math.random() * (gameMap.getSizeY() - 1));
        if(gameMap.getTile(x,y).getType() != 1) gameMap.setTile(x,y,1);
        else i--;
    }
    //objects.push(w);

}

function onKeydown(e){
    if(e.key == 'w' || e.key == 'ц') activeKey.w = 1;
    if(e.key == 'a' || e.key == 'ф') activeKey.a = 1;
    if(e.key == 's' || e.key == 'ы') activeKey.s = 1;
    if(e.key == 'd' || e.key == 'в') activeKey.d = 1;
}

function onKeyup(e){
    if(e.key == 'w' || e.key == 'ц') activeKey.w = 0;
    if(e.key == 'a' || e.key == 'ф') activeKey.a = 0;
    if(e.key == 's' || e.key == 'ы') activeKey.s = 0;
    if(e.key == 'd' || e.key == 'в') activeKey.d = 0;
}

function init() {
    window.addEventListener('keydown', onKeydown);
	window.addEventListener('keyup', onKeyup);
    ctx = document.getElementById("canvas").getContext("2d");
    k = 2;
    objects = new Array();

    tileTexturSize = 20;
    texturs = new Image();
    texturs.src = "images/texturs.png";

    tileTexturs = new Array(6);
    for(let i = 0; i < tileTexturSize*6;i+=tileTexturSize){
        tileTexturs[i/tileTexturSize] = new hitBox(i,62,tileTexturSize,tileTexturSize);
    }
    wallTexturs = Array(1);
    for(let i = 100; i < 100 + tileTexturSize*1; i += tileTexturSize){
        wallTexturs[(i - 100)/tileTexturSize] = new hitBox(i,32,tileTexturSize,tileTexturSize*1.5);
    }

    playerStay = new Array(8);
    for(let i = 0; i < 200; i += 25){
        playerStay[i/25] = new hitBox(i,0,25,31);
    }

    playerRun = new Array(4);
    for(let i = 0; i < 100; i+= 25){
        playerRun[i/25] = new hitBox(i,31,25,31);
    }

    gameMap = new map(50,50);
    generateMap();
    pla = new player(100,100,25,31,1,1,1,playerStay,playerRun);
    objects = new Array(1);
    objects[0] = new wall(140,140,tileTexturSize,tileTexturSize,1);
    texturs.onload = function(){
        objects.sort(function(a,b){
            return a.getBottomY() - b.getBottomY();
        });
        setInterval(render,10);
    }


}
