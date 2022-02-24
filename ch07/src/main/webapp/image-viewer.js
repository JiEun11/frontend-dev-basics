var imageViewer = {
	init: function() {
		$(function() {
			console.log("DOM loaded!!!");
			console.log(this);	// bind 없이 : #document bind 해주면 : Object 

			$("#btn-change").click(this._changeImage.bind(this));
			$(".image-viewer img").click(this._changeImage.bind(this));
			$("#btn-slideshow").click(this._imagePlaying.bind(this));
			
			// show the image when enter the page 
		this._changeImage();
		}.bind(this));

	},
	
	_changeImage: function() {
		var index = Math.floor(Math.random() * this._images.length);
		$(".image-viewer img").attr({
			alt: this._images[index].name,
			src: "images/" + this._images[index].file
		});
	},
	
	_imagePlaying: function() {
			if(this._intervalId){
				// status is a slide playing
				
				// 1. stop the timer
				clearInterval(this._intervalId);
				this._intervalId = null;
				
				// 2. change the button text 
				$('#btn-slideshow').text("Start the slide show"); 
			}else{
				// status is a slide pausing
				
				// 1. set the timer
				this._intervalId = setInterval(function(){
					this._changeImage();
				}.bind(this),1000);
				
				// 2. change the button text
				$('#btn-slideshow').text("Stop the slide show");
			}
	},
	
	_intervalId: null,	// clearInterval을 위한 interval variable
	_images: [
        {
          name: "국화",
          file: "Chrysanthemum.jpg",
        },
        {
          name: "사막",
          file: "Desert.jpg",
        },
        {
          name: "수국",
          file: "Hydrangeas.jpg",
        },
        {
          name: "해파리",
          file: "Jellyfish.jpg",
        },
        {
          name: "코알라",
          file: "Koala.jpg",
        },
        {
          name: "등대",
          file: "Lighthouse.jpg",
        },
        {
          name: "펭귄",
          file: "Penguins.jpg",
        },
        {
          name: "툴립",
          file: "Tulips.jpg",
        }
      ]
}