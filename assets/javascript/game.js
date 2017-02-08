//create game object
var crystalCollector = {
	randNum: 0,
	wins: 0,
	losses: 0,	
	crystal1: 0,
	crystal2: 0,
	crystal3: 0,
	crystal4: 0,
	score: 0,

	//generate random number between 19-120 and add to inner HTML
	generateRandNum: function() {
		this.randNum = Math.floor(Math.random()*102 + 19);
		$("#target").html("Random Number: " + this.randNum);
	},

	//function to generate random values for each crystal
	generateCrystalValues: function() {
		this.crystal1 = Math.floor(Math.random()*12 + 1);
		this.crystal2 = Math.floor(Math.random()*12 + 1);
		this.crystal3 = Math.floor(Math.random()*12 + 1);
		this.crystal4 = Math.floor(Math.random()*12 + 1);
		console.log(this.crystal1);
		console.log(this.crystal2);
		console.log(this.crystal3);
		console.log(this.crystal4);		
	},

	// increase the score for each crystal clicked and then determine whether the score is a winner or loser
	increaseScore: function() {
	 	this.score += this.crystal1;
	 		if(this.score == this.randNum) {
				this.wins++;
				$("#wins").html("Wins: " + this.wins);
				this.reset();
			}

			if(this.score > this.randNum) {
				this.losses++;
				$("#losses").html("Losses: " + this.losses);
				this.reset();
			}
	},

	increaseScore2: function() {
	 	this.score += this.crystal2;
	 		if(this.score == this.randNum) {
				this.wins++;
				$("#wins").html("Wins: " + this.wins);
				this.reset();
			}

			if(this.score > this.randNum) {
				this.losses++;
				$("#losses").html("Losses: " + this.losses);
				this.reset();
			}

	},

	increaseScore3: function() {
	 	this.score += this.crystal3;
	 		if(this.score == this.randNum) {
				this.wins++;
				$("#wins").html("Wins: " + this.wins);
				this.reset();
			}

			if(this.score > this.randNum) {
				this.losses++;
				$("#losses").html("Losses: " + this.losses);
				this.reset();
			}
	},

	increaseScore4: function() {
	 	this.score += this.crystal4;
	 		if(this.score == this.randNum) {
				this.wins++;
				$("#wins").html("Wins: " + this.wins);
				this.reset();
			}

			if(this.score > this.randNum) {
				this.losses++;
				$("#losses").html("Losses: " + this.losses);
				this.reset();
			}
	},

	// resets the game once the user has won or lost
	  reset: function reset() {
	  	this.randNum = 0;
	  	this.crystal1 = 0;
	  	this.crystal2 = 0;
	  	this.crystal3 = 0;
	  	this.crystal4 = 0;
	  	this.score = 0; 
	  	$("#score").html(this.score);
	  	this.generateRandNum();
	  	this.generateCrystalValues();
	  }
};


// playing the game..
$(document).ready(function(){

	//call functions from the object
	crystalCollector.generateRandNum();

	crystalCollector.generateCrystalValues();

	// click functions to increase the score appropriately based on the crystal clicked
	 $("#crystal-1").on("click", function(){
	 	crystalCollector.increaseScore();
		$("#score").html("Your Score: " + crystalCollector.score);
	 });

	 $("#crystal-2").on("click", function(){
	 	crystalCollector.increaseScore2();
		$("#score").html("Your Score: " + crystalCollector.score);
	 });

	 $("#crystal-3").on("click", function(){
	 	crystalCollector.increaseScore3();
		$("#score").html("Your Score: " + crystalCollector.score);
	 });

	 $("#crystal-4").on("click", function(){
	 	crystalCollector.increaseScore4();
		$("#score").html("Your Score: " + crystalCollector.score);
	 });

});
