$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(0,200,100,50)
createPlatform(300,200,55,5) //first section   
createPlatform(300,200,1,500)//wall one
createPlatform(500,000,1,600)//wall two
createPlatform(450,300,50,5)//first section
createPlatform(300,400,50,5)//first section
createPlatform(450,500,50,5)//first section
createPlatform(300,600,50,5)//first section
createPlatform(0,700,canvas.width,5)//floor
createPlatform(700,200,1,500)//wall three
createPlatform(500,200,50,5)//second section
createPlatform(500,600,50,5)//second section
createPlatform(500,400,50,5)//second section
createPlatform(650,500,50,5)//second section
createPlatform(650,300,50,5)//second section
createPlatform(900,0,1,600)//forth wall
createPlatform(700,200,50,5)//3 section
createPlatform(850,300,50,5)//3 section
createPlatform(700,400,50,5)//3 section
createPlatform(850,500,50,5)//3 section
createPlatform(700,600,50,5)//3 section
createPlatform(1100,200,1,500)//5th wall
createPlatform(900,200,50,5)
createPlatform(1050,300,50,5)
createPlatform(900,400,50,5)
createPlatform(1050,500,50,5)
createPlatform(900,600,50,5)
createPlatform(1100,200,300,5)
createPlatform(100,200,200,50)
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database",1200,100,0,0)
    createCollectable("diamond",1200,100,0,0)
    createCollectable("grace",1200,100,0,0)
    createCollectable("kennedi",1200,100,0,0)
    createCollectable("max",1200,100,0,0)
    createCollectable("steve",1200,100,0,0)
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)
    var firerate=1750
createCannon("bottom",340,firerate)
createCannon("top",460,firerate)
createCannon("bottom",540,firerate)
createCannon("top",660,firerate)
createCannon("bottom",740,firerate)
createCannon("top",860,firerate)



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
