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

function onKeydown(klick){
    if(klick.key == 'w' || klick.key == 'ц') keyState.w = 1;
    if(klick.key == 'a' || klick.key == 'ф') keyState.a = 1;
    if(klick.key == 's' || klick.key == 'ы') keyState.s = 1;
    if(klick.key == 'd' || klick.key == 'в') keyState.d = 1;
}

function onKeyup(){
    if(klick.key == 'w' || klick.key == 'ц') keyState.w = 0;
    if(klick.key == 'a' || klick.key == 'ф') keyState.a = 0;
    if(klick.key == 's' || klick.key == 'ы') keyState.s = 0;
    if(klick.key == 'd' || klick.key == 'в') keyState.d = 0;
}

function init() {
    window.addEventListener('keydown', onKeydown);
	window.addEventListener('keyup', onKeyup);
    ctx = document.getElementById("canvas").getContext("2d");
    k = 5;
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
    gameMap = new map(50,50);
    generateMap();
    texturs.onload = function(){
        setInterval(render,10);
    }
}
