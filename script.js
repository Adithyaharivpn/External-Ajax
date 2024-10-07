document.getElementById("table1").style.display = 'none';
function get() {
    //step 1
    var xhttp = new XMLHttpRequest();
    //step2
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    //step3
    xhttp.send();
    //step4
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var json=JSON.parse(this.responseText);
        let val="";
        for (let i = 0; i <json.length; i++) {
          val +=`<tr><td>${json[i].name}</td><td>${json[i].username}</td><td>${json[i].address.city}</td></tr>`;    
        } 
        document.getElementById("table").innerHTML = val;
      }
    };
    document.getElementById("table1").style.display = '';
  }


  