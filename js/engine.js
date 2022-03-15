function processing() {
    pla.move();
    for(let i = 0; i < objects.length; i++) {
        if(objects[i].getType() > 1)
        objects[i].move();
    }
    cam.setX(szWindow.x / 2 - pla.getBox().getCentre().x * k);
    cam.setY(szWindow.y / 2 - pla.getBox().getCentre().y * k);
    objects.sort(function(a, b) {
        return a.getBottomY() - b.getBottomY();
    });
}
