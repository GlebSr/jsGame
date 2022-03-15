class hitBox {
    p;
    xSize;
    ySize;
    constructor(x = 0, y = 0, xSize_ = 10, ySize_ = 10) {
        this.p = new point(x, y);
        this.xSize = xSize_;
        this.ySize = ySize_;
    }

    getX() {
        return this.p.getX();
    }

    getY() {
        return this.p.getY();
    }

    getPoint() {
        return this.p;
    }

    setPoint(p_) {
        this.p.copy(p_);
    }

    getXSize() {
        return this.xSize;
    }

    getYSize() {
        return this.ySize;
    }

    setX(x = 0) {
        this.p.setX(x);
    }

    setY(y = 0) {
        this.p.setY(y);
    }

    setXSize(xSize_ = 0) {
        this.xSize = xSize_;
    }

    setYSize(ySize_ = 0) {
        this.ySize = ySize_;
    }

    setPos(x = 0, y = 0) {
        this.p.setPos(x, y);
    }

    setSize(xSize_ = 10, ySize_ = 10) {
        this.xSize = xSize_;
        this.ySize = ySize_;
    }

    collision(box) {
        return (this.getX() + this.xSize > box.getX() && box.getX() + box.getXSize() > this.getX()) &&
            (this.getY() + this.ySize > box.getY() && box.getY() + box.getYSize() > this.getY());
    }

    move(vec, speed) {
        this.p.move(vec, speed);
    }

    resize(xSize_, ySize_) {
        this.xSize = xSize_;
        this.ySize = ySize_;
    }

    getCentre() {
        let p_ = new point(this.getX() + this.xSize / 2, this.getY() + this.ySize / 2);
        return p_;
    }

    copy(box) {
        this.p.copy(box.getPoint());
        this.xSize = box.getXSize();
        this.ySize = box.getYSize();
    }

    draw(color = 'white') {
        ctx.strokeStyle = color;
        ctx.strokeRect(Math.round(this.getX() * k + cam.getX()), Math.round(this.getY() * k + cam.getY()), Math.round(this.xSize * k), Math.round(this.ySize * k));
    }

    getBottomY() {
        return this.getY() + this.getYSize();
    }

    drawBottomY(color = "black") {
        ctx.strokeStyle = color;
        ctx.strokeRect(Math.round(this.getX() * k + k * this.getXSize() / 2 + cam.getX()), Math.round(this.getBottomY() * k + cam.getY()), 1, 1);
    }
}
