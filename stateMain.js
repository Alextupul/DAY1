var stateMain = {
    
    
    
    create: function (){
        this.speed=2;
        this.robot = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"robot");
        this.robot.anchor.set(0.5, 0.5);
        this.robot.animations.add('idle', [0,1,2,3,4,5,6,7,8,9], 12, true);
        this.robot.animations.add('run',[10,11,12,13,14,15,16,17], 12, true);
        this.robot.animations.add('jump',[18,19,20,21,22,23,24,25,26], 12, true);
        
        //this.robot.animation.play('idle');
       
        
        
    },
    
    update: function (){

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.robot.x-=this.speed;
        this.robot.play("run");
        this.robot.scale.x=-1;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.robot.x+=this.speed;
        this.robot.play("run");
        this.robot.scale.x=1;
    } else
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        this.robot.y-=this.speed;
        this.robot.play("jump");
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        this.robot.y+=this.speed;
        this.robot.play("run");
    }else
    {
        this.robot.play('idle');
    }
    } 
}