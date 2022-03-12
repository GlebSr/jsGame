class vec2d {
    x;
    y;
    constructor(x_ = 0, y_ = 0) {
        if(x_ == 0 && y_ == 0){
            this.x = 0;
            this.y = 0;
        }
        else{
            this.x = x_/Math.sqrt(x_*x_ + y_*y_);
            this.y = y_/Math.sqrt(x_*x_ + y_*y_);
        }

    }
    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(x_) {
        this.x = x_;
    }

    setY(y_) {
        this.y = y_;
    }

    setVector(x_ = 0, y_ = 0) {
        this.x = x_;
        thix.y = y_;
    }

    copy(vec){
        this.x = vec.getX();
        this.y = vec.getY();
    }
}
