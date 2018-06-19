let s1 = Symbol('key')
let s2 = Symbol('key')
let s3 = Symbol.for('key')
let s4 = Symbol.for('key')

console.log('s1', s1)
console.log('s2', s2)
console.log('s3', s3)
console.log('s3=s4', s3 === s4)
console.log('s1=s3', s1 === s3)

const L = {
	name: Symbol('terry')
}

console.log('L', L)

function isName(name) {
	if(name === L.name){
		console.log('haha')
	} else {
		console.log('GG')
	}
}

isName(Symbol('terry'))
isName(Symbol.for('terry'))
isName('terry')

