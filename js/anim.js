class anim {
    timer;
    sprites;
    itSprite;
    numSprite;
    timeLeft;
    constructor(sprites_,timer_){
        this.timer = timer_;
        this.numSprite = sprites_.length;
        this.itSprite = 0;
        this.timeLeft = timer_;
        this.sprites = new Array(this.numSprite);
        for(let i = 0; i < this.numSprite; i++){
            this.sprites[i] = new hitBox();
            this.sprites[i].copy(sprites_[i]);
        }
    }
    draw(x,y,xSize,ySize,xsc = 0,ysc = 0){
        ctx.translate(x + xSize*xsc,y + xSize*ysc);
        ctx.scale(xsc == 1 ? -1 : 1,ysc == 1 ? -1 : 1);
        ctx.drawImage(texturs,this.sprites[this.itSprite].getX(),this.sprites[this.itSprite].getY(), this.sprites[this.itSprite].getXSize(),this.sprites[this.itSprite].getYSize(),0,0,xSize,ySize);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.timeLeft--;
        if(this.timeLeft <= 0){
            this.timeLeft = this.timer;
            this.itSprite++;
        }
        if(this.itSprite === this.numSprite){
            this.itSprite = 0;
        }
    }
}
