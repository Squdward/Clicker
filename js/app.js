document.addEventListener("DOMContentLoaded", function () {

	function gameStart() {


		let Monster = document.querySelector(".monster-image");
		let damagPlus = document.querySelector(".damage_plus");
		let Money = document.querySelector(".money-window");
		let levels = document.querySelector(".levels");



		let player = {
			damage: 1,
			cost: 10,
		};
		let MonstersParams = {
			health: 25,
			price: 10,
		} 



	

		let health = MonstersParams.health
		/*<--------------------------------------------------------------------> */

		function newLevel() {
			let gameBody = document.querySelector(".body-inner");
			levels.innerHTML = ++levels.textContent



			MonstersParams.health += 25
			health = MonstersParams.health;
			MonstersParams.price += 5;


			switch (true) {
				case (levels.textContent >= 10 && levels.textContent <= 20):
					MonstersParams.health += MonstersParams.health / 100 * 15;
					gameBody.style.backgroundImage = "url(/images/dest/Background/bg-2.jpg)"
					levels.style.backgroundImage = "url(/images/dest/Background/bg-2.jpg)"
					break;
				case (levels.textContent >= 20 && levels.textContent <= 30):
					MonstersParams.health += MonstersParams.health / 100 * 20;
					gameBody.style.backgroundImage = "url(/images/dest/Background/bg-3.jpg)"
					levels.style.backgroundImage = "url(/images/dest/Background/bg-3.jpg)"
					break;
				case (levels.textContent >= 30 && levels.textContent <= 40):
					MonstersParams.health += MonstersParams.health / 100 * 25;
					gameBody.style.backgroundImage = "url(/images/dest/Background/bg-4.jpg)"
					levels.style.backgroundImage = "url(/images/dest/Background/bg-4.jpg)"
					break;
			}

		}

		function popup(parent, text, addClass="defaultPopup") {
				let popupName = document.createElement("span");
				popupName.innerHTML = `${text}`;
				popupName.classList.add(addClass);
				parent.append(popupName);
				
				popupName.addEventListener("animationend", () => {
					popupName.remove();
				});
		}

		function fillbar() {
			/*<!-------------------------------------*/
			let formule = (health / MonstersParams.health) * 100; 
			/*<!-------------------------------------*/
			let healtBar = document.querySelector(".monster_health span");
			let healtBarOst = document.querySelector(".monster_health__ost");
	

			healtBar.style.width = formule + "%"
			healtBarOst.innerHTML = Math.floor(formule) + "%"
		}

		function killMonster() {

			Money.innerHTML = +Money.textContent + MonstersParams.price
			popup(Money, `+${MonstersParams.price}`, )
		}

		function critDamage() {
			health = health - 20
			
		}



		function randomInteger(min, max) {
			let rand = min + Math.random() * (max + 1 - min);
				rand = Math.floor(rand)
			if(rand == 4 ) {
				critDamage()
			}
			else {
				return false
			}
		}


	

		Monster.addEventListener("click", () => {
			health -= player.damage;

			fillbar()

			popup(Monster, `-${Math.floor(player.damage)}`, "takenDamage")

			randomInteger(1, 25)
			if (health <= 0) {
				killMonster()
				newLevel()
			
			}
		})


		damagPlus.addEventListener("click", () => {
			let DamageWindow = document.querySelector(".damage-window");
			let costIncr = document.querySelector(".price");
		

			if (Money.textContent >= player.cost) {
				DamageWindow.innerHTML = ++player.damage

				Money.innerHTML = Money.textContent - player.cost;


				// 
				player.cost += 10;
				costIncr.innerHTML = player.cost
				// 



				popup(DamageWindow, "+1")
			}

			else {
				if (!document.querySelector(".nothaveMoney")) {
					popup(damagPlus, "not enough money", )
				}
			}
		})

	} // end


	gameStart()

});
