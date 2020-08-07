function setVisibility(x)
{
	//alert(x);
	if(x=="cloth")
	{		
		var select = document.getElementById("products");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var select1= document.getElementById("brand");
		var length = select1.options.length;
		for (i = length-1; i >= 1; i--) {
		  select1.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Shirt";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Pant";
		select.add(option);
	}
	if(x=="gadget")
	{		
		var select = document.getElementById("products");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var select1= document.getElementById("brand");
		var length = select1.options.length;
		for (i = length-1; i >= 1; i--) {
		  select1.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Mobile";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Laptop";
		select.add(option);
	}
	if(x=="Shirt")
	{		
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Shirt1";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Shirt2";
		select.add(option);
	}
	if(x=="Pant")
	{		
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Pant1";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Pant2";
		select.add(option);
	}
	if(x=="Mobile")
	{		
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Samsung";
		select.add(option);
		var option = document.createElement("option");
		option.text = "iphone";
		select.add(option);
	}
	if(x=="Laptop")
	{		
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Dell";
		select.add(option);
		var option = document.createElement("option");
		option.text = "HP";
		select.add(option);
	}
}
function statusSelectTag(x)
{
	  setVisibility(x);
	  updateChart();
}
function updateChart()
{
	var x=document.getElementById("container");
	x.remove();
	document.getElementById("main").innerHTML="<div id='container'></div>";
	var chart = anychart.column();
	chart.animation(true);
	chart.title('Sales By Month for');
	var data=[1,2,3,4];
	for(var i=0;i<data.length;i++)
		data[i]+=Math.ceil(Math.random()*300)+20;
    var series = chart.column([
        ['January', data[0]],
        ['February', data[1]],
        ['March', data[2]],
        ['April', data[3]]
    ]);  

    chart.yScale().minimum(0);  

    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');
    chart.xAxis().title('Months');
    chart.yAxis().title('Sales');
    chart.container('container');
chart.draw();

}