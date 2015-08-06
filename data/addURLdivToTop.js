var origBodyContent = document.body.innerHTML;

var navigationDiv = document.createElement("div");
navigationDiv.setAttribute("id","gamepadnav");
navigationDiv.setAttribute("style","position:fixed;background:white;width:100%;");
navigationDiv.innerHTML = '<input id="theurl" value="http://google.com/"></input><button onclick=\'window.location.href=document.getElementById("theurl").getAttribute("value")\'>GoThere</button>';

var origBodyDiv = document.createElement("div");
origBodyDiv.setAttribute("id","origBody");
origBodyDiv.setAttribute("style","padding-top:2em;");
origBodyDiv.innerHTML = origBodyContent;

document.body.innerHTML = "";
document.body.appendChild(navigationDiv);
document.body.appendChild(origBodyDiv);
