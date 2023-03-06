const clearButton 	= document.querySelector('#clear')
const addButton 	= document.querySelector('#add')

var memory = [
	"Mon Mar 06 2023 9:28:14 GMT+0100 (Central European Standard Time)",
	"Mon Mar 06 2023 9:34:14 GMT+0100 (Central European Standard Time)",
	"Mon Mar 06 2023 9:49:14 GMT+0100 (Central European Standard Time)",
	"Mon Mar 06 2023 15:28:16 GMT+0100 (Central European Standard Time)",
	"Mon Mar 06 2023 21:28:19 GMT+0100 (Central European Standard Time)"
]

// var memory = []
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