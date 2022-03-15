function processing() {
    getMousePos();
    pla.move();
    for (let i = 0; i < objects.length; i++) {
        switch (objects[i].getType()) {
            case 2:
                objects[i].move();
                if (objects[i].collision()) {
                    objects.splice(i, 1);
                    i--
                }

                break;
            default:

        }
    }
    cam.setX(szWindow.x / 2 - pla.getBox().getCentre().x * k);
    cam.setY(szWindow.y / 2 - pla.getBox().getCentre().y * k);
    objects.sort(function(a, b) {
        return a.getBottomY() - b.getBottomY();
    });
}
