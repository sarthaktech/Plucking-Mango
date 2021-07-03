class Launcher{
    constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}
    display(){
        if(this.launcher.bodyA){
        var pointA=this.bodyA.position
        var pointB=this.pointB

        push()
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
        }
   
   
    } 
     fly()
     {
         this.launcher.bodyA=null
     }  
     reconnect(x){
         this.launcher.bodyA=x
     }     
    

}