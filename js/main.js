function onResize() {
    szWindow.x = window.innerWidth;
    szWindow.y = window.innerHeight;
    let cvs = document.getElementById("canvas");
    cvs.setAttribute('width', szWindow.x);
    cvs.setAttribute('height', szWindow.y);

}

function getMousePos() {
    document.addEventListener("mousemove", function(e) {
        mousePos.x = e.pageX;
        mousePos.y = e.pageY;

    });
}

function generateMap() {
    for (let i = 0; i < 2; i++) {
        let x = Math.floor(Math.random() * (gameMap.getSizeX() - 1));
        let y = Math.floor(Math.random() * (gameMap.getSizeY() - 1));
        if (gameMap.getTile(x, y).getType() != 1) gameMap.setTile(x, y, 1);
        else i--;
    }
    for (let i = 0; i < gameMap.getSizeX(); i++) {
        let w = new wall(i * sizes.tileTexturSize, 0);
        let w2 = new wall(0, i * sizes.tileTexturSize);
        let w3 = new wall((gameMap.getSizeX() - 1) * sizes.tileTexturSize, i * sizes.tileTexturSize);
        let w4 = new wall(i * sizes.tileTexturSize, (gameMap.getSizeX() - 1) * sizes.tileTexturSize);
        objects.push(w);
        objects.push(w2);
        objects.push(w3);
        objects.push(w4);
    }

}

function onKeydown(e) {
    if (e.key == 'w' || e.key == 'ц') activeKey.w = 1;
    if (e.key == 'a' || e.key == 'ф') activeKey.a = 1;
    if (e.key == 's' || e.key == 'ы') activeKey.s = 1;
    if (e.key == 'd' || e.key == 'в') activeKey.d = 1;
}

function onKeyup(e) {
    if (e.key == 'w' || e.key == 'ц') activeKey.w = 0;
    if (e.key == 'a' || e.key == 'ф') activeKey.a = 0;
    if (e.key == 's' || e.key == 'ы') activeKey.s = 0;
    if (e.key == 'd' || e.key == 'в') activeKey.d = 0;
}

function lcm(e) {
    if (e) {
        console.log(e.which);

    }
}

function rcm(e) {
    if (e) {
        e.preventDefault();
        console.log(e.which);
    }
}

function init() {

    window.addEventListener('keydown', onKeydown);
    window.addEventListener('keyup', onKeyup);
    window.addEventListener('click', lcm);
    document.addEventListener("contextmenu", rcm);

    ctx = document.getElementById("canvas").getContext("2d");
    texturs = new Image()
    texturs.src = "images/texturs.png";
    objects = new Array();
    textursLoad();

    gameMap = new map(10, 10);
    pla = new player(100, 100, 2, 10, 5, 7, 3, 200, 180);
    objects = new Array(1);
    objects[0] = new wall(200, 300);
    cam = new point(0, 0);
    bull = new hitBox(120, 31, 9, 9);
    objects[1] = new smallEnemyBullet(30, 30, 1, 2, 1, 1, 2);
    objects[2] = new smallEnemyBullet(30, 30, 1, 2, 1, 1, 2);
    objects[3] = new smallEnemyBullet(30, 30, 1, 2, 1, 1, 2);
    machineGun = new crossbow();
    generateMap();
    bar = new statusBar();
    texturs.onload = function() {

        let myFont = new FontFace('myFont', 'url(PixeloidMono.ttf)');
        myFont.load().then((myFont) => {
            document.fonts.add(myFont);
            setInterval(render, 10);
        });

    }


}


function textursLoad() {
    tileTexturs = new Array(6);
    for (let i = 0; i < sizes.tileTexturSize * 6; i += sizes.tileTexturSize) {
        tileTexturs[i / sizes.tileTexturSize] = new hitBox(i, 62, sizes.tileTexturSize, sizes.tileTexturSize);
    }

    wallTexturs = Array(1);
    for (let i = 100; i < 100 + sizes.tileTexturSize * 1; i += sizes.tileTexturSize) {
        wallTexturs[(i - 100) / sizes.tileTexturSize] = new hitBox(i, 32, sizes.tileTexturSize, sizes.tileTexturSize * 1.5);
    }

    playerStay = new Array(8);
    for (let i = 0; i < 200; i += 25) {
        playerStay[i / 25] = new hitBox(i, 0, sizes.playerXSize, sizes.playerYSize);
    }

    playerRun = new Array(4);
    for (let i = 0; i < 100; i += 25) {
        playerRun[i / 25] = new hitBox(i, 31, sizes.playerXSize, sizes.playerYSize);
    }

    barTexturs = new Array(4);
    barTexturs[0] = new hitBox(0, 82, 56, 34);
    barTexturs[1] = new hitBox(56, 82, 39, 8);
    barTexturs[2] = new hitBox(56, 90, 39, 8);
    barTexturs[3] = new hitBox(56, 98, 39, 8);
    machineGunTexturs = new Array(3);
    for (let i = 0; i < 3; i++) {
        machineGunTexturs[i] = new hitBox(120 + i * 27, 40, 27, 11);
    }
    pistolTexturs = new Array(3);
    for (let i = 0; i < 3; i++) {
        pistolTexturs[i] = new hitBox(151 + i * 13, 31, 13, 9);
    }
    shotgunTexturs = new Array(3);
    for (let i = 0; i < 3; i++) {
        shotgunTexturs[i] = new hitBox(120 + i * 24, 53, 24, 8);
    }
    crossbowTexturs = new Array(3);
    for (let i = 0; i < 3; i++) {
        crossbowTexturs[i] = new hitBox(140 + i * 17, 62, 17, 12)
    }
}
