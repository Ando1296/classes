class Triangle{
	constructor(a,b,c){
		this.a = a;
		this.b = b;
		this.c = c;
	}
	p(){
		return (this.a + this.b + this.c) / 2;
	}
	getPerimeter(){
		return this.a + this.b + this.c;
	}
	getArea(){
		return Math.sqrt(this.p() * (this.p() - this.a) * (this.p() - this.b) * (this.p() - this.c));
	}
}
setInterval(console.log(5),2000);
function maxDigit(number){
	let b = number.toString().split('');
	let a = b[0];
	for(let i = 0; i < b.length; i++){
		if(a < b[i]){
			a = +b[i];
		}
	}
	return a;
}
let arr1 = 'john'.split('');
let arr2 = arr1.reverse();
arr3 = 'jognoton'.split('');
arr2 = arr1.push(arr3);
//arr1 i length y klini 5 5 rdum klcvi arr3 masivy 
// isk arr2 u kta 5 aysinqn arr2.length kta undefined 
console.log(arr1);
console.log(arr2);
console.log(arr3);
array = [15,16,17,18,19,20,21];
array.sort(function(a,b){
	return a - b;
})
let matrix = [
	[1,2,3,4,5],
	[1,2,3,4,5],
	[0,2,3,4,5],
	[10,11,12,0,5],
	[11,12,13,14,15],
];
function counting(matrix){
	let counter = 0;
	for(let i = 0; i < matrix.length; i++){
		for(let j = 0; j < matrix[i].length; i++){
			if(matrix[i][j] == 0){
				if(i + 1 < matrix.length - 1){matrix[i+1][j] = 0}
                if(i + 2 < matrix.length - 1){matrix[i+2][j] = 0}
                if(i + 3 < matrix.length - 1){matrix[i+3][j] = 0}
                if(i + 4 < matrix.length - 1){matrix[i+4][j] = 0}
			}
			counter += matrix[i][j];
		}
	}
	return counter;
}
console.log(counting(matrix));