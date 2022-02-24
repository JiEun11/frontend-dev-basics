var tabBox = {
	
	_onWindowLoad: function(){
		console.log('dom loaded!');
		
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		
		var liTabs = ul.getElementsByTagName("li");
		for(var i = 0; i < liTabs.length; i++){
			liTabs[i].addEventListener("click",this._onTabClicked);
		}
	
	},
	_onTabClicked: function(){
		// selected 를 가지고 있는 애를 찾아서 unselected 하기
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length === 1) && (lisSelected[0].className = "");

		// select
		this.className = 'selected';
	},
	
	init: function() {
		window.addEventListener('load', this._onWindowLoad.bind(this));
		console.log(this);
	}
}
