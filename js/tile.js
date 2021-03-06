class tile {
    box;
    free;
    solid;
    type;
    texture;
    constructor(x = 0, y = 0, type_ = 0) {
        this.box = new hitBox(x, y, sizes.tileTexturSize, sizes.tileTexturSize);
        this.texture = new hitBox();
        this.setType(type_);

    }

    getX() {
        return this.box.getX();
    }

    setX(x_) {
        this.box.setX(x_);
    }

    getY() {
        return this.box.getY();
    }

    setY(y_) {
        this.box.setY(y_);
    }

    getPos() {
        return this.box.getPoint();
    }

    setPos(p_) {
        this.box.setPoint(p_);
    }

    getBox() {
        return this.box;
    }

    setBox(box_) {
        this.box.copy(box_);
    }

    isFree() {
        return this.free;
    }

    isSolid() {
        return this.solid;
    }

    setFree(free_) {
        this.free = free_;
    }

    setSolid(solid_) {
        this.solid = solid_;
    }

    collision(object) {
        return this.box.collision(object.getBox());
    }

    getType() {
        return this.type;
    }

    setType(type_) {
        switch (type_) {
            case 0:
                this.free = true;
                this.solid = false;
                this.texture.copy(tileTexturs[Math.floor(Math.random() * 4)]);
                break;
            case 1:
                this.texture.copy(tileTexturs[5]);
                this.free = false;
                this.solid = false;
                break;
            default:
                this.texture.copy(tileTexturs[Math.floor(Math.random() * 4)]);
                this.free = true;
                this.solid = false;
        }
        this.type = type_;
    }

    draw() {
        ctx.drawImage(texturs, Math.round(this.texture.getX()), Math.round(this.texture.getY()), Math.round(this.texture.getXSize()), Math.round(this.texture.getYSize()), Math.round(this.getX() * k + cam.getX()), Math.round(this.getY() * k + cam.getY()), Math.round(sizes.tileTexturSize * k), Math.round(sizes.tileTexturSize * k));
    }
}
