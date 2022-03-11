class vec2d {
    x;
    y;
    constructor(x_ = 0, y_ = 0) {
        this.x = x_;
        this.y = y_;
    }
    get x() {
        return this.x;
    }

    get y() {
        return this.y;
    }

    set x(x_) {
        this.x = x_;
    }

    set y(y_) {
        this.y = y_;
    }

    setVector(x_ = 0, y_ = 0) {
        this.x = x_;
        thix.y = y_;
    }
}
