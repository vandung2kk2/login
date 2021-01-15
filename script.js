var inp = document.getElementsByClassName("inp");
var username = document.getElementById("username");
var password = document.getElementById("password");
for(let i=0;i<inp.length;i++){
	inp[i].addEventListener("keyup",function(){
		if(this.value != ""){
			this.nextElementSibling.classList.add("activeInp");
		}else{
			this.nextElementSibling.classList.remove("activeInp");
		}
	})
}

var url = "https://script.google.com/macros/s/AKfycbzz3LNrwY2k2WKzDOsUizxiWFC_B21T4Pc2lpFdNB3glMsoKkvEOUPy/exec";
var submit = document.getElementById("login-btn");
submit.addEventListener("click",function(){
	let request = new XMLHttpRequest();
	request.open("GET",url + "?username=" + username.value + "&password=" + password.value);
	request.onreadystatechange = function(){
		if(this.readyState == 4){
			alert(this.responseText)
		}
	}
	request.send()
})
/*if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  document.write("mobile");
}else{
  document.write("not mobile");
}*/