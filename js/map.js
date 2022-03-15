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
            for (let j = 0; j < this.sizeX; j++) this.tiles[i][j] = new tile(j * sizes.tileTexturSize, i * sizes.tileTexturSize, 0);
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
        let a = Math.round((pla.getY() - szWindow.y / k) / sizes.tileTexturSize - 1);
        let b = Math.round((pla.getY() + szWindow.y / k) / sizes.tileTexturSize + 1);
        let a1 = Math.round((pla.getX() - szWindow.x / k) / sizes.tileTexturSize - 1);
        let b1 = Math.round((pla.getX() + szWindow.x / k) / sizes.tileTexturSize + 1);
        for (let y = a <= 0 ? 0 : a; y < b && y < this.sizeY; y++) {
            for (let x = a1 <= 0 ? 0 : a1; x < b1 && x < this.sizeX; x++) {
                this.tiles[y][x].draw();
            }
        }
    }
}
