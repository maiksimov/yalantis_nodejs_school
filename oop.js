'use strict';

class Warrior {

	constructor(name, hp, strength, speed) {
		this.name = name;
		this.hp = hp;
		this.strength = strength;
		this.speed = speed;
	}

	attack(enemy) {
		var damage = this.damage(); 
		enemy.hp -= damage;
		console.log(enemy.name + ' take ' + damage + ' HP damage');
		
	}

	damage() {
		var rand = 1 + Math.random() * this.strength;
		rand = Math.floor(rand);
		return rand * this.speed;
	}
}

class Monster extends Warrior {
	constructor(name) { 
		super(name, 30, 20, 1);
	}
}

class Gladiator extends Warrior {
	constructor(name) {
		super(name, 10, 10, 5);
	}
}

class Game {

	constructor(gladiator, monster) {
		this.gladiator = gladiator;
		this.monster = monster;
	}

	start() {
		console.log('Start the game');
		console.log('We have two warriors:');
		console.log('Gladiator ' + this.gladiator.name + ' (HP:' + this.gladiator.hp + ', strength: ' 
			+ this.gladiator.strength + ', speed: ' + this.gladiator.speed + ')');
		console.log('Monster ' + this.monster.name + ' (HP:'+ this.monster.hp +', strength: ' 
			+ this.monster.strength + ', speed: ' + this.monster.speed + ')\n');
		
		while(this.winner === undefined) {
			this.loop();
		}
	}

	loop() {
		this.gladiator.attack(this.monster);
		this.monster.attack(this.gladiator);
		this.checkWinner();
	}

	checkWinner() {
		if (this.gladiator.hp <= 0)
			this.winner = this.monster.name; 

		if (this.monster.hp <= 0)
			this.winner = this.gladiator.name;

		if (this.gladiator.hp <= 0 && this.monster.hp <= 0)
			this.winner = 'No winner, all dead';
	}

	printWinner() {
		console.log(this.winner);
	}
}

const game = new Game(new Gladiator('John Dee'), new Monster('Azaghall'));
game.start();
game.printWinner();
