function render() {
    onResize();
    ctx.imageSmoothingEnabled = false;
    gameMap.draw();
    pla.move();
    pla.draw();
    

}
