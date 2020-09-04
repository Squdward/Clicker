document.addEventListener("DOMContentLoaded", function () {

	function gameStart() {

		// create healt bar
		// create auto attack bot
		// create  save system
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



		let a = 25;
		let b = 1;
			console.log((b / a) * 100 + "%")

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

		function popup(parent, text) {
			let notHaveMoney = document.createElement("div");
			notHaveMoney.innerHTML = `${text}`
			notHaveMoney.classList.add("nothaveMoney");
			parent.append(notHaveMoney);
			notHaveMoney.addEventListener("animationend", () => {
				notHaveMoney.remove();
			});
		}

		function fillbar() {
			let healtBar = document.querySelector(".monster_health span")
			healtBar.style.width = (health / MonstersParams.health) * 100 + "%" 
		}

		function killMonster() {

			Money.innerHTML = +Money.textContent + MonstersParams.price
			popup(Money, `+${MonstersParams.price}` )
		}


		Monster.addEventListener("click", () => {
			health -= player.damage;
			console.log(health)
			fillbar()


			if (health <= 0) {
				killMonster()
				newLevel()
			
			}
		})


		damagPlus.addEventListener("click", () => {
			let DamageWindow = document.querySelector(".damage-window");
		

			if (Money.textContent >= player.cost) {
				DamageWindow.innerHTML = ++player.damage

				Money.innerHTML = Money.textContent - player.cost
				player.cost += 10
				popup(DamageWindow, "+1")
			}

			else {
				if (!document.querySelector(".nothaveMoney")) {
					popup(DamageWindow, "not enough money")
				}
			}
		})

	} // end


	gameStart()

});
