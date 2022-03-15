class anim {
    timer;
    sprites;
    itSprite;
    numSprite;
    timeLeft;
    constructor(sprites_, timer_) {
        this.timer = timer_;
        this.numSprite = sprites_.length;
        this.itSprite = 0;
        this.timeLeft = timer_;
        this.sprites = new Array(this.numSprite);
        for (let i = 0; i < this.numSprite; i++) {
            this.sprites[i] = new hitBox();
            this.sprites[i].copy(sprites_[i]);
        }
    }
    draw(x, y, xSize, ySize, xsc = 0, ysc = 0) {
        ctx.translate(Math.round(x + xSize * xsc), Math.round(y + xSize * ysc));
        ctx.scale(xsc == 1 ? -1 : 1, ysc == 1 ? -1 : 1);
        ctx.drawImage(texturs, Math.round(this.sprites[this.itSprite].getX()), Math.round(this.sprites[this.itSprite].getY()), Math.round(this.sprites[this.itSprite].getXSize()), Math.round(this.sprites[this.itSprite].getYSize()), 0, 0, Math.round(xSize), Math.round(ySize));

        ctx.setTransform(1, 0, 0, 1, 0, 0);

        this.timeLeft--;
        if (this.timeLeft <= 0) {
            this.timeLeft = this.timer;
            this.itSprite++;
        }
        if (this.itSprite === this.numSprite) {
            this.itSprite = 0;
        }
    }
}


class statusBar {
    constructor() {

    }
    draw() {
        ctx.drawImage(texturs, Math.round(barTexturs[0].getX()), Math.round(barTexturs[0].getY()), Math.round(barTexturs[0].getXSize()), Math.round(barTexturs[0].getYSize()), 0, 0, Math.round(barTexturs[0].getXSize() * k * 2), Math.round(barTexturs[0].getYSize() * k * 2));

        ctx.drawImage(texturs, Math.round(barTexturs[1].getX()), Math.round(barTexturs[1].getY()), Math.round(barTexturs[1].getXSize() * pla.getHp() / pla.getMaxHp()), Math.round(barTexturs[1].getYSize()), Math.round(14 * k * 2), Math.round(3 * k * 2), Math.round(barTexturs[1].getXSize() * k * 2 * pla.getHp() / pla.getMaxHp()), Math.round(barTexturs[1].getYSize() * k * 2));

        ctx.fillStyle = 'white';
        ctx.font = 2 * k * 6 + "px myFont";
        let s = pla.getHp() + '';
        ctx.fillText("/", 64 * k, 19 * k);
        for (let i = s.length - 1; i >= 0; i--) {
            ctx.fillText(s[i], 64 * k - 8 * k * (s.length - i), 19 * k);
        }
        s = pla.getMaxHp() + '';
        for (let i = 0; i < s.length; i++) {
            ctx.fillText(s[i], 64 * k + 8 * k * (i + 1), 19 * k);
        }

        ctx.drawImage(texturs, Math.round(barTexturs[2].getX()), Math.round(barTexturs[2].getY()), Math.round(barTexturs[2].getXSize() * pla.getDefence() / pla.getMaxDefence()), Math.round(barTexturs[2].getYSize()), Math.round(14 * k * 2), Math.round(13 * k * 2), Math.round(barTexturs[2].getXSize() * k * 2 * pla.getDefence() / pla.getMaxDefence()), Math.round(barTexturs[2].getYSize() * k * 2));

        s = pla.getDefence() + '';
        ctx.fillText("/", 64 * k, 39 * k);
        for (let i = s.length - 1; i >= 0; i--) {
            ctx.fillText(s[i], 64 * k - 8 * k * (s.length - i), 39 * k);
        }
        s = pla.getMaxDefence() + '';
        for (let i = 0; i < s.length; i++) {
            ctx.fillText(s[i], 64 * k + 8 * k * (i + 1), 39 * k);
        }

        ctx.drawImage(texturs, Math.round(barTexturs[3].getX()), Math.round(barTexturs[3].getY()), Math.round(barTexturs[3].getXSize() * pla.getAmmo() / pla.getMaxAmmo()), Math.round(barTexturs[3].getYSize()), Math.round(14 * k * 2), Math.round(23 * k * 2), Math.round(barTexturs[3].getXSize() * k * 2 * pla.getAmmo() / pla.getMaxAmmo()), Math.round(barTexturs[3].getYSize() * k * 2));

        s = pla.getAmmo() + '';
        ctx.fillText("/", 64 * k, 59 * k);
        for (let i = s.length - 1; i >= 0; i--) {
            ctx.fillText(s[i], 64 * k - 8 * k * (s.length - i), 59 * k);
        }
        s = pla.getMaxAmmo() + '';
        for (let i = 0; i < s.length; i++) {
            ctx.fillText(s[i], 64 * k + 8 * k * (i + 1), 59 * k);
        }
    }
}
