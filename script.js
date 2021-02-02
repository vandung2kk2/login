window.onload=function(){
	var login = document.getElementById("login"),
		user = document.getElementById("username"),
		pass = document.getElementById("password");
	var inp = document.getElementsByClassName("inp");
	for(let i=0; i<2;i++){
		inp[i].addEventListener("input", function(){
			if(this.value != ""){
				this.classList.add("active")
			}else this.classList.remove("active");
		})
	}
	inp[1].addEventListener("keydown", function(k){
		if(k.key == "Enter") login.click();
	})
	var show = document.getElementById("show");
	show.onclick = function(){
		if(pass.getAttribute("type") == "password"){
			pass.setAttribute("type","text");
			this.innerText = "Hide";
			pass.setAttribute("autofocus",true);
		}else{
			pass.setAttribute("type","password");
			this.innerText = "Show";
			pass.setAttribute("autofocus",true);
		}
	}
	var url = "https://script.google.com/macros/s/AKfycbzz3LNrwY2k2WKzDOsUizxiWFC_B21T4Pc2lpFdNB3glMsoKkvEOUPy/exec";
	var clicked = false;
	login.addEventListener("click",function(){
		if(!clicked){
			document.querySelector(".contain-slide").style.display = "none";
			this.classList.add("clicked");
			this.innerText = "Processing...";
			checkLogin(this);
		}
		clicked = true;
	})
	function checkLogin(ptr){
		let request = new XMLHttpRequest();
		request.open("GET",url + "?username=" + username.value + "&password=" + password.value);
		request.onreadystatechange = function(){
			if(this.readyState == 4){
				clicked = false;
				ptr.innerText = "Login";
				ptr.classList.remove("clicked");
				if(this.responseText == "false"){
					document.querySelector(".contain-slide").style.display = "block";
				}else{
					alert("Login Successfully!")
				}
			}
		}
		request.send()
	}
}