class hitBox {
    p;
    xSize;
    ySize;
    constructor(x = 0 y = 0 xSize_ = 10 ySize = 10) {
        this.p = new point(x,y);
        this.xSize = xSize_;
        this.ySize = ySize_;
    }

    get x() {
        return this.p.x;
    }

    get y() {
        return this.p.y;
    }

    get xSize() {
        return this.xSize;
    }

    get ySize() {
        return this.ySize;
    }

    set x(x = 0) {
        this.p.x = x;
    }

    set y(y = 0) {
        this.p.y = y;
    }

    set xSize(xSize_ = 0) {
        this.xSize = xSize_;
    }

    set ySize(ySize_ = 0) {
        this.ySize = ySize_;
    }

    setPos(x = 0, y = 0) {
        this.p.setPos(x,y);
    }

    setSize(xSize_ = 10, ySize_ = 10) {
        this.xSize = xSize_;
        this.ySize = ySize_;
    }

    collision(box) {
        return (this.x + this.xSize > box.x && box.x + box.xSize > this.x) &&
            (this.y + this.ySize > box.y && box.y + box.ySize > this.y);
    }

    move(vec){
        this.p.move(vec);
    }

    resize(xSize_, ySize_){
        this.xSize = xSize_;
        this.ySize = ySize_;
    }

    getCentre(){
        let p_ = new point((this.x + this.xSize)/2, (this.y + this.ySize)/2);
        return p_;
    }
}
