class Snowfall{
constructor(x,y){
    var options = {
        restitution:0.1,
        friction:0.1,
    }
this.image = loadImage("snow5.webp")
this.body=Bodies.circle(x,y,20,options);
this.radius=50;
World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius,this.radius);
}
update(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,900),y:random(0,500)});
    }
}

}