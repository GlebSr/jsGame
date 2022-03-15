class weapon {
    type;
    attackSpeed;
    toShoot;
    damage;
    constructor(type_ = 0, damage_ = 1, attackSpeed_ = 200, unloced = 0) {
        this.type = type_;
        this.damage = damage_;
        this.attackSpeed = attackSpeed_;
        this.toShoot = 0;
    }

    draw() {
        if (mousePos.x > szWindow.x / 2) {
            ctx.save();
            ctx.translate(Math.round(szWindow.x / 2 - machineGunTexturs[0].getXSize() * k / 3), Math.round(szWindow.y / 2 + machineGunTexturs[0].getYSize() * k / 4));
            ctx.translate(Math.round(machineGunTexturs[0].getXSize() * k / 2), Math.round(machineGunTexturs[0].getYSize() * k / 2));


            ctx.rotate(Math.atan((mousePos.y - szWindow.y / 2) / (mousePos.x - szWindow.x / 2)));
            ctx.translate(-Math.round(machineGunTexturs[0].getXSize() * k / 2), -Math.round(machineGunTexturs[0].getYSize() * k / 2));


            ctx.drawImage(texturs, Math.round(machineGunTexturs[0].getX()), Math.round(machineGunTexturs[0].getY()), Math.round(machineGunTexturs[0].getXSize()), Math.round(machineGunTexturs[0].getYSize()), 0, 0, Math.round(machineGunTexturs[0].getXSize() * k), Math.round(machineGunTexturs[0].getYSize() * k));
            ctx.restore();
        } else {
            ctx.save();
            ctx.translate(Math.round(szWindow.x / 2 - machineGunTexturs[0].getXSize() * k / 3), Math.round(szWindow.y / 2 + machineGunTexturs[0].getYSize() * k / 4));
            ctx.translate(Math.round(machineGunTexturs[0].getXSize() * k / 5), Math.round(machineGunTexturs[0].getYSize() * k / 2));
            ctx.scale(-1, 1);

            ctx.rotate(-Math.atan((mousePos.y - szWindow.y / 2) / (mousePos.x - szWindow.x / 2)));
            ctx.translate(-Math.round(machineGunTexturs[0].getXSize() * k / 2), -Math.round(machineGunTexturs[0].getYSize() * k / 2));


            ctx.drawImage(texturs, Math.round(machineGunTexturs[0].getX()), Math.round(machineGunTexturs[0].getY()), Math.round(machineGunTexturs[0].getXSize()), Math.round(machineGunTexturs[0].getYSize()), 0, 0, Math.round(machineGunTexturs[0].getXSize() * k), Math.round(machineGunTexturs[0].getYSize() * k));
            ctx.restore();
        }
    }
}

class machineGun extends weapon {
    constructor(damage = 1, attackSpeed = 200, used = 1, unloced = 0) {
        super(0, attackSpeed, used, unloced);
    }
    draw() {
        if (mousePos.x > szWindow.x / 2) {
            ctx.save();
            ctx.translate(Math.round(szWindow.x / 2 - machineGunTexturs[0].getXSize() * k / 3), Math.round(szWindow.y / 2 + machineGunTexturs[0].getYSize() * k / 4));
            ctx.translate(Math.round(machineGunTexturs[0].getXSize() * k / 2), Math.round(machineGunTexturs[0].getYSize() * k / 2));


            ctx.rotate(Math.atan((mousePos.y - szWindow.y / 2) / (mousePos.x - szWindow.x / 2)));
            ctx.translate(-Math.round(machineGunTexturs[0].getXSize() * k / 2), -Math.round(machineGunTexturs[0].getYSize() * k / 2));


            ctx.drawImage(texturs, Math.round(machineGunTexturs[0].getX()), Math.round(machineGunTexturs[0].getY()), Math.round(machineGunTexturs[0].getXSize()), Math.round(machineGunTexturs[0].getYSize()), 0, 0, Math.round(machineGunTexturs[0].getXSize() * k), Math.round(machineGunTexturs[0].getYSize() * k));
            ctx.restore();
        } else {
            ctx.save();
            ctx.translate(Math.round(szWindow.x / 2 - machineGunTexturs[0].getXSize() * k / 3), Math.round(szWindow.y / 2 + machineGunTexturs[0].getYSize() * k / 4));
            ctx.translate(Math.round(machineGunTexturs[0].getXSize() * k / 5), Math.round(machineGunTexturs[0].getYSize() * k / 2));
            ctx.scale(-1, 1);

            ctx.rotate(-Math.atan((mousePos.y - szWindow.y / 2) / (mousePos.x - szWindow.x / 2)));
            ctx.translate(-Math.round(machineGunTexturs[0].getXSize() * k / 2), -Math.round(machineGunTexturs[0].getYSize() * k / 2));


            ctx.drawImage(texturs, Math.round(machineGunTexturs[0].getX()), Math.round(machineGunTexturs[0].getY()), Math.round(machineGunTexturs[0].getXSize()), Math.round(machineGunTexturs[0].getYSize()), 0, 0, Math.round(machineGunTexturs[0].getXSize() * k), Math.round(machineGunTexturs[0].getYSize() * k));
            ctx.restore();
        }
    }
}

class pistol extends weapon {
    constructor(damage = 1, attackSpeed = 200, used = 1, unloced = 0) {
        super(0, attackSpeed, used, unloced);
    }
    draw() {
        if (mousePos.x > szWindow.x / 2) {
            ctx.save();
            ctx.translate(Math.round(szWindow.x / 2 + pistolTexturs[0].getXSize() * k / 3), Math.round(szWindow.y / 2 + pistolTexturs[0].getYSize() * k / 4));
            ctx.translate(Math.round(pistolTexturs[0].getXSize() * k / 2), Math.round(pistolTexturs[0].getYSize() * k / 2));


            ctx.rotate(Math.atan((mousePos.y - szWindow.y / 2) / (mousePos.x - szWindow.x / 2)));
            ctx.translate(-Math.round(pistolTexturs[0].getXSize() * k / 2), -Math.round(pistolTexturs[0].getYSize() * k / 2));


            ctx.drawImage(texturs, Math.round(pistolTexturs[0].getX()), Math.round(pistolTexturs[0].getY()), Math.round(pistolTexturs[0].getXSize()), Math.round(pistolTexturs[0].getYSize()), 0, 0, Math.round(pistolTexturs[0].getXSize() * k), Math.round(pistolTexturs[0].getYSize() * k));
            ctx.restore();
        } else {
            ctx.save();
            ctx.translate(Math.round(szWindow.x / 2 - pistolTexturs[0].getXSize() * k / 3), Math.round(szWindow.y / 2 + pistolTexturs[0].getYSize() * k / 4));
            ctx.translate(-Math.round(pistolTexturs[0].getXSize() * k / 2), Math.round(pistolTexturs[0].getYSize() * k / 2));
            ctx.scale(-1, 1);

            ctx.rotate(-Math.atan((mousePos.y - szWindow.y / 2) / (mousePos.x - szWindow.x / 2)));
            ctx.translate(-Math.round(pistolTexturs[0].getXSize() * k / 2), -Math.round(pistolTexturs[0].getYSize() * k / 2));


            ctx.drawImage(texturs, Math.round(pistolTexturs[0].getX()), Math.round(pistolTexturs[0].getY()), Math.round(pistolTexturs[0].getXSize()), Math.round(pistolTexturs[0].getYSize()), 0, 0, Math.round(pistolTexturs[0].getXSize() * k), Math.round(pistolTexturs[0].getYSize() * k));
            ctx.restore();
        }
    }
}


class shotgun extends weapon {
    constructor(damage = 1, attackSpeed = 200, used = 1, unloced = 0) {
        super(0, attackSpeed, used, unloced);
    }
    draw() {
        if (mousePos.x > szWindow.x / 2) {
            ctx.save();
            ctx.translate(Math.round(szWindow.x / 2 - shotgunTexturs[0].getXSize() * k / 3), Math.round(szWindow.y / 2 + shotgunTexturs[0].getYSize() * k / 4));
            ctx.translate(Math.round(shotgunTexturs[0].getXSize() * k / 2), Math.round(shotgunTexturs[0].getYSize() * k / 2));


            ctx.rotate(Math.atan((mousePos.y - szWindow.y / 2) / (mousePos.x - szWindow.x / 2)));
            ctx.translate(-Math.round(shotgunTexturs[0].getXSize() * k / 2), -Math.round(shotgunTexturs[0].getYSize() * k / 2));


            ctx.drawImage(texturs, Math.round(shotgunTexturs[0].getX()), Math.round(shotgunTexturs[0].getY()), Math.round(shotgunTexturs[0].getXSize()), Math.round(shotgunTexturs[0].getYSize()), 0, 0, Math.round(shotgunTexturs[0].getXSize() * k), Math.round(shotgunTexturs[0].getYSize() * k));
            ctx.restore();
        } else {
            ctx.save();
            ctx.translate(Math.round(szWindow.x / 2 - shotgunTexturs[0].getXSize() * k / 3), Math.round(szWindow.y / 2 + shotgunTexturs[0].getYSize() * k / 4));
            ctx.translate(Math.round(shotgunTexturs[0].getXSize() * k / 5), Math.round(shotgunTexturs[0].getYSize() * k / 2));
            ctx.scale(-1, 1);

            ctx.rotate(-Math.atan((mousePos.y - szWindow.y / 2) / (mousePos.x - szWindow.x / 2)));
            ctx.translate(-Math.round(shotgunTexturs[0].getXSize() * k / 2), -Math.round(shotgunTexturs[0].getYSize() * k / 2));


            ctx.drawImage(texturs, Math.round(shotgunTexturs[0].getX()), Math.round(shotgunTexturs[0].getY()), Math.round(shotgunTexturs[0].getXSize()), Math.round(shotgunTexturs[0].getYSize()), 0, 0, Math.round(shotgunTexturs[0].getXSize() * k), Math.round(shotgunTexturs[0].getYSize() * k));
            ctx.restore();
        }
    }
}


class crossbow extends weapon {
    constructor(damage = 1, attackSpeed = 200, used = 1, unloced = 0) {
        super(0, attackSpeed, used, unloced);
    }
    draw() {
        if (mousePos.x > szWindow.x / 2) {
            ctx.save();
            ctx.translate(Math.round(szWindow.x / 2 - crossbowTexturs[0].getXSize() * k / 3), Math.round(szWindow.y / 2 + crossbowTexturs[0].getYSize() * k / 8));
            ctx.translate(Math.round(crossbowTexturs[0].getXSize() * k / 2), Math.round(crossbowTexturs[0].getYSize() * k / 2));


            ctx.rotate(Math.atan((mousePos.y - szWindow.y / 2) / (mousePos.x - szWindow.x / 2)));
            ctx.translate(-Math.round(crossbowTexturs[0].getXSize() * k / 2), -Math.round(crossbowTexturs[0].getYSize() * k / 2));


            ctx.drawImage(texturs, Math.round(crossbowTexturs[0].getX()), Math.round(crossbowTexturs[0].getY()), Math.round(crossbowTexturs[0].getXSize()), Math.round(crossbowTexturs[0].getYSize()), 0, 0, Math.round(crossbowTexturs[0].getXSize() * k), Math.round(crossbowTexturs[0].getYSize() * k));
            ctx.restore();
        } else {
            ctx.save();
            ctx.translate(Math.round(szWindow.x / 2 - crossbowTexturs[0].getXSize() * k / 3), Math.round(szWindow.y / 2 + crossbowTexturs[0].getYSize() * k / 8));
            ctx.translate(Math.round(crossbowTexturs[0].getXSize() * k / 5), Math.round(crossbowTexturs[0].getYSize() * k / 2));
            ctx.scale(-1, 1);

            ctx.rotate(-Math.atan((mousePos.y - szWindow.y / 2) / (mousePos.x - szWindow.x / 2)));
            ctx.translate(-Math.round(crossbowTexturs[0].getXSize() * k / 2), -Math.round(crossbowTexturs[0].getYSize() * k / 2));


            ctx.drawImage(texturs, Math.round(crossbowTexturs[0].getX()), Math.round(crossbowTexturs[0].getY()), Math.round(crossbowTexturs[0].getXSize()), Math.round(crossbowTexturs[0].getYSize()), 0, 0, Math.round(crossbowTexturs[0].getXSize() * k), Math.round(crossbowTexturs[0].getYSize() * k));
            ctx.restore();
        }
    }
}
