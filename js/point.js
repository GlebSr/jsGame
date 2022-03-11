class point {
    x;
    y;
    constructor(x_ = 0,y_ = 0) {
        this.x = x_;
        this.y = y_;
    }

    get x(){
        return this.x;
    }

    get y(){
        return this.y;
    }

    set x(x_ = 0){
        this.x = x_;
    }

    set y(y_ = 0){
        this.y = y_;
    }

    move(vec){
        this.x += vec.x;
        this.y += vec.y;
    }

    setPos(x_ = 0, y_ = 0){
        this.x = x_;
        this.y = y_;
    }
}
