class map {
    sizeX;
    sizeY;
    tiles;
    constructor(sizeX_, sizeY_) {
        this.sizeX = sizeX_;
        this.sizeY = sizeY_;
        this.tiles = new Array(this.sizeY);
        for (let i = 0; i < this.sizeY; i++) {
            this.tiles[i] = new Array(this.sizeX);
        }
        for (let i = 0; i < this.sizeY; i++) {
            for (let j = 0; j < this.sizeX; j++) this.tiles[i][j] = new tile(j * tileTexturSize, i * tileTexturSize, 0);
        }
    }

    getSizeX() {
        return this.sizeX;
    }

    getSizeY() {
        return this.sizeY;
    }

    setSizeX(sizeX_) {
        this.sizeX = sizeX_;
    }

    setSizeY(sizeY_) {
        this.sizeY = sizeY_;
    }

    getTile(x, y) {
        return this.tiles[y][x];
    }


    setTile(x, y, type_) {
        this.tiles[y][x].setType(type_);
    }

    draw() {
        for (let y = 0; y < this.sizeY; y++) {
            for (let x = 0; x < this.sizeX; x++) {
                this.tiles[y][x].draw();
            }
        }
    }
}
