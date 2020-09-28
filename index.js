d3.csv('cities.numbers').then(data=>{
	console.log('cities.numbers', data);
})

d3.csv('cities.numbers', d=>{
    return {
      ...d, // spread operator
      eu: d.eu==='true', // convert to boolean
      population: +d.population,
      x: +d.x,
      y: +d.y,
    }
  }).then(data=>{
      console.log('cities.numbers', data);
  })