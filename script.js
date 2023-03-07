const clearButton 	= document.querySelector('#clear')
const addButton 	= document.querySelector('#add')

var memory = []
if (localStorage.flareups) {
	memory = JSON.parse(localStorage.flareups)
}

memory.forEach(date => {
	addDate(date)
})

clearButton.addEventListener('click', (e) => {
	// localStorage.flareups = JSON.stringify([])
	localStorage.clear()
})

addButton.addEventListener('click', (e) => {
	const date = Date()
	memory.push(date)
	localStorage.flareups = JSON.stringify(memory)
	addDate(date)
})