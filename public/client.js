function getUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/getUsers", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
			var users= []
			users = this.responseText.toString().split('\n');
			var list="<ul>"
			for(i=0; i<(users.length-1);i++) {
				list += "<li>"+users[i] +"</li>"
				}
			list += "</ul>";
            document.getElementById("user-list").innerHTML = list;
        }
    }
}

