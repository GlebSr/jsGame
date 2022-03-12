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
        return thix.box;
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
    constructor(x = 0, y = 0, xSize = 10, ySize = 10, solid = 1, used = 1, speed = 0, vecX = 0, vecY = 0){
        super(x,y,xSize,ySize,solid,used,speed,vecX,vecY);
    }

    move(){
        let x = 0 + keyState.d - keyState.a;
        let y = 0 + keyState.s - keyState.w;
        let v = new vec2d(x,y);
        this.setVec2(v);
        this.box.move(this.vec2,this.speed);
    }

    draw(){
        
    }
}
