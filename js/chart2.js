var chart2 = document.getElementById("chart2");

var myLineChart = new Chart(chart2, 
	
{type:"line",

data:{

	labels:["January","February","March","April","May","June","July"],
	datasets:[
			{label:"My First Dataset",
			data:[65,59,80,81,56,55,40],
			fill:false,
			borderColor:"rgb(75, 192, 192)",
			borderWidth: 10,
			lineTension:0}],
	options:{
		scales:{
			
			fontSize: 20
		},
		legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
				fontSize: 100
            }
        }
		}
	}
	
});



	
