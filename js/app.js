// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    'use strict';
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

var colide = 1
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter - 
    // which will ensure the game runs at the same speed for - 
    // all computers. - 
    'use strict';
            this.speed = Math.random() *400;
            this.x = this.x + this.speed * dt;
    
            if(this.x > 505){  // when the bugs reach right end , they will apper again from the left 
                this.x = 0;        
            }
    
        // check for any collision occur between player and enemies
       if(this.x < player.x + 50 && this.x + 50 > player.x && player.y < this.y + 40 && 40 + player.y > this.y)
           {
               player.x = 200 ;
               player.y = 320 ;
               document.getElementById("colide").innerHTML = colide++;
               
           }
    
};




// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// collide function 

// Now write your own player class
var Player = function(x , y)
{
    'use strict';
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};
// This class requires an update(), render() and
// a handleInput() method.

var score = 1 ; 
Player.prototype.update = function() {
    'use strict';
    if(this.y < -10 )   // if player reach the sea
        {
            this.x = 200;
            this.y = 320;
            document.getElementById("score").innerHTML = score++;
        }
    
 
};


// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {
    
   'use strict';
     if(input == "left" && this.x > 0)       
            {
                this.x -= 100;
            }
        else if(input == "right" && this.x < 400)
            {
                this.x += 100;
            }
        else if(input == "up" && this.y > 0)
            {
                this.y -= 85;
            }
        else if(input == "down" && this.y < 400)
            {
                this.y += 85;
            }
    
      
    
};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player -

var player = new Player(200,320);   // create object player

// create enemies objects

var allEnemies = [];
for(var i=0;i<3;i++){
    var enemy=new Enemy(-300,40+i*90);
    allEnemies.push(enemy);
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    'use strict';
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// timer for the game 
var TimeInsecond = 60 ;
function time()  
{
    'use strict';
            var myVar = setInterval(function() {
              myTimer();
            }, 1000);   
 
}




function myTimer() {
    'use strict';
    if(TimeInsecond == 0 ) {
        
        
        document.getElementById("Fscore").innerHTML = score-1;
        document.getElementById("Fcolide").innerHTML = colide-1;
            
         $("#myModal").modal();
         $("#timerDiv").empty();  // stop timer .
   }
  document.getElementById("timer").innerHTML = "Timer : " + TimeInsecond-- + " s ";
	
	
}

function playAgain()
{
    'use strict';
    location.reload();
}

