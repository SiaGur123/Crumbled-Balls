class Dustbin{
    constructor(){
        var options ={
           isStatic : true
        }
    
      
        // Bodies.rectangle(x,y,width,height)
        this.wallBody1 = Bodies.rectangle(1060,400,20,160, {isStatic : true});
        World.add(world,this.wallBody1);

       this.wallBody2 = Bodies.rectangle(1160,400,20,160,{isStatic : true});	
        World.add(world,this.wallBody2);
            
       this.wallBody3 = Bodies.rectangle(1110,460,150,20,{isStatic: true});
        World.add(world,this.wallBody3);
        
        this.image = loadImage("dustbingreen.png");
    }

    display(){
      

        rectMode(CENTER)
        fill("white");
        //rect(this.wallBody1.position.x, this.wallBody1.position.y,20,160);
        //rect(this.wallBody2.position.x, this.wallBody2.position.y,20,160);
        //rect(this.wallBody3.position.x, this.wallBody3.position.y,150,20);
        
        imageMode(CENTER)
        image(this.image,1110,400,150,200)
    }

}