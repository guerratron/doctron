	window.addEventListener('DOMContentLoaded', function(){
		//LISTENERS PLUS-MINUS BUTTONS (By GuerraTron)
		var els=document.getElementsByClassName("subsection-body-items");
		for(var i=0; i<els.length; i++){
			var el=els[i];
			var target = el.previousSibling.innerHTML ? el.previousSibling : el.previousSibling.previousSibling;
			var sep=document.createElement("span");
			sep.innerHTML = "&emsp;";
			var plusMinus = document.createElement("span");
			plusMinus.setAttribute("class", "button-plusMinus");
			plusMinus.setAttribute("title", "view/hide");
			plusMinus.innerHTML = "&Delta;"; //"&uarr;"
			plusMinus.addEventListener("click", function(ev){
				var el2 = ev.target.parentNode;
				var target2 = el2.nextSibling.innerHTML ? el2.nextSibling : el2.nextSibling.nextSibling;
					if(target2.style.display == "none"){
						target2.style.display = "block";
						ev.target.innerHTML = "&Delta;"; //"&uarr;"
					}else{
						target2.style.display = "none";
						ev.target.innerHTML = "&nabla;"; //"&darr;";
					}
			});
			target.appendChild(sep);
			target.appendChild(plusMinus);
		}
    
		//LISTENERS MEDIA600 BUTTONS (By GuerraTron)
		var btns=document.getElementsByClassName("button-menu");
		for(var i=0; i<btns.length; i++){
			var btn=btns[i];
			btn.addEventListener("click", function(ev){
				var b = ev.target;
				var targets = document.getElementsByClassName("itemsNav-media600");
				for(var j=0; j<targets.length; j++){
					var target = targets[j];
					if(target.style.display == "none"){
						target.style.display = "block";
						ev.target.innerHTML = "&Delta;"; //"&uarr;"
					}else{
						target.style.display = "none";
						ev.target.innerHTML = "&nabla;"; //"&darr;";
					}
				}
			});
		}
    
    //SELECT-THEME
    var theme = document.getElementById("cssTheme");
		if(theme){
      var selTheme = document.getElementById("selCssTheme");
      if(selTheme){
        var themeHref = theme.getAttribute("href").split("-");
        selTheme.value = themeHref[themeHref.length-1].split(".")[0];
        selTheme.addEventListener("change", function(ev){
          themeHref.pop();
          themeHref.push(selTheme.value +".css");
          theme.setAttribute("href", themeHref.join("-") );
        });
      } else {
        theme = null;
      }
    }
    
    //SMOOTH-SCROLL by https://github.com/cferdinandi THANKS!
    smoothScroll.init();
	});
	
	//DEBUG 
	function debugShowHide(objName){
		var debs=document.getElementsByClassName("debug");
		for(var i=0; i<debs.length; i++){
			var deb = debs[i];
			if(deb.getAttribute("id") === ("debug-zone-"+ objName)){
				if(deb.style.display == "none"){
					deb.style.display = "block";
				}else{
					deb.style.display = "none";
				}
			}
		}
	}
