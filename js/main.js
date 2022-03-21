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
    if(!pause){
        if (e.key == '1' || e.key == '!') inv.chouseWeapon(1);
        if (e.key == '2' || e.key == '@') inv.chouseWeapon(2);
        if (e.key == '3' || e.key == '#') inv.chouseWeapon(3);
        if (e.key == '4' || e.key == '$') inv.chouseWeapon(4);
    }
    if (e.keyCode == 27)
        if(pause) pause = 0;
        else pause = 1;
}

function onKeyup(e) {
    if (e.key == 'w' || e.key == 'ц') activeKey.w = 0;
    if (e.key == 'a' || e.key == 'ф') activeKey.a = 0;
    if (e.key == 's' || e.key == 'ы') activeKey.s = 0;
    if (e.key == 'd' || e.key == 'в') activeKey.d = 0;
}

function onMousedown(e){
    if(menuStage == 1) {
        if(!pause) if(e.which == 1) activeKey.l = 1;
        if(pause) if(e.which == 1) pauseMen.click();
    }
    if(!menuStage) if(e.which == 1) men.click();
    if(menuStage == 2) menuStage = 0;
}

function onMouseup(e){
    if(e.which == 1) activeKey.l = 0;
}

function lcm(e) {
    if (e) {

    }
}

function rcm(e) {
    if (e) {
        e.preventDefault();
    }
}

function start() {
    men = new startMenu();
    pauseMen = new pauseMenu();
    endMen = new endMenu();
    k = 2;
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('keyup', onKeyup);
    window.addEventListener('click', lcm);
    window.addEventListener('mousedown', onMousedown);
    window.addEventListener('mouseup', onMouseup);
    document.addEventListener("contextmenu", rcm);
    ctx = document.getElementById("canvas").getContext("2d");
    texturs = new Image()
    texturs.src = "images/texturs.png";
    textursLoad();
    texturs.onload = function() {

        let myFont = new FontFace('myFont', 'url(PixeloidMono.ttf)');
        myFont.load().then((myFont) => {
            document.fonts.add(myFont);
            menuStage = 0;
            setInterval(render, 10);
        });

    }
}

function init() {
    score = 0;
    spawnRate = 500;
    toSpawn = 500;
    menuStage = 1;
    k = 2;
    pause = 0;
    szWindow = {
        'x': 0,
        'y': 0
    };
    mousePos = {
        x: 0,
        y: 0
    };
    activeKey = {
        w: 0,
        a: 0,
        s: 0,
        d: 0,
        l: 0
    };
    damages = {
        smallEnemyBulletDamage: 3,
        bigEnemyBulletDamage: 6,
        smallPlayerBulletDamage: 2,
        mediumPlayerBulletDamage: 5,
        bigPlayerBulletDamage: 3,
        arrowDamage: 10
    };
    bulletSpeeds = {
        smallEnemyBulletSpeed: 4,
        bigEnemyBulletSpeed: 3,
        smallPlayerBulletSpeed: 7,
        mediumPlayerBulletSpeed: 4,
        bigPlayerBulletSpeed: 4,
        arrowSpeed: 7
    };
    inv = new inventory();
    objects = new Array();

    gameMap = new map(100, 100);
    pla = new player(20, 5, 1, 10, 10, 7, 7, 200, 200);
    objects = new Array();

    cam = new point(0, 0);
    bull = new hitBox(120, 31, 9, 9);
    generateMap();
    bar = new statusBar();
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
    enemyBulletsTexturs = new Array(2);
    enemyBulletsTexturs[0] = new hitBox(120,31,sizes.smallEnemyBulletSize,sizes.smallEnemyBulletSize);
    enemyBulletsTexturs[1] = new hitBox(95,82,sizes.bigEnemyBulletSize,sizes.bigEnemyBulletSize);
    playerBulletTexturs = new Array(4);
    playerBulletTexturs[0] = new hitBox(129,31,10,5);
    playerBulletTexturs[1] = new hitBox(129,36,4,4);
    playerBulletTexturs[2] = new hitBox(133,36,6,4);
    playerBulletTexturs[3] = new hitBox(140,74,13,5);
    button = new hitBox(33,116,120,20);
    onButton = new hitBox(33,136,120,19);
    ammoTexture = new hitBox(141,32,6,6);


    enemyStay = new Array(8);
    for (let i = 0; i < 200; i += 25) {
        enemyStay[i / 25] = new hitBox(i, 155, sizes.playerXSize, sizes.playerYSize);
    }

    enemyRun = new Array(4);
    for (let i = 0; i < 100; i += 25) {
        enemyRun[i / 25] = new hitBox(i, 186, sizes.playerXSize, sizes.playerYSize);
    }
}
