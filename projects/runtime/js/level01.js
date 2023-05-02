var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = 
            {"name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type":"enemy","x":5,"y":500},
                { "type":"enemy","x":50,y:500},
                {"type":"enemy","x":50,y:500},
                {"type":"reward","x":400,"y":500}
            ]
        };
        
   
window.levelData = levelData
        
        
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        var y=3*50
        var rewardY= 50
        createSawBlade(80,y);
        createSawBlade(2*80,y);
        createSawBlade(3*80,y);
        createSawBlade(4*80,y);
        createSawBlade(5*80,y);
        createSawBlade(6*80,y);
        createReward(100*100+500,rewardY);


        function createSawBlade(x,y){
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap("img/sawblade.png");
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x=-sawBladeHitZone.radius;
        obstacleImage.y=-sawBladeHitZone.radius;
       }
        for(var i=0;i<100;i++){
        createEnemy(i*100+400,50)
        }
       function createReward(x,y){
        var  box = game.createGameItem("reward", 25);
        var reward=draw.rect(50,50,"red");
        reward.x = -25;
        reward.y = -25;
        box.addChild(reward);
        box.x=x;
        box.y=groundY-y;
        box.velocityX=-10;
        box.rotationalVelocity=-1;
        game.addGameItem(box);
        box.onPlayerCollision = function () {
            game.increaseScore(10000);
        }
        box.onProjectileCollision = function () {
            game.increaseScore(10000);
            box.fadeOut();
        }
       }



        function createEnemy(sX,sY){
            var enemy = game.createGameItem("enemy", 25);
            var redSquare=draw.rect(50,50,"red");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x=sX;
            enemy.y=groundY-sY;
            enemy.velocityX=-10;
            enemy.rotationalVelocity=-1;
            game.addGameItem(enemy);
            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function () {
                game.increaseScore(100);
                enemy.fadeOut();
            }
        }
    
        // DO NOT EDIT CODE BELOW HERE
}
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}

