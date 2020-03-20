let game={"min":1,"max":10 };
			
			document.addEventListener("DOMContentLoaded", function(){
			console.log("pronto");		
			game.output= document.querySelector(".output");
			game.message=document.querySelector(".message");
			game.advinharInput = document.querySelector("input");
			game.btn = document.querySelector(".guess");
			game.btn.addEventListener("click", guessValue);
            game.playAgain = document.querySelector(".playAgain");
            game.playAgain.style.display="none";
            game.playAgain.addEventListener("click", reload);
            
			init();
			})
            
            
            function reload(){
                window.location.href = 'index.html';
            }
			function guessValue(){
				let tempGuess= game.advinharInput.value;
				tempGuess=parseInt(tempGuess);
				
				if(isNaN(tempGuess)){
				message("por favor digite um numero", "red");
                
				} 
				else if (tempGuess === game.num){
				message("numero correto", "green");
				game.advinharInput.style.borderColor="green";
                game.btn.style.display="none";  
                game.playAgain.style.display="block";
                 
				}
				else {
				let holder= tempGuess> game.num ?
					{"c":"blue","m":"é menor"} : 
					{"c":"purple","m":"é maior"};
				message(holder.m +"", holder.c);
				game.advinharInput.style.borderColor=holder.c;
				}
				console.log(tempGuess);
			}
			function init(){
			game.num=ranNumber(game.min,game.max);
			let tempMes=("Bem vindo ao jogo. Advinhe um numero de " +game.min+ "até " +game.max );
			message(tempMes);
			}
			function ranNumber(min,max){
			return Math.floor(Math.random()*(max - min +1)+min);
			
			}
			function message(mes,clr){
				game.message.innerHTML=mes;
				game.message.style.color=clr ||"red";
			}