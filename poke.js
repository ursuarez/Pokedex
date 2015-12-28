function Pokemon(n,v,a,t,g){
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.tipo = t;
	this.grito=g;
	
	this.gritar=function(){
			alert(this.grito);
			}
}

function Pikachu(){
	var pikachu = new Pokemon ("Pikachu", 80, 50,"Eléctrico","¡Pika pika!");
	alert(pikachu.gritar());
	nombrePokemon.textContent = pikachu.nombre;
	datosPokemon.textContent  = "La vida de " + pikachu.nombre + " es de: " + pikachu.vida;
	datosPokemon1.textContent = "El ataque " + pikachu.nombre + " es de: " + pikachu.ataque;
	datosPokemon2.textContent = pikachu.nombre + " es un pokémon tipo: " + pikachu.tipo;
	infopoke.innerHTML = '<em>"Mantiene su cola en alto para vigilar. Si das un tirón a su cola, querrá morderte.</em>"';
	document.write('<br/><img src="img/pikachu.png"/>');
}

function Bulbasaur(){
	var bulbasaur = new Pokemon ("Bulbasaur", 60, 60,"Hierba","¡Buba buba!");
	alert(bulbasaur.gritar());
	nombrePokemon.textContent = bulbasaur.nombre;
	datosPokemon.textContent  = "La vida de " + bulbasaur.nombre + " es de: " + bulbasaur.vida;
	datosPokemon1.textContent = "El ataque de " + bulbasaur.nombre + "es de: " + bulbasaur.ataque;
	datosPokemon2.textContent = bulbasaur.nombre + " es un pokémon tipo: " + bulbasaur.tipo;
	infopoke.innerHTML = '<em>"Puede sobrevivir largo tiempo sin probar bocado. Guarda energía en el bulbo de su espalda.</em>"';
	document.write('<br/><img src="img/bulbasaur.png"/>');
}

function Squirtle(){
	var squirtle = new Pokemon ("Squirtle", 70, 50,"Agua","¡Squire squire!");
	alert(squirtle.gritar());
	nombrePokemon.textContent = squirtle.nombre;
	datosPokemon.textContent  = "La vida de" + squirtle.nombre + " es de: " + squirtle.vida;
	datosPokemon1.textContent = "El ataque de " + squirtle.nombre + "es de: " + squirtle.ataque;
	datosPokemon2.textContent = squirtle.nombre + " es un pokémon tipo: " + squirtle.tipo;
	infopoke.innerHTML = '"<em>Lanza agua a su presa desde el agua. Se esconde en su concha cuando se siente en peligro.</em>"';
	document.write('<br/><img src="img/squirtle.png"/>');
}

function Charmander(){
	var charmander = new Pokemon ("Charmander", 80, 30,"Fuego","¡Charma Charma!");
	alert(charmander.gritar());
	nombrePokemon.textContent = charmander.nombre;
	datosPokemon.textContent  = "La vida de " + charmander.nombre + " es de: " + charmander.vida;
	datosPokemon1.textContent = "El ataque de " + charmander.nombre + " es de: " + charmander.ataque;
	datosPokemon2.textContent = charmander.nombre + " es un pokémon tipo: " + charmander.tipo;
	infopoke.innerHTML = '"<em>La llama en la punta de su cola chisporrotea al arder. Sólo se oye en lugares silenciosos.</em>"';
	document.write('<br/><img src="img/charmander.png"/>');
}