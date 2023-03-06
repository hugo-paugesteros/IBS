const results = document.querySelector('#results')

// INIT
const START = 8
const END = 24

function dateToY(date) {
	const h = date.getHours()
	const m = date.getMinutes()
	return (h - START + m/60) / (END - START) * 100
}

for (let i = START; i <= END ; i++) {
	const y = 100 / (END - START) * (i - START)
	const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
	line.setAttribute('class', 'line')
	line.setAttribute('x1', 5)
	line.setAttribute('x2', 20)
	line.setAttribute('y1', y)
	line.setAttribute('y2', y)
	results.appendChild(line)
	
	const label = document.createElementNS('http://www.w3.org/2000/svg', 'text')
	label.setAttribute('class', 'label')
	label.setAttribute('x', 0)
	label.setAttribute('y', y)
	label.innerHTML = i + "h"
	results.appendChild(label)
}

// const now = document.createElementNS('http://www.w3.org/2000/svg', 'line')
// const y = dateToY(new Date())
// now.setAttribute('class', 'now')
// now.setAttribute('x1', 5)
// now.setAttribute('x2', 20)
// now.setAttribute('y1', y)
// now.setAttribute('y2', y)
// results.appendChild(now)

function addDate(date) {
	const y = dateToY(new Date(date))
	// const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
	// circle.setAttribute('cx', 12.5)
	// circle.setAttribute('cy', y)
	// circle.setAttribute('r', .5)
	// results.appendChild(circle)

	const now = document.createElementNS('http://www.w3.org/2000/svg', 'line')
	now.setAttribute('class', 'now')
	now.setAttribute('x1', 5)
	now.setAttribute('x2', 20)
	now.setAttribute('y1', y)
	now.setAttribute('y2', y)
	results.appendChild(now)
}