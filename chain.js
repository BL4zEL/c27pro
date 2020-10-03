class Rope {
    constructor(bodyA,bodyB,offSetX,offSetY){
      this.offSetX=offSetX
      this.offSetY=offSetY
  var options={
    bodyA:bodyA,
    bodyB:bodyB,
    pointB:{x:this.offSetX,y:this.offSetY},
    length:200,
    stiffness:0.1,
  }
 this.chain=Constraint.create(options)
World.add(world,this.chain);
    }
display(){
    var pointA =this.chain.bodyA.position
    var pointB =this.chain.bodyB.position
    strokeWeight(4);
    var anchor1x = pointA.x
    var anchor2x = pointB.x+this.offSetX
    var anchor1y = pointA.y
    var anchor2y = pointB.y+this.offSetY
line(anchor1x,anchor1y,anchor2x,anchor2y)



}

}