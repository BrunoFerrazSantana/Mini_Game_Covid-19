//Definição das variáveis do jogo
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

//Definição da função que ajusta a tela do jogo
function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

//Chamando a função de ajuste de tela do jogo
ajustaTamanhoPalcoJogo()

//Definição da variável do cronômetro
var cronometro = setInterval(function(){

	tempo -= 1 

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaCorona)
		window.location.href = 'vitoria.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
},1000)

function posicaoRandomica(){
	//Remove o alvo corona anterior(caso exista)
	if(document.getElementById('corona')){
		document.getElementById('corona').remove()

		//Substitução das vidas perdidas por coração vazio
		if (vidas > 3){
			window.location.href = 'fim_de_jogo.html'
		} else{
			document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'

			vidas++
		}
	}
	
	//Variáveis responsáveis por fazer o alvo aparecer aleatoriamente na tela
	var posicaoX = Math.floor(Math.random() * largura) -200
	var posicaoY = Math.floor(Math.random() * altura) -200

	//Operador ternário
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//Criação do elemento HTML
	var corona = document.createElement('img')
	corona.src = 'imagens/corona.png'
	corona.className = tamanhoAleatorio() +' '+ ladoAleatorio()
	corona.style.left = posicaoX + 'px'
	corona.style.top = posicaoY + 'px'
	corona.style.position = 'absolute'
	corona.id = 'corona'
	corona.onclick = function(){
		this.remove()
	}

	document.body.appendChild(corona)
}

//Definição da função que ajusta o tamanho do alvo
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe){

		case 0:
			return 'corona1'

		case 1:
			return 'corona2'

		case 2:
			return 'corona3'
	}

}

//Definição da função que muda alvo para o lado esquerdo ou direito
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){

		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}