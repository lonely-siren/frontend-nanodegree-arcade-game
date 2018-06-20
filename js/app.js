
var level = 1;
// Enemies our player must avoid
var Enemy = function() {
    // Load enemy's image
    this.sprite = 'images/enemy-bug.png';

    //Setting the Enemy initial location
    this.x = 0;
    this.y = 50;
    //Setting the Enemy speed
    this.speed = Math.floor(Math.random() * 250 + 50) * (level * 0.2);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt, x, y) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (dt * this.speed);
    if ( this.x > 500 ){
      this.x = 0;
      this.speed = Math.floor(Math.random() * 200 + 100) * (level * 0.2);
    };

    // Check for collision between player and enemies
       if (player.x < this.x + 60 &&
           player.x + 40 > this.x &&
           player.y < this.y + 25 &&
           30 + player.y > this.y) {
           player.x = 200;
           player.y = 400;
         };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player classs
var Player = function() {
  // Set player image
  this.sprite = 'images/char-pink-girl.png';
  // Set initial player position
  this.x = 200;
  this.y = 400;
};

Player.prototype.update = function() {

};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.render2 = function(){

};


Player.prototype.handleInput = function(dir){
	if ( dir == 'left' ){
		this.x = this.x - 100;
		if ( this.x < 0 ){
			this.x = 0;
		};
	};
	if ( dir == 'right' ){
		this.x = this.x + 100;
		if ( this.x > 400 ){
			this.x = 400;
		};
	};
	if ( dir == 'up' ){
		this.y = this.y - 90;
		if ( this.y < 0 ){
			//reach to water so we reset the position to initials.
			this.y = 400;
			this.x = 200;
      window.level++;
      console.log(this.level);
      alert("congrats! Play level " + level)
		};
	};
	if ( dir == 'down' ){
		this.y = this.y + 90;
		if ( this.y > 400 ){
			this.y = 400;
		};
	};
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
for ( var i=0; i < 4; i++ ){
	allEnemies.push(new Enemy());
	allEnemies[i].y = i * 90 + 50;
};

// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
