d3.select('.city-count').text('cities.csv'.length + " Total Countries")
  .attr("font-size", '34px')
  .style("font-weight", "bold");

d3.csv('cities.csv', d3.autoType).then(data=>{

  console.log('cities', data)

  data = data.filter(d=>d.eu === true);

  data.sort((a,b)=>b.population-a.population);

  const extent = d3.extent(data, d=>d.population);
  

    const width = 700;
    const height = 550;
  const svg = d3.select('.population-plot').append('svg')
    .attr('width', width)
    .attr('height', height);
    

  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', function(d){
      return d.x;
    })
    .attr('cy', function(d){
      return d.y;
    })
    .attr('r', function(d) {
			if (d.population >= 1000000) {
				return 4 }
			else {
				return 8
			}
		})
    .attr('fill', 'lightblue')



  svg.selectAll('.container')
    .data(data)
    .enter()
    .append('text')
    .text(function(d) {
      if (d.population >= 1000000) {
        return d.city }
      else {
        return
      }
    })
    .attr('x', function(d){
      return d.x;
    })
    .attr('y', function(d){
      return d.y;
    })
    .attr('font-size', 11)
    .attr('text-anchor', 'middle')
    .attr('cx', function(d){
      return d.x;
    })
    .attr('cy', function(d){
      return d.y;
    })
 


 })


d3.csv('buildings.csv', d3.autoType).then(data=>{

  
  console.log('buildings', data)

  data.sort((a,b)=>b.height_ft-a.height_ft);

  const extent = d3.extent(data, d=>d.height_ft);
  

    const width = 500;
    const height = 500;
  const svg = d3.select('.building-plot').append('svg')
    .attr('width', width)
    .attr('height', height)

    
  const x = d3.scaleLinear()
    .domain([0,5000])
    .range([0, width]);

  const y = d3.scaleBand()
    .range([0, height])
    .domain(data.map(function(d) {
      return d.height_ft;
    }))

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')

    .attr('x', function(d) {
      return x(d.height_ft);
    })
    .attr('y', function(d) {
      return y(d.building);
    })
    .attr('width', function(d) {
      return x(d.height_ft);
    })
    .attr('fill', 'lightblue')





 })