function render() {
    onResize();
    ctx.imageSmoothingEnabled = false;
    processing();
    gameMap.draw();
    let i = 0;
    for (; i < objects.length && objects[i].getBottomY() < pla.getBottomY(); i++) {
        objects[i].draw();
    }
    pla.draw();
    machineGun.draw();
    for (; i < objects.length; i++) {
        objects[i].draw();
    }
    bar.draw();

}
