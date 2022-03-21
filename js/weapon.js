class weapon {
    type;
    attackSpeed;
    toShoot;
    damage;
    constructor(type_ = 0, damage_ = 1, attackSpeed_ = 2000, unloced = 0) {
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
        super(0,damage ,attackSpeed, used, unloced);
    }
    draw() {
        if(this.toShoot) this.toShoot--;
        if (mousePos.x >= szWindow.x / 2) {
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

    shoot(){
        if(!this.toShoot){
            pla.setAmmo(pla.getAmmo()-1);
            let ve = new vec2d(mousePos.x - szWindow.x / 2, mousePos.y - szWindow.y / 2);
            let x  = pla.getBox().getXSize()/2 * ve.getX();
            if(ve.getX()) x += sizes.bigPlayerBulletSize *ve.getX() /  Math.abs(ve.getX());
            let y = pla.getBox().getYSize()/2 * ve.getY();
            let bu = new bigPlayerBullet(pla.getX() + x, pla.getY() + pla.getBox().getYSize()/2 + y, mousePos.x - szWindow.x/2, mousePos.y - szWindow.y/2 -k*sizes.bigPlayerBulletSize);
            objects.push(bu);
            this.toShoot = this.attackSpeed;
        }
    }
}

class pistol extends weapon {
    constructor(damage = 1, attackSpeed = 200, used = 1, unloced = 0) {
        super(0,damage ,attackSpeed, used, unloced);
    }
    draw() {
        if(this.toShoot) this.toShoot--;
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
    shoot(){
        if(!this.toShoot){
            pla.setAmmo(pla.getAmmo()-1);
            let ve = new vec2d(mousePos.x - szWindow.x / 2, mousePos.y - szWindow.y / 2);
            let x  = 12 * ve.getX();
            if(ve.getX() > 0) x = pla.getBox().getXSize()/2 - sizes.mediumPlayerBulletSize*2;
            else x = -pla.getBox().getXSize()/2;
            let y =  0;
            if(x < 0) x -= sizes.mediumPlayerBulletSize;
            let bu = new mediumPlayerBullet(pla.getX() + pla.getBox().getXSize()/2 + x, pla.getY() + pla.getBox().getYSize()/2 + y,mousePos.x - szWindow.x/2,mousePos.y - szWindow.y/2 - k*sizes.mediumPlayerBulletSize);
            objects.push(bu);
            this.toShoot = this.attackSpeed;
        }
    }
}


class shotgun extends weapon {
    constructor(damage = 1, attackSpeed = 200, used = 1, unloced = 0) {
        super(0,damage ,attackSpeed, used, unloced);
    }
    draw() {
        if(this.toShoot) this.toShoot--;
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
    shoot(){
        if(!this.toShoot){
            pla.setAmmo(pla.getAmmo()-1);
            let ve = new vec2d(mousePos.x - szWindow.x / 2, mousePos.y - szWindow.y / 2);
            let x  = pla.getBox().getXSize()/2 * ve.getX();
            let y = pla.getBox().getYSize()/3 * ve.getY();
            let bu = new smallPlayerBullet(pla.getX()+pla.getBox().getXSize()/2 + x, pla.getY() + pla.getBox().getYSize()/2 + y, mousePos.x - szWindow.x/2, mousePos.y - szWindow.y/2 -sizes.smallPlayerBulletSize);
            let bu2 = new smallPlayerBullet(pla.getX()+pla.getBox().getXSize()/2 + x, pla.getY() + pla.getBox().getYSize()/2 + y, (mousePos.x - szWindow.x/2)*Math.cos(Math.PI/6) - (mousePos.y - szWindow.y/2)*Math.sin(Math.PI/6), (mousePos.y - szWindow.y/2)*Math.cos(Math.PI/6) + (mousePos.x - szWindow.x/2)*Math.sin(Math.PI/6) -sizes.smallPlayerBulletSize);
            let bu3 = new smallPlayerBullet(pla.getX()+pla.getBox().getXSize()/2 + x, pla.getY() + pla.getBox().getYSize()/2 + y, (mousePos.x - szWindow.x/2)*Math.cos(Math.PI/6) + (mousePos.y - szWindow.y/2)*Math.sin(Math.PI/6), (mousePos.y - szWindow.y/2)*Math.cos(Math.PI/6) - (mousePos.x - szWindow.x/2)*Math.sin(Math.PI/6) -sizes.smallPlayerBulletSize);

            let bu4 = new smallPlayerBullet(pla.getX()+pla.getBox().getXSize()/2 + x, pla.getY() + pla.getBox().getYSize()/2 + y, (mousePos.x - szWindow.x/2)*Math.cos(Math.PI/12) - (mousePos.y - szWindow.y/2)*Math.sin(Math.PI/12), (mousePos.y - szWindow.y/2)*Math.cos(Math.PI/12) + (mousePos.x - szWindow.x/2)*Math.sin(Math.PI/12) -sizes.smallPlayerBulletSize);
            let bu5 = new smallPlayerBullet(pla.getX()+pla.getBox().getXSize()/2 + x, pla.getY() + pla.getBox().getYSize()/2 + y, (mousePos.x - szWindow.x/2)*Math.cos(Math.PI/12) + (mousePos.y - szWindow.y/2)*Math.sin(Math.PI/12), (mousePos.y - szWindow.y/2)*Math.cos(Math.PI/12) - (mousePos.x - szWindow.x/2)*Math.sin(Math.PI/12) -sizes.smallPlayerBulletSize);
            objects.push(bu);
            objects.push(bu2);
            objects.push(bu3);
            objects.push(bu4);
            objects.push(bu5);
            this.toShoot = this.attackSpeed;
        }
    }

}


class crossbow extends weapon {
    constructor(damage = 1, attackSpeed = 200, used = 1, unloced = 0) {
        super(0,damage, attackSpeed, used, unloced);
    }
    draw() {
        if(this.toShoot) this.toShoot--;
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
    shoot(){
        if(!this.toShoot){
            pla.setAmmo(pla.getAmmo()-1);
            let ve = new vec2d(mousePos.x - szWindow.x / 2, mousePos.y - szWindow.y / 2);
            let x  = pla.getBox().getXSize()/2 * ve.getX();
            if(ve.getX()) x += sizes.bigPlayerBulletSize *ve.getX() /  Math.abs(ve.getX());
            let y = pla.getBox().getYSize()/2 * ve.getY();
            let bu = new arrow(pla.getX() + x, pla.getY() + pla.getBox().getYSize()/2 + y,mousePos.x - szWindow.x/2, mousePos.y - szWindow.y/2 -k*sizes.bigPlayerBulletSize);
            objects.push(bu);
            this.toShoot = this.attackSpeed;
        }
    }
}
