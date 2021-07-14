//Create variables here
var database,foodS,foodStock;
var Dog,happyDog,house;

function preload()
{
	//load images here
  Dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  house = loadImage("images/doghouse.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);

  var dog = createSprite(240,330);
 dog.addImage(Dog);
 dog.scale = 0.3;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
 
 

}


function draw() {  
  background(house);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

    
  }
  textSize(20);
  drawSprites();
  //add styles here

  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}

function readStock(data){
  foodS  = data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 

  database.ref('/').update({
    Food : x
  })
}



