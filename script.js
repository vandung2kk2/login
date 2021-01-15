var inp = document.getElementsByClassName("inp");
for(let i=0;i<inp.length;i++){
	inp[i].addEventListener("keyup",function(){
		if(this.value != ""){
			this.nextElementSibling.classList.add("activeInp");
		}else{
			this.nextElementSibling.classList.remove("activeInp");
		}
	})
}