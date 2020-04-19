class Game {
 constructor(){
 }
 async start(){
  if(gameState === 0){
 //  player = new Player();
  // form = new Form()
  // form.display();
  }
  car1 = createSprite();
  car1.addImage("car1",car1_img);
  car2 = createSprite();
  car2.addImage("car2",car2_img);
  car3 = createSprite();
  car3.addImage("car3",car3_img);
  car4 = createSprite(680,300);
  car4.addImage("car4",car4_img);
  cars = [car1, car2, car3, car4];
 }
 play(){
 //form.hide();
 background(rgb(198,135,103));
 image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
 var index = 0;
 var x = 175 ;
 var y;
 //for(var plr in allPlayers){
  //index = index + 1 ;
  //x = x + 200;
 // y = displayHeight - allPlayers[plr].distance;
  //cars[index-1].x = x;
  //cars[index-1].y = y;
  //if (index === player.index){
   camera.position.x = displayWidth/2;
   camera.position.y = car1.y;
  //}
// }
 if(keyIsDown(UP_ARROW)){
  car1.distance +=10
  car1.update();
  console.log(car1.distance)
 }
 drawSprites();
 }
 end(){
  console.log("Game Ended");
 }
}
