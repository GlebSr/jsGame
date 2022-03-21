function processing() {
    if(!toSpawn){
        let ent = new enemy(sizes.tileTexturSize + sizes.tileTexturSize*Math.random()*(gameMap.getSizeX() - 3),sizes.tileTexturSize + sizes.tileTexturSize*Math.random()*(gameMap.getSizeY() - 3),25,31,0.5);
        let ent2 = new enemy(sizes.tileTexturSize + sizes.tileTexturSize*Math.random()*(gameMap.getSizeX() - 3),sizes.tileTexturSize + sizes.tileTexturSize*Math.random()*(gameMap.getSizeY() - 3),25,31,0.5);
        let ent3 = new enemy(sizes.tileTexturSize + sizes.tileTexturSize*Math.random()*(gameMap.getSizeX() - 3),sizes.tileTexturSize + sizes.tileTexturSize*Math.random()*(gameMap.getSizeY() - 3),25,31,0.5);
        objects.push(ent);
        objects.push(ent2);
        objects.push(ent3);
        toSpawn = spawnRate;
        spawnRate--;
    }
    else {
        toSpawn--;
    }
    pla.move();
    inv.shoot();
    for (let i = 0; i < objects.length; i++) {
        if(!objects[i].isUsed()){
            objects.splice(i, 1);
            i--;
        }
        switch (objects[i].getType()) {
            case 2:
                objects[i].move();
                if (objects[i].collision()) {
                    objects.splice(i, 1);
                    i--;
                }
                break;
            case 3:
                objects[i].move();
                if (objects[i].collision()) {
                    objects.splice(i, 1);
                    i--;
                }
                break;
            case 4:
                objects[i].move();
                break;
            case 5:
                if(pla.collision(objects[i])){
                    pla.pickupAmmo(objects[i].getAmmo());
                    objects.splice(i, 1);
                    i--;
                    score++;
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
