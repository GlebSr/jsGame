class point {
    x;
    y;
    constructor(x_ = 0, y_ = 0) {
        this.x = x_;
        this.y = y_;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(x_ = 0) {
        this.x = x_;
    }

    setY(y_ = 0) {
        this.y = y_;
    }

    move(vec, speed) {
        this.x += vec.getX() * speed;
        this.y += vec.getY() * speed;
    }

    setPos(x_ = 0, y_ = 0) {
        this.x = x_;
        this.y = y_;
    }

    copy(p) {
        this.x = p.x;
        this.y = p.y;
    }
}
