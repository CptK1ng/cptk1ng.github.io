
//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var leader = document.getElementById("leader");
var colors = new Array("rgb(255,100,100)","rgb(100,255,100)");

var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["January", "Febuary", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "C4ptainK1ng",
				borderColor:"rgb(243,190,94)",
				borderWidth: 5,
				lineTension: 0,
				fill: false,
                data: [65, 59, 80, 81, 56, 55, 90]
            },
            {
                label: "Inchen",
				borderColor:"rgba(5,67,124)",
				borderWidth: 5,
				lineTension: 0,
				fill: false,
                data: [28, 48, 40, 19, 86, 27, 40]
            }
        ]
    },
    options: {
        responsive: true,
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: "rgb(210,210,210)",
				fontFamily: "Supercell-Magic"
            }
        },
		scales:{
		  xAxes:[{
			gridLines:{
			  color:"rgba(255,255,255,0)",
			  zeroLineColor:"rgba(255,255,255,0)"
			},
			ticks: {
				fontColor: "rgb(210,210,210)",
				fontFamily: "Raleway"
			}
		}],
		yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: "rgb(210,210,210)",
					fontFamily: "Raleway"
                },
            }],
    } 
	}	
});

myLineChart.defaults.global.defaultFontColor = 'red';

var highestDataSet = null;

function addData(dataset1, data1, dataset2, data2, label) {
	myLineChart.data.datasets[dataset1].data.push(data1);
	myLineChart.data.datasets[dataset2].data.push(data2);
	myLineChart.data.labels.push(label);
	
   /* chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });*/
	var highestData = 0;
	
	/*if(highestDataSet != undefined){
		
		highestDataSet.borderColor = "rgb(210,210,210)";
	}
	*/
	myLineChart.data.datasets.forEach((dataset) => {
		
		if(dataset.data[dataset.data.length-1] > highestData){
			highestData = dataset.data[dataset.data.length-1];
			highestDataSet = dataset; 
		/*	highestDataSet.borderColor = "rgb(243,190,94)";*/
			leader.innerHTML = dataset.label;
		}
	});
	
	
    myLineChart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
	
    chart.update();
};

function addValue(){
	
	addData(0,Math.floor(Math.random() * Math.floor(200)), 1, Math.floor(Math.random() * Math.floor(200)), "Label");
	
};

function addDataset(){
	
	
}
            