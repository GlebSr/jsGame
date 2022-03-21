class gameObject {
    box;
    solid;
    used;
    type;
    constructor(ObjectType = 0, x = 0, y = 0, xSize = 10, ySize = 10, solid_ = 0, used_ = 0) {
        this.box = new hitBox(x, y, xSize, ySize);
        this.solid = solid_;
        this.used = used_;
        this.type = ObjectType;
    }

    getCentre() {
        return this.box.getCentre();
    }

    getBottomY() {
        return this.box.getBottomY();
    }

    getX() {
        return this.box.getX();
    }

    getY() {
        return this.box.getY();
    }

    setX(x_) {
        return this.box.setX(x_);
    }

    setY(y_) {
        return this.box.setY(y_);
    }

    isSolid() {
        return this.solid;
    }

    setSolid(solid_) {
        this.solid = solid_;
    }

    getBox() {
        return this.box;
    }

    setBox(box_) {
        this.box.copy(box_);
    }

    isUsed() {
        return this.used;
    }

    setUsed(used_) {
        this.used = used_;
    }

    collision(obj) {
        return this.box.collision(obj.getBox());
    }

    getType() {
        return this.type;
    }
}
//_________________________________________
class moveableObject extends gameObject {
    vec2;
    maxSpeed;
    constructor(type = 0, x = 0, y = 0, xSize = 10, ySize = 10, solid = 0, used = 0, speed = 0, vecX = 0, vecY = 0) {
        super(type, x, y, xSize, ySize, solid, used, speed, vecX, vecY);
        this.maxSpeed = speed;
        this.vec2 = new vec2d(vecX, vecY);
    }
    getMaxSpeed() {
        return this.maxSpeed;
    }

    setMaxSpeed(speed) {
        this.maxSpeed = speed;
    }

    getVec2() {
        return this.vec2;
    }

    setVec2(vec) {
        this.vec2.copy(vec);
    }

    move() {
        this.box.move(this.vec2, this.maxSpeed);
    }

}
//_________________________________________
class staticObject extends gameObject {
    constructor(type = 0, x = 0, y = 0, xSize = 10, ySize = 10, solid = 0) {
        super(type, x, y, xSize, ySize, solid,1);
    }
}
//_________________________________________
class wall extends staticObject {
    constructor(x = 0, y = 0, solid = 1) {
        super(types.wallType, x, y, sizes.tileTexturSize, sizes.tileTexturSize, solid);
    }
    draw() {
        if (this.used) {
            ctx.drawImage(texturs, Math.round(wallTexturs[0].getX()), Math.round(wallTexturs[0].getY()), Math.round(wallTexturs[0].getXSize()), Math.round(wallTexturs[0].getYSize()), Math.round(this.getX() * k + cam.getX()), Math.round(this.getY() * k - (this.box.getYSize() / 2) * k + cam.getY()), Math.round(this.box.getXSize() * k), Math.round(this.box.getYSize() * 1.5 * k));
        }
        if (debug) {
            this.box.draw();
            this.box.drawBottomY();
        }

    }
}
//_________________________________________
class entity extends moveableObject {
    moveBox;
    xzerk;
    isRun;
    stayAnim;
    runAnim;
    hp;
    maxHp;
    constructor(type = 0, x = 0, y = 0, xSize = 10, ySize = 10, solid = 1, used = 1, speed_ = 20, stayAnim_ = playerStay, runAnim_ = playerRun, maxHp_ = 10, hp_ = 10, vecX = 0, vecY = 0) {
        super(type, x, y, xSize, ySize, solid, used, speed_, vecX, vecY);
        this.maxHp = maxHp_;
        this.hp = hp_;
        this.isRun = 0;
        this.stayAnim = new anim(stayAnim_, 10);
        this.runAnim = new anim(runAnim_, 10);
        this.xzerk = 0;
        this.moveBox = new hitBox(x, y + ySize - sizes.tileTexturSize / 2, xSize, sizes.tileTexturSize / 2);
    }

    moveCollision(object) {
        return this.moveBox.collision(object.box);
    }

    getHp() {
        return this.hp;
    }

    setHp(hp_) {
        this.hp = hp_;
    }

    getMaxHp() {
        return this.maxHp;
    }

    setMaxHp(maxHp_) {
        this.maxHp = maxHp_;
    }

    getMoveBox() {
        return this.moveBox;
    }

    damage(dmg){
        this.hp -= dmg;
        if(hp <= 0){
            this.used = 0;
        }
    }

    draw() {
        if (this.isRun) {
            this.runAnim.draw(this.getX() * k + cam.getX(), this.getY() * k + cam.getY(), this.getBox().getXSize() * k, this.getBox().getYSize() * k, this.xzerk);
        } else {

            this.stayAnim.draw(this.getX() * k + cam.getX(), this.getY() * k + cam.getY(), this.getBox().getXSize() * k, this.getBox().getYSize() * k, this.xzerk);
        }
        if (debug) {
            this.getBox().draw();
            this.getMoveBox().draw('red');
            this.getBox().drawBottomY();
        }
    }
    damage(damage) {
        this.hp -= damage;
        if (this.hp <= 0) this.used = 0;
    }
}

class player extends entity {
    maxDefence;
    defence;
    maxAmmo;
    ammo;
    alive;
    currentWeapon;
    defenceRecharge;
    toRecharge;
    constructor(x = 0, y = 0, speed = 2, maxHp = 10, hp = 10, maxDefence_ = 7, defence_ = 7, maxAmmo_ = 200, ammo_ = 200, vecX = 0, vecY = 0) {
        super(types.playerType, x, y, sizes.playerXSize, sizes.playerYSize, 1, 1, speed, playerStay, playerRun, maxHp, hp, vecX, vecY);
        this.maxDefence = maxDefence_;
        this.defence = defence_;
        this.maxAmmo = maxAmmo_;
        this.ammo = ammo_;
        this.alive = 1;
        this.currentWeapon = 0;
        this.defenceRecharge = 200;
        this.toRecharge = 0;
    }

    getMaxDefence() {
        return this.maxDefence;
    }

    getMaxAmmo() {
        return this.maxAmmo;
    }

    getDefence() {
        return this.defence;
    }

    getAmmo() {
        return this.ammo;
    }

    setMaxDefence(md) {
        this.maxDefence = md;
    }

    setMaxAmmo(ma) {
        this.maxAmmo = ma;
    }

    setDefence(d) {
        this.defence = d;
    }

    setAmmo(a) {
        this.ammo = a;
    }

    move() {
        if(this.getDefence() < this.getMaxDefence()){
            if(!this.toRecharge){
                this.defence += 1;
                this.toRecharge = this.defenceRecharge;
            }
            else this.toRecharge--;
        }
        let x = 0 + activeKey.d - activeKey.a;
        let y = 0 + activeKey.s - activeKey.w;

        if (x != 0 || y != 0) {
            this.isRun = 1;
        } else {
            this.isRun = 0;
            return;
        }

        if (x > 0 && this.isRun) this.xzerk = 0;
        if (x < 0 && this.isRun) this.xzerk = 1;

        let v = new vec2d(x, y);
        let vx = new vec2d(v.getX(), 0);
        let vy = new vec2d(0, v.getY());

        this.box.move(vx, this.maxSpeed);
        this.moveBox.move(vx, this.maxSpeed);

        for (let i = 0; i < objects.length; i++) {
            if (objects[i].isUsed() && objects[i].isSolid() && this.moveCollision(objects[i])) {
                for (let j = 0; j <= this.maxSpeed; j++) {
                    if (this.moveCollision(objects[i])) {
                        this.box.move(vx, -1);
                        this.moveBox.move(vx, -1);
                    } else break;
                }

            }
        }

        this.box.move(vy, this.maxSpeed);
        this.moveBox.move(vy, this.maxSpeed);

        for (let i = 0; i < objects.length; i++) {
            if (objects[i].isUsed() && objects[i].isSolid() && this.moveCollision(objects[i])) {
                for (let j = 0; j <= this.maxSpeed; j++) {
                    if (this.moveCollision(objects[i])) {
                        this.box.move(vy, -1);
                        this.moveBox.move(vy, -1);
                    } else break;
                }

            }
        }

    }
    damage(dm) {
        if (this.defence >= dm) {
            this.defence -= dm;
        } else {
            dm -= this.defence;
            this.defence = 0;
            if (this.hp <= dm) {
                this.hp = 0;
                this.alive = 0;
                menuStage = 2;
            } else this.hp -= dm;
        }

    }

    isAlive() {
        return this.alive;
    }

    kill() {
        this.alive = 0;
    }
    draw() {
        if (this.isRun) {
            this.runAnim.draw(this.getX() * k + cam.getX(), this.getY() * k + cam.getY(), this.getBox().getXSize() * k, this.getBox().getYSize() * k, this.xzerk);
        } else {

            this.stayAnim.draw(this.getX() * k + cam.getX(), this.getY() * k + cam.getY(), this.getBox().getXSize() * k, this.getBox().getYSize() * k, mousePos.x < szWindow.x / 2);
        }
        if (debug) {
            this.getBox().draw();
            this.getMoveBox().draw('red');
            this.getBox().drawBottomY();
        }
    }

    pickupAmmo(am){
        this.ammo += am;
        if(this.ammo > this.maxAmmo) this.ammo = this.maxAmmo;
    }
}

class bullet extends moveableObject {
    damage;
    textur;
    constructor(type = 0,textur_, x = 0, y = 0, xSize = 0, ySize = 0, used = 1, speed = 2, xVec = 0, yVec = 0, damage_ = 0) {
        super(type, x, y, xSize, ySize, 0, used, speed, xVec, yVec);
        this.damage = damage_;
        this.textur = new hitBox();
        this.textur.copy(textur_);
    }

    draw() {
        if (this.used) {
            ctx.save();
            ctx.translate(Math.round(this.getX() * k + cam.getX()),Math.round(this.getY() * k + cam.getY()));
            ctx.translate(Math.round(this.box.getXSize() * k/2),Math.round(this.box.getYSize() * k/2));
            ctx.rotate(Math.atan(this.getVec2().y / this.getVec2().x));
            ctx.translate(-Math.round(this.box.getXSize() * k/2),-Math.round(this.box.getYSize() * k/2));
            if(this.vec2.getX() < 0){
                ctx.translate(Math.round(this.box.getXSize()),0);
                ctx.scale(-1,1);
                ctx.translate( -Math.round(this.box.getXSize()),0);
            }
            //ctx.translate(Math.round(round(this.box.getXSize()),0);
            ctx.drawImage(texturs, Math.round(this.textur.getX()), Math.round(this.textur.getY()), Math.round(this.textur.getXSize()), Math.round(this.textur.getYSize()), 0, 0, Math.round(this.box.getXSize() * k), Math.round(this.box.getYSize() * k));
            ctx.restore();
        }
        if (debug) {
            this.box.draw();
            this.box.drawBottomY();
        }
    }
}

class enemyBullet extends bullet{
    constructor(textur,x = 0, y = 0,xSize = 2,ySize = 2,used = 1, speed = 2, xVec = 0, yVec = 0, damage = 0){
        super(types.enemyBulletType,textur,x,y,xSize,ySize,used, speed, xVec, yVec, damage);
    }
    collision() {
        if (pla.collision(this)) {
            pla.damage(this.damage);
            return 1;
        }
        for (let i = 0; i < objects.length; i++) {
            if (objects[i].isUsed() && objects[i].isSolid() && objects[i].collision(this)) {
                return 1;
            }
        }
        if (this.getX() <= 0 || this.getX() >= gameMap.getSizeX() * sizes.tileTexturSize) return 1;
        if (this.getY() <= 0 || this.getY() >= gameMap.getSizeY() * sizes.tileTexturSize) return 1;
        return 0;
    }

}

class smallEnemyBullet extends enemyBullet {
    constructor(x = 0, y = 0, speed = 2, xVec = 0, yVec = 0, damage = 1) {
        super(enemyBulletsTexturs[0], x, y, sizes.smallEnemyBulletSize, sizes.smallEnemyBulletSize, 1, speed, xVec, yVec, damage);
    }

}

class bigEnemyBullet extends enemyBullet {
    constructor(x = 0, y = 0, used = 1, speed = 1, xVec = 0, yVec = 0, damage = 3) {
        super(enemyBulletsTexturs[1], x, y, sizes.bigEnemyBulletSize, sizes.bigEnemyBulletSize, used, speed, xVec, yVec, damage);
    }
}

class playerBullet extends bullet{
    constructor(textur,x = 0, y = 0,xSize = 2,ySize = 2,used = 1, speed = 2, xVec = 0, yVec = 0, damage = 0){
        super(types.playerBulletType,textur,x,y,xSize,ySize,used,speed,xVec,yVec,damage);
    }
    collision(){
        for(let i = 0; i < objects.length; i++){
            if(objects[i].isUsed() && (objects[i].isSolid() || objects[i].getType() == 4) && (objects[i].collision(this))){
                if(objects[i].getType() == 4) objects[i].damage(this.damage);

                return 1;
            }
        }
        if (this.getX() <= 0 || this.getX() >= gameMap.getSizeX() * sizes.tileTexturSize) return 1;
        if (this.getY() <= 0 || this.getY() >= gameMap.getSizeY() * sizes.tileTexturSize) return 1;
        return 0;
    }
}

class smallPlayerBullet extends playerBullet{
    constructor(x = 0, y = 0, xVec = 0, yVec = 0){
        super(playerBulletTexturs[1],x,y, sizes.smallPlayerBulletSize,sizes.smallPlayerBulletSize,1,bulletSpeeds.smallPlayerBulletSpeed,xVec,yVec,damages.smallPlayerBulletDamage);
    }
}

class mediumPlayerBullet extends playerBullet{
    constructor(x = 0, y = 0, xVec = 0, yVec = 0){
        super(playerBulletTexturs[2],x,y, sizes.mediumPlayerBulletSize * 4,sizes.mediumPlayerBulletSize * 2,1,bulletSpeeds.mediumPlayerBulletSpeed,xVec,yVec,damages.mediumPlayerBulletDamage);
    }
}

class bigPlayerBullet extends playerBullet{
    constructor(x = 0, y = 0, xVec = 0, yVec = 0){
        super(playerBulletTexturs[0],x,y, sizes.bigPlayerBulletSize * 4,sizes.bigPlayerBulletSize * 2,1,bulletSpeeds.bigPlayerBulletSpeed,xVec,yVec,damages.bigPlayerBulletDamage);
    }
}

class arrow extends playerBullet{
    constructor(x = 0, y = 0, xVec = 0, yVec = 0){
        super(playerBulletTexturs[3],x,y, sizes.bigPlayerBulletSize * 4,sizes.bigPlayerBulletSize * 2,1,bulletSpeeds.arrowSpeed,xVec,yVec,damages.arrowDamage);
    }
}

class enemy extends entity{
    toRecharge;
    attackSpeed;
    constructor(x = 0, y = 0, xSize = 10,ySize = 10, speed = 2, stayAnim = playerStay, runAnim = playerRun, maxHp = 10, hp = 10, xVec = 0, yVec = 0){
        super(4,x,y,xSize,ySize,0,1,speed,stayAnim,runAnim,maxHp,hp,xVec,yVec);
        this.toRecharge = 200;
        this.attackSpeed = 200;
    }
    draw() {
        if (this.isRun) {
            this.runAnim.draw(this.getX() * k + cam.getX(), this.getY() * k + cam.getY(), this.getBox().getXSize() * k, this.getBox().getYSize() * k, this.getX() > pla.getX());
        } else {

            this.stayAnim.draw(this.getX() * k + cam.getX(), this.getY() * k + cam.getY(), this.getBox().getXSize() * k, this.getBox().getYSize() * k, this.getX() > pla.getX());
        }
        if (debug) {
            this.getBox().draw();
            this.getMoveBox().draw('red');
            this.getBox().drawBottomY();
        }
    }
    move(){
        let x = pla.getX() - this.getX();
        let y = pla.getY() - this.getY();
        let v = new vec2d(x,y);
        this.box.move(v,this.maxSpeed);
        if(Math.sqrt(x*x+y*y) < 300){
            if(!this.toRecharge){
                let b = new smallEnemyBullet(this.getX(),this.getY(),2,x,y,damages.smallEnemyBulletDamage);
                objects.push(b);
                this.toRecharge = this.attackSpeed;
            }else this.toRecharge--;
        }
    }

    damage(damage) {
        this.hp -= damage;
        if (this.hp <= 0){
            this.used = 0;
            if(Math.random() < 0.2){
                let am = new smallAmmo(this.getX()+this.getBox().getXSize() - 6,this.getY() + this.getBox().getYSize() - 6, Math.round(Math.random() * 50));
                objects.push(am);
            }
        }

    }
}

class smallAmmo extends staticObject{
    ammoCount;
    constructor(x = 0, y = 0,ammos = 10){
        super(types.ammoType,x,y,6,6,0);
        this.ammoCount = ammos;
    }
    getAmmo(){
        return this.ammoCount;
    }
    draw(){
        ctx.drawImage(texturs,ammoTexture.getX(),ammoTexture.getY(),ammoTexture.getXSize(),ammoTexture.getYSize(),this.getX()*k + cam.getX(),this.getY()*k + cam.getY(),this.getBox().getXSize()*k,this.getBox().getYSize()*k);
    }
}
