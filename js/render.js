function render() {
    getMousePos();
    onResize();
    if(menuStage == 1){
        if(!pause){
            processing();
        }
        ctx.imageSmoothingEnabled = false;
        gameMap.draw();
        let i = 0;
        for (; i < objects.length && objects[i].getBottomY() < pla.getBottomY(); i++) {
            objects[i].draw();
        }
        pla.draw();
        inv.draw();
        for (; i < objects.length; i++) {
            objects[i].draw();
        }
        bar.draw();
        drawHud();
        if(pause)  pauseMen.draw();
    }
    if(!menuStage) {

        ctx.fillStyle = '#777799';
        ctx.fillRect(0,0,szWindow.x,szWindow.y);
        men.draw();
    }
    if(menuStage == 2){
        endMen.draw();
    }

}

function drawHud(){
    ctx.drawImage(texturs,0,116,33,33,0,szWindow.y - 33*k,33*k,33*k);
    ctx.drawImage(texturs,0,116,33,33,33*k,szWindow.y - 33*k,33*k,33*k);
    ctx.drawImage(texturs,0,116,33,33,2*33*k,szWindow.y - 33*k,33*k,33*k);
    ctx.drawImage(texturs,0,116,33,33,3*33*k,szWindow.y - 33*k,33*k,33*k);
    let c = inv.chousen();

    if(c == 1)
    ctx.drawImage(texturs,pistolTexturs[2].getX(),pistolTexturs[2].getY(), pistolTexturs[2].getXSize(),Math.round(pistolTexturs[2].getYSize()), (33/2 - pistolTexturs[2].getXSize())*k,szWindow.y - (33/2 + pistolTexturs[2].getYSize())*k, pistolTexturs[2].getXSize()*k*2,pistolTexturs[2].getYSize()*k*2);
    else
    ctx.drawImage(texturs,pistolTexturs[1].getX(),pistolTexturs[1].getY(), pistolTexturs[1].getXSize(),Math.round(pistolTexturs[1].getYSize()), (33/2 - pistolTexturs[1].getXSize())*k,szWindow.y - (33/2 + pistolTexturs[1].getYSize())*k, pistolTexturs[1].getXSize()*k*2,pistolTexturs[2].getYSize()*k*2);

    if(c == 2)
    ctx.drawImage(texturs,machineGunTexturs[2].getX(),machineGunTexturs[2].getY(),
    machineGunTexturs[2].getXSize(),Math.round(machineGunTexturs[2].getYSize()),
    (99 - machineGunTexturs[2].getXSize())*k/2,szWindow.y - (33 + machineGunTexturs[2].getYSize())*k/2,
    machineGunTexturs[2].getXSize()*k,machineGunTexturs[2].getYSize()*k);
    else
    ctx.drawImage(texturs,machineGunTexturs[1].getX(),machineGunTexturs[1].getY(),
    machineGunTexturs[1].getXSize(),Math.round(machineGunTexturs[1].getYSize()),
    (99 - machineGunTexturs[1].getXSize())*k/2,szWindow.y - (33 + machineGunTexturs[1].getYSize())*k/2,
    machineGunTexturs[1].getXSize()*k,machineGunTexturs[2].getYSize()*k);

    if(c == 3)
    ctx.drawImage(texturs,shotgunTexturs[2].getX(),shotgunTexturs[2].getY(),
    shotgunTexturs[2].getXSize(),Math.round(shotgunTexturs[2].getYSize()),
    (33*5 - shotgunTexturs[2].getXSize())*k/2,szWindow.y - (33 + shotgunTexturs[2].getYSize())*k/2,
    shotgunTexturs[2].getXSize()*k,shotgunTexturs[2].getYSize()*k);
    else
    ctx.drawImage(texturs,shotgunTexturs[1].getX(),shotgunTexturs[1].getY(),
    shotgunTexturs[1].getXSize(),Math.round(shotgunTexturs[1].getYSize()),
    (33*5 - shotgunTexturs[1].getXSize())*k/2,szWindow.y - (33 + shotgunTexturs[1].getYSize())*k/2,
    shotgunTexturs[1].getXSize()*k,shotgunTexturs[2].getYSize()*k);

    if(c == 4)
    ctx.drawImage(texturs,crossbowTexturs[2].getX(),crossbowTexturs[2].getY(),
    crossbowTexturs[2].getXSize(),Math.round(crossbowTexturs[2].getYSize()),
    (33*7 - crossbowTexturs[2].getXSize())*k/2,szWindow.y - (33 + crossbowTexturs[2].getYSize())*k/2,
    crossbowTexturs[2].getXSize()*k,crossbowTexturs[2].getYSize()*k);
    else
    ctx.drawImage(texturs,crossbowTexturs[1].getX(),crossbowTexturs[1].getY(),
    crossbowTexturs[1].getXSize(),Math.round(crossbowTexturs[1].getYSize()),
    (33*7 - crossbowTexturs[1].getXSize())*k/2,szWindow.y - (33 + crossbowTexturs[1].getYSize())*k/2,
    crossbowTexturs[1].getXSize()*k,crossbowTexturs[2].getYSize()*k);

    ctx.fillStyle = 'white';
    ctx.font =  k * 6 + "px myFont";
    let s = 1 + '';
    ctx.fillText(s,k * 3,szWindow.y - (33*k - k * 9));
    s = 2 + '';
    ctx.fillText(s,33 * k + k * 3,szWindow.y - (33*k - k * 9));
    s = 3 + '';
    ctx.fillText(s,66 * k + k * 3,szWindow.y - (33*k - k * 9));
    s = 4 + '';
    ctx.fillText(s,99 * k + k * 3,szWindow.y - (33*k - k * 9));

}
