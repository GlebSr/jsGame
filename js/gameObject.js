class gameObject {
    box;
    solid;
    used;
    constructor(x = 0, y = 0, xSize = 10, ySize = 10, solid_ = 0, used_ = 0) {
        this.box = new hitBox(x, y, xSize, ySize);
        this.solid = solid_;
        this.used = used_;
    }

    getX(){
        return this.box.getX();
    }

    getY(){
        return this.box.getY();
    }

    setX(x_){
        return this.box.setX(x_);
    }

    setY(y_){
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

    collision(object) {
        return this.box.collision(object.box);
    }
}

class moveableObject extends gameObject {
    vec2;
    maxSpeed;
    constructor(x = 0, y = 0, xSize = 10, ySize = 10, solid = 0, used = 0, speed = 0, vecX = 0, vecY = 0){
        super(x,y,xSize,ySize,solid,used);
        this.maxSpeed = speed;
        this.vec2 = new vec2d(vecX, vecY);
    }

    getMaxSpeed(){
        return this.maxSpeed;
    }

    setMaxSpeed(speed){
        this.maxSpeed = speed;
    }

    getVec2(){
        return this.vec2;
    }

    setVec2(vec){
        this.vec2.copy(vec);
    }

    move(){
        this.box.move(this.vec2,this.speed);
    }

}

class staticObject extends gameObject {
    constructor(x = 0, y = 0, xSize = 10, ySize = 10, solid = 0, used = 0){
        super(x,y,xSize,ySize,solid,used);
    }
}

class wall extends staticObject{
    constructor(x = 0, y = 0, xSize = 10, ySize = 10, solid = 0, speed = 0, vecX = 0, vecY = 0,){
        super(x,y,xSize,ySize,solid,used);
    }

    draw(){
        if(this.used){

            ctx.drawImage(texturs,wallTexturs[0].getX(),wallTexturs[0].getY(),wallTexturs[0].getXSize(),wallTexturs[0].getYSize(),this.getX() * k,this.getY() * k - (this.box.getYSize()/3) * k, this.box.getXSize() * k, this.box.getYSize() * k);
        }
    }
}

class player extends moveableObject{
    isRun;
    xzerk;
    stayAnim;
    runAnim;
    constructor(x = 0, y = 0, xSize = 10, ySize = 10, solid = 1, used = 1, speed_ = 20, vecX = 0, vecY = 0){
        super(x,y,xSize,ySize,solid,used,speed_,vecX,vecY);
        this.isRun = 0;
        this.stayAnim = new anim(playerStay,10);
        this.runAnim = new anim(playerRun,10);
        this.xzerk = 0;
    }

    move(){
        //console.log(this.getY());
        let x = 0 + activeKey.d - activeKey.a;
        let y = 0 + activeKey.s - activeKey.w;
        if(x != 0 || y != 0) this.isRun = 1;
        else this.isRun = 0;
        if(x > 0 && this.isRun) this.xzerk = 0;
        if(x < 0 && this.isRun) this.xzerk = 1;
        let v = new vec2d(x,y);
        this.setVec2(v);
        //console.log(this.speed);
        this.box.move(this.vec2,this.maxSpeed);
        //console.log(this.getY());
    }

    draw(){
        //console.log(this.getY());
        if(this.isRun){
            this.runAnim.draw(this.getX() * k, this.getY() * k, this.getBox().getXSize() * k, this.getBox().getYSize() * k,this.xzerk);
        }
        else{

            this.stayAnim.draw(this.getX() * k, this.getY() * k, this.getBox().getXSize() * k, this.getBox().getYSize() * k,this.xzerk);
        }
    }
}
