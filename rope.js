class Rope{
	constructor(bodyA,bodyB,offsetX,offsetY)
	{

	
 this.offsetX=offsetX;
 this.offsetY=offsetY;
 
 var options={
	 bodyA:bodyA,
	 bodyB:bodyB,

	 posB:{x:this.offsetX,y:this.offsetY}
 };

 this.rope = Constraint.create(options);
//create rope constraint here

World.add(world,this.rope);

}


//create display() here 
display() {
	var posA=this.rope.bodyA.position;
	var posB=this.rope.bodyB.position;
   
   strokeWeight(2);
   var anchor1X=posA.x;
   var anchor1Y=posA.y;
   var anchor2X=posB.x+this.offsetX;
   var anchor2Y=posB.y+this.offsetY;
  
   line(anchor1X,anchor1Y,anchor2X,anchor2Y);
  }
}
