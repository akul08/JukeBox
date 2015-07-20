var jukebox = document.querySelector('ul.player');
var seekbar;
var len = document.getElementsByTagName('li').length;
var j=-1;
var button = document.querySelector("#checkbox");
jukebox.addEventListener('click', function(e){
	e.preventDefault();
	console.log(e);

	var songName = e.target.getAttribute('data-src');
	for (var i = 0; i <len; i++) {
		if (document.getElementsByTagName('li')[i].getAttribute('data-src')===songName){
			break;
		}
	};
	var audioPlayer = document.querySelector('#player')

	if( audioPlayer ){
		if(songName===audioPlayer.getAttribute('src')){
			if(audioPlayer.paused){
			audioPlayer.play();
			e.target.id = 'playing';

		} else  {
	
			audioPlayer.pause();
			e.target.id = 'paused';
		}
		
	}	else{

			audioPlayer.src = songName;
			audioPlayer.play();
			if(document.querySelector('#playing')){
				document.querySelector('#playing').id = '';
			}	else 	{
				document.querySelector('#paused').id = '';
			}
				seekbar.remove();
				e.target.id = 'playing';
				
				seekbarAdder();
				e.target.appendChild(seekbar);

			}
	}
		else {
		var audioPlayer = document.createElement('audio');
		audioPlayer.id = 'player';
		e.target.id = 'playing';
		audioPlayer.src = songName;
		audioPlayer.setAttribute('ontimeupdate' , 'updateTime()');
		document.body.appendChild(audioPlayer);
		audioPlayer.play();
		
		seekbarAdder();
		e.target.appendChild(seekbar);
				}
		

		audioPlayer.addEventListener('ended', function(e){
					e.preventDefault();

					for (var i = 0; i < liElements.length; i++) {
							if(liElements[i].id ==='playing'){
								j=i;
								break;
							}
						}
					document.getElementById('seekbar').remove();
					e.target.id = '';
					if (button.checked){
							j++;
						if(button.checked  && j<liElements.length-1){
							while(liElements[j].style.display ==='none'){
								j++;

							}
							if(liElements[j].style.display !=='none'){
								e.target = liElements[j];
								audioPlayer.src = liElements[j].getAttribute('data-src');

								if(document.querySelector('#playing')){
									document.querySelector('#playing').id = '';
								}	else 	{
									document.querySelector('#paused').id = '';
								}
								liElements[j].id = 'playing';
								seekbarAdder();
								liElements[j].appendChild(seekbar);
								audioPlayer.play();
								audioPlayer.id ='player';
								audioPlayer.setAttribute('ontimeupdate' , 'updateTime()');
							}
						}
					}
					else  {

						audioPlayer.remove();
						e.target= '';
						e.target.id = '';
						if(document.getElementById('seekbar')){
							document.getElementById('seekbar').remove();
						}	
						if(document.querySelector('#playing')){
							document.querySelector('#playing').removeAttribute('id');
						}	else 	{
								document.querySelector('#paused').removeAttribute('id');
						}

					}
		}, false);
}, false);


function updateTime(){

		var player = document.getElementById('player');
		try{

				seekbar.value = parseFloat((player.currentTime/player.duration).toFixed(4));
		} catch(error){
				if(error.name ==='TypeError')
					console.log("next song");
			}
};
		

Element.prototype.remove = function(){
	this.parentNode.removeChild(this);
}

function seekbarAdder(){

		seekbar = document.createElement('progress');
		seekbar.id = 'seekbar';

		seekbar.value ="0";
		seekbar.max = "1";
		seekbar.style.width = "100%";
};

var liElements = document.getElementsByTagName('li');
var search = document.querySelector('#search');
search.onkeyup = function() {
	var update = document.querySelector("#update");

	var searchField = search.value;
	var myExp = new RegExp(searchField, "i");
	for (var i = 0; i < liElements.length; i++) {
		if (liElements[i].innerHTML.search(myExp) < 0)
		 	{	
		 		liElements[i].style.display='none';
		 	}
		if(liElements[i].innerHTML.search(myExp) >= 0 && 	liElements[i].style.display=='none'){
		 		liElements[i].style.display='block';
			}
		}
};
