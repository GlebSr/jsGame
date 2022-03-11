class tile {
    box;
    free;
    constructor(x = 0, y = 0, xSize = 0, ySize = 0, free_) {
        box = new hitBox(x,y,xSize,ySize);
        free = free_;
    }
    
}
