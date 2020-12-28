
AFRAME.registerComponent("showitem", {

  init: function() 
   {

   let fairy = document.querySelector("#Fairy");
   var el = this.el;
 
     let selectRandomItem = () => 
     {
      if( el.firstElementChild.id!=null)//check if this target has light
      {
       var score;
       var index; //to store index for the array of targets
       var item, random;

     document.getElementById(el.firstElementChild.id).parentNode.removeChild(document.getElementById(el.firstElementChild.id));//destoy light from current target

       el.setAttribute('showitem',"enabled",false);
      
       this.el.setAttribute("movetotarget","enabled",false);
 
         this.el.setAttribute("animation-mixer", "repetitions: 2; clampWhenFinished:true;");
       
         item = document.querySelectorAll(".items");
        
         random = Math.floor(Math.random() * Math.floor(item.length));

        score = document.getElementById("score").getAttribute("value");
 
         index = score;
 
       item[random].setAttribute("position", {
         x: this.el.getAttribute("position").x+3,
         y: this.el.getAttribute("position").y+2,
         z: this.el.getAttribute("position").z
       });
 
       item[random].setAttribute("Visible", true);

 var partical=document.createElement('a-entity');
 partical.setAttribute("spe-particles","texture: ../images/particles/circle.png;color: #0000FF, #00FFFF, #FFFFFF; particle-count: 1000; acceleration: 0 -6 0;")
 partical.setAttribute("spe-particles","opacity: 2, 2, 0; velocity: 0 4 0; size: 2, 2, 0; velocity-spread: 2 0 2;") 
 //partical.setAttribute("position","1 3 1")
 item[random].appendChild(partical);

if (index <= document.querySelectorAll(".BoxParent").length+1) 
       {
 
         index++;
       } 
 
       else 
       {
 
         index = 3;
       }
 
       fairyPositionx = this.el.parentElement.children[index].getAttribute("position").x-3;
       fairyPositionz = this.el.parentElement.children[index].getAttribute("position") .z;
 
 console.log(fairyPositionx);
       setTimeout(() => 
       {
 
         score++;
 
       document.getElementById("score").setAttribute("value", score);
 
         fairy.setAttribute(
           "animation",
           "property:position; to:" + fairyPositionx + " 0.8 " + fairyPositionz + "; dur:1000"
         );//move Fairy to next Target
 
         console.log(
           random + " count : " + item.length + fairy.getAttribute("position").z
         );
 
         item[random].className = "new";
 
       }, 1000);
 
       setTimeout(() => 
       {
 
         item[random].remove();
 
       }, 2000);
      }
      else{
        console.log("bye");
      }
     };
  el.addEventListener('child-dattached', function(evt)
       {
        el.removeEventListener("click", ()=>{selectRandomItem()});


       });
         el.addEventListener('child-attached', function(evt)
         {
 
         console.log(evt.detail.name+el.firstElementChild.id);
 
 
           console.log("a box element has been changed");
           console.log(el)

 if(el.firstElementChild.id==="myLight")
 {

        el.addEventListener("click",() =>{
                 
 
           selectRandomItem();  
             
        });  


 
 
            }   });
      
   }
 
 });