class chunk {
    box;
    solid;
    constructor(x = 0, y = 0, xSize = 10, ySize = 10, solid_ = 1) {
        this.box = new hitBox(x,y,xSize,ySize);
        this.solid = solid_;
    }

    getPos(){
        return box.p;
    }

    setPos(p){
        box.setPos(p.x, p.y);
    }

    get solid(){
        return solid;
    }

    set solid(solid_){
        this.solid = solid_;
    }
    
    collision(object){
        return this.box.collision(object.box);
    }
}
