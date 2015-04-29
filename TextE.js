window.onload = function() {
// --- шаблон функції ---
	function getE(a) {
		return document.getElementById(a);
	};
// --- end шаблон функції ---

		var df = document.forms.f1;

// --- код кнопки Стилызувати ---
		df.creat.onclick = function() {
		getE("redahChText").style.display = "none";
		getE("creatChText").style.display = "block";


// --- зміна розміру шрифта через radio button ---
	
		for(var i=0; i< 5; i++){
			df.rbtn[i].onclick=function(){
				for(var j=0; j< 5; j++){
					if(df.rbtn[j].checked)
					getE("vewText").style.fontSize = df.rbtn.value;
				}
			}
		}

// --- end зміна розміру шрифта через radio button ---

// --- зміна стилю написання ---
		df.list.onchange=function(){
			for(var i=0; i< df.list.length; i++){
				if(df.list.options[i].selected)
					getE("vewText").style.fontFamily = df.list.options[i].value;
			}
		}
// --- end зміна стилю написання ---

// --- text color ---
		df.textColor.onclick = function(){
			getE("tableCol").style.display = "none";
			getE("tableCol").style.display = "table";

// --- get color from  the taable to text colo ---
				var y = document.getElementsByClassName("colors")
				for(var j = 0; j < y.length; j++){
						y[j].onclick = function(){
					getE('vewText').style.color = this.style.background;
				}
				}
// --- end get color from  the taable to text colo ---
		}

// --- Background color ---
		df.backColor.onclick = function(){
			getE("tableCol").style.display = "none";
			getE("tableCol").style.display = "table";
			//getE("tableCol").style.marginRight = "200px";

// --- get color from  the taable to background ---
				var y = document.getElementsByClassName("colors")
				for(var j = 0; j < y.length; j++){
						y[j].onclick = function(){
					getE('vewText').style.background = this.style.background;
				}
				}
// --- end get color from  the taable to background ---
		}

//--- приховання таблиці кольорів ---
		getE("tableCol").onclick = function(){
				getE("tableCol").style.display = "none";
		}
// --- end приховання таблиці ---

		df.boldBtn.onclick = function() {
		if(this.checked) getE("vewText").style.fontWeight = "bold";
		else getE("vewText").style.fontWeight = "normal";
	}
		df.italikBtn.onclick = function() {
		if(this.checked) getE("vewText").style.fontStyle = "italic";
		else getE("vewText").style.fontStyle = "normal";
		}

};


// --- Код кнопки Редагування ---
		df.redah.onclick = function() {
		df.textArea.value = getE("vewText").innerHTML;
		getE("creatChText").style.display = "none";
		getE("redahChText").style.display = "block";
		};
		df.save.onclick = function() {
			getE("vewText").innerHTML = df.textArea.value;
		}

// --- кнопка додати ---
		df.add.onclick = function() {
			getE("newPage").style.display="block";
			getE("backNewPage").style.display="block";
}

// --- вибір списку або таблиці ---
			df.radioSwap[0].onclick=function(){
					getE("optionList").style.display = "none";
					getE("optionTable").style.display = this.value;
		}

			df.radioSwap[1].onclick=function(){
					getE("optionTable").style.display = "none";
					getE("optionList").style.display = this.value;
			}

// --- побудова таблиці ---
		df.creatTable.onclick = function(){

// --- кількість елементів ---
			var rowd = +df.trNamber.value;
			var stowpci = +df.tbNamber.value ;
			var t = "<table id='createdTable'>";

				for(var i=0; i<rowd; i++){
				t += "<tr>";
						for(var j=0; j<stowpci; j++){
					t+="<td class='createdTable'></td>";
					}
				t += "</tr>";
				};

					t += "</table>";
				getE("vewText").innerHTML = df.textArea.value + t;

// --- ширина, стиль таблиці ---
				var x = document.getElementsByClassName("createdTable")

				for (var i = 0; i < x.length; i++) {
					x[i].style.width = df.widthTd.value + "px";
					x[i].style.height = df.heightTd.value + "px";
					x[i].style.borderWidth = df.thickBorder.value + "px";
					x[i].style.borderStyle = df.typeBorder.value;
					x[i].style.borderColor = df.colorBorder.value;
				}
				getE("newPage").style.display="none";
				getE("backNewPage").style.display="none";
		}
// --- end побудова таблиці ---	

// --- побудова списку ---
		df.listType.onchange=function(){
				if(df.listType.options[1].selected){
					getE("marker").style.display="block";
				}else{
					getE("marker").style.display="none";
				}
			}

		df.creatList.onclick = function(){
			var list = df.listType.value;
			var items = df.listNamber.value;
			var types = df.markerType.value;
			var t = "<"+list+" type='"+types+ "'>";

			for(var i=1; i<=items; i++){
			t += "<li>"+ prompt("text","")+"</li>";
			}

				t += "</"+list+">";
				getE("vewText").innerHTML = df.textArea.value + t;
				getE("newPage").style.display="none";
				getE("backNewPage").style.display="none";
		}
// --- закривання вікна додавання списку і таблиці ---
		getE("backNewPage").onclick = function() {
			getE("newPage").style.display="none";
			this.style.display="none";
		}
	}