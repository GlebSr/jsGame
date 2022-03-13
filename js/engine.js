function processing() {
    pla.move();
    cam.setX(szWindow.x / 2 - pla.getBox().getCentre().x * k);
    cam.setY(szWindow.y / 2 - pla.getBox().getCentre().y * k);
}
