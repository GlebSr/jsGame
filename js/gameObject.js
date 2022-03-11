class gameObject {
    box;
    solid;
    static;
    vec2;
    constructor(x = 0, y = 0, xSize = 10, ySize = 10, solid_ = 0, static_ = 0, xvec = 0, yvec = 0) {
        this.box = new hitBox(x, y, xSize, ySize);
        this.solid = solid_;
        this.static = static_;
        this.vec2 = new vec2d(xvec, yvec);
    }

    get solid() {
        return this.solid;
    }

    set solid(solid_) {
        this.solid = solid_;
    }

    get static() {
        return this.static;
    }

    set static(static_) {
        this.static = static_;
    }

    get box() {
        return thix.box;
    }

    set box(box_) {
        this.box = box_;
    }

    setVec(x = 0, y = 0) {
        this.vec2.setVector(x, y);
    }

    collision(object) {
        return this.box.collision(object.box);
    }
}
