class inventory {
    weapons;
    iWeapon;
    constructor() {
        this.iWeapon = 0;
        this.weapons = new Array(4);
        this.weapons[0] = new pistol(1,60,1,1);
        this.weapons[1] = new machineGun(1,15,1,1);
        this.weapons[2] = new shotgun(1,100,1,1);
        this.weapons[3] = new crossbow(1,200,1,1);
    }
    shoot(){
        if(activeKey.l){
            if(pla.getAmmo() > 0){
                this.weapons[this.iWeapon].shoot();
            }

        }
    }
    draw(){
        this.weapons[this.iWeapon].draw();
    }
    chouseWeapon(x){
        this.iWeapon = x -1;
    }

    chousen(){
        return this.iWeapon+1;
    }
}


class startMenu{
    startButton;
    infoButton;
    constructor(){
        this.startButton = new hitBox();
        this.infoButton = new hitBox()
    }
    click(){
        this.startButton = new hitBox(szWindow.x/2 - 60*k,szWindow.y/2 - 10*k,120*k,20*k);
        this.infoButton = new hitBox(szWindow.x/2 - 60*k,szWindow.y/2 + 10*k,120*k,20*k);
        if(this.startButton.inBox(mousePos.x,mousePos.y)) init();
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.font =  k * 20 + "px myFont";
        let s = "MENU";
        ctx.fillText(s,szWindow.x/2 - 25*k,szWindow.y/3);
        this.startButton = new hitBox(szWindow.x/2 - 60*k,szWindow.y/2 - 10*k,120*k,20*k);
        if(this.startButton.inBox(mousePos.x,mousePos.y)){
            ctx.drawImage(texturs,onButton.getX(),onButton.getY(),onButton.getXSize(),onButton.getYSize(),this.startButton.getX(),this.startButton.getY()+k,this.startButton.getXSize(),this.startButton.getYSize());
            s = "START";
            ctx.font =  k * 10 + "px myFont";
            ctx.fillText(s,szWindow.x/2 - 15*k,szWindow.y/2 + 3*k);
        }
        else{
            ctx.drawImage(texturs,button.getX(),button.getY(),button.getXSize(),button.getYSize(),this.startButton.getX(),this.startButton.getY(),this.startButton.getXSize(),this.startButton.getYSize());
            s = "START";
            ctx.font =  k * 10 + "px myFont";
            ctx.fillText(s,szWindow.x/2 - 15*k,szWindow.y/2 + 2*k);
        }
        this.infoButton = new hitBox(szWindow.x/2 - 60*k,szWindow.y/2 + 10*k,120*k,20*k);
        if(this.infoButton.inBox(mousePos.x,mousePos.y)){
            ctx.drawImage(texturs,onButton.getX(),onButton.getY(),onButton.getXSize(),onButton.getYSize(),this.infoButton.getX(),this.infoButton.getY() + k,this.infoButton.getXSize(),this.infoButton.getYSize());
            s = "INFO";
            ctx.fillText(s,szWindow.x/2 - 12.5*k,szWindow.y/2 + button.getYSize() * k + 4*k);
        }
        else {
            ctx.drawImage(texturs,button.getX(),button.getY(),button.getXSize(),button.getYSize(),szWindow.x/2 - 60*k,szWindow.y/2 + 10*k,120*k,20*k);
            s = "INFO";
            ctx.fillText(s,szWindow.x/2 - 12.5*k,szWindow.y/2 + button.getYSize() * k + 3*k);
        }

    }
}

class pauseMenu{
    restartButton;
    menuButton;
    constructor(){
        this.restartButton = new hitBox();
        this.menuButton = new hitBox()
    }
    click(){
        this.restartButton = new hitBox(szWindow.x/2 - 60*k,szWindow.y/2 - 10*k,120*k,20*k);
        this.menuButton = new hitBox(szWindow.x/2 - 60*k,szWindow.y/2 + 10*k,120*k,20*k);
        if(this.restartButton.inBox(mousePos.x,mousePos.y)) init();
        if(this.menuButton.inBox(mousePos.x,mousePos.y)) menuStage = 0;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.font =  k * 20 + "px myFont";
        let s = "PAUSE";
        ctx.fillText(s,szWindow.x/2 - 34*k,szWindow.y/3);
        this.restartButton = new hitBox(szWindow.x/2 - 60*k,szWindow.y/2 - 10*k,120*k,20*k);
        if(this.restartButton.inBox(mousePos.x,mousePos.y)){
            ctx.drawImage(texturs,onButton.getX(),onButton.getY(),onButton.getXSize(),onButton.getYSize(),this.restartButton.getX(),this.restartButton.getY()+k,this.restartButton.getXSize(),this.restartButton.getYSize());
            s = "RESTART";
            ctx.font =  k * 10 + "px myFont";
            ctx.fillText(s,szWindow.x/2 - 22*k,szWindow.y/2 + 3*k);
        }
        else{
            ctx.drawImage(texturs,button.getX(),button.getY(),button.getXSize(),button.getYSize(),this.restartButton.getX(),this.restartButton.getY(),this.restartButton.getXSize(),this.restartButton.getYSize());
            s = "RESTART";
            ctx.font =  k * 10 + "px myFont";
            ctx.fillText(s,szWindow.x/2 - 22*k,szWindow.y/2 + 2*k);
        }
        this.menuButton = new hitBox(szWindow.x/2 - 60*k,szWindow.y/2 + 10*k,120*k,20*k);
        if(this.menuButton.inBox(mousePos.x,mousePos.y)){
            ctx.drawImage(texturs,onButton.getX(),onButton.getY(),onButton.getXSize(),onButton.getYSize(),this.menuButton.getX(),this.menuButton.getY() + k,this.menuButton.getXSize(),this.menuButton.getYSize());
            s = "MENU";
            ctx.fillText(s,szWindow.x/2 - 12.5*k,szWindow.y/2 + button.getYSize() * k + 4*k);
        }
        else {
            ctx.drawImage(texturs,button.getX(),button.getY(),button.getXSize(),button.getYSize(),szWindow.x/2 - 60*k,szWindow.y/2 + 10*k,120*k,20*k);
            s = "MENU";
            ctx.fillText(s,szWindow.x/2 - 12.5*k,szWindow.y/2 + button.getYSize() * k + 3*k);
        }

    }
}

class endMenu{
    constructor(){

    }
    draw(){
        ctx.fillStyle = '#f00';
        ctx.fillRect(0,0,szWindow.x,szWindow.y);
        ctx.fillStyle = 'white';
        ctx.font =  k * 30 + "px myFont";
        let s = "GG";
        ctx.fillText(s,szWindow.x/2 - 34*k,szWindow.y/3);
        s = "your score = " + score;
        ctx.font =  k * 10 + "px myFont";
        ctx.fillText(s,0 + 5*k,5*k + k * 10);
    }
}
