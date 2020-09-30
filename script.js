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


  const margin = {top: 30, right: 20, bottom: 30, left: 50};


  const x = d3.scaleLinear()
    .domain([0,50000])
    .range([0, width]);

    
  const y = d3.scaleBand()
    .range([0, height])
    .domain(data.map(function(d) {
      return d.building;
    }))
    .paddingInner(0.15);

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', function(d) {
      return x(d.height_ft * 20);
    })
    .attr('height', y.bandwidth())
    .attr('x', x(0))
    .attr('y',function(d) {
      return y(d.building);
    })
    .attr('fill', 'lightblue')

    .on("click", function(d) {
      console.log("Click")

      let data = d.path[0].__data__;
      d3.select('.image')
        .attr("src", (d,i) => data.image);
      d3.select(".name")
        .text(d=>data.building)
      d3.select('.height')
        .text(d=>data.height_ft);
      d3.select('.city')
        .text(d=>data.city);
      d3.select('.country')
        .text(d=>data.country);
      d3.select('.floors')
        .text(d=>data.floors);
      d3.select('.completed')
        .text(d=>data.completed);
    })

    .on('mouseon', function (d, i) {
      d3.select(this).transition()
        .duration('50')
      })
    .on('mouseout', function (d, i) {
      d3.select(this).transition()
        .duration('50')
      })


  svg.selectAll('container2')
    .data(data)
    .enter()
    .append('text')
    .text(function(d) {
      return d.height_ft + ' ft';
    })
    .attr('font-size', 11)
    .attr('fill', 'black')
    .attr('x', function(d) {
      return x(d.height_ft * 19.5)
    })
    .attr('y', function(d){ 
      return y(d['building']) + y.bandwidth()/2;
    })
    .attr('text-anchor', 'end')

    

  svg.selectAll('.container1')
		.data(data)
		.enter()
		.append('text')
		.text(function(d)
		{
			return d.building
		})
		.attr('x', 0)
		.attr('y', function(d){ 
      return y(d['building']) + y.bandwidth()/2;
    })
		.attr('font-size', 10)


 })



