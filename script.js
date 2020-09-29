d3.csv('cities.csv', d3.autoType).then(data=>{

  //filter data to European cities only
  data = data.filter(d=>d.eu === TRUE);

  //sort the data by population size
  data.sort((a,b)=>b.population-a.population);

  //Add Labels to top 10 cities
  //data = data.slice(0,10);

  const extent = d3.extent(data, d=>d.population);
  
  //create simple plot
  d3.select('body').append('svg')
    .attr('width', 500)
    .attr('height', 500);


  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', (d, i)=> (i+1)+20)
    .attr('cy', 25)
    .attr('r', d=>d.population/extent[1]*10)
    const width = 700;
    const height = 550;
    .attr('width', width)
    .attr('height', height);
    const svg = d3.select('.population-plot')
    .append('svg')
    
    


  console.log('cities', data);
  
})

