var fs = require('fs');
var file = __dirname+'/file.txt';

var promesa = new Promise(
	function(resolve, reject){
		console.log('Bienvenidos 1');
		setTimeout(function(){
			mensaje();
			cuadrado(2);
			resolve();
		}, 6000);
	}
);

promesa.then(
	function(){
		leer();
		console.log('la promesa ha devuelto');
	}
).then(
	function(){
		setTimeout(()=>{
			console.log('Bienvenidos 3')			
		}, 5000);
		// return 3
	}
).then(
	()=>{
		console.log('Buenas');
	}
)

function mensaje(){
	console.log('Mensaje....');
}

function cuadrado(lado){
	console.log(lado*lado);
}

function leer(){
	fs.readFile(file, 'utf-8', (err, data)=>{
		if(err){
			console.log('Error al intentar leer el archivo');
			return false;
		}

		console.log(data);
		console.log('todo ha salido bien con la lectura del archivo');
	})
}


// promesa dentro de otra promesa no funciona