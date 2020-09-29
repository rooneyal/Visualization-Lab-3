d3.csv('cities.csv', d3.autoType).then(data=>{

  console.log('cities', data);

  //filter data to European cities only
  data = data.filter(d=>d.eu === true);

  //sort the data by population size
  data.sort((a,b)=>b.population-a.population);



  //Add Labels to top 10 cities
  //data = data.slice(0,10);
//rank>10 use opacity 1 

  const extent = d3.extent(data, d=>d.population);
  
  //create simple plot
  const svg = d3.select('.population-plot').append('svg')
    .attr('width', 500)
    .attr('height', 500);


  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', (d, i)=> (i+1)+20)
    .attr('cy', 25)
    .attr('r', d=>d.population/extent[1]*10)

    //create labels only for top 10 using opacity
    //definitino svg text
  
})

