var jukebox = document.querySelector('ul.player');
var seekbar;
jukebox.addEventListener('click', function(e){

	var songName = e.target.getAttribute('data-src');
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
				//document.getElementById('seekbar').remove();
				seekbar.remove();
				e.target.id = 'playing';
				
				seekbarAdder();
				e.target.appendChild(seekbar);

			}
	}
		else {
		//<progress id="seekbar" value="0" max="1" style="width:400px;"></progress>
		var audioPlayer = document.createElement('audio');
		audioPlayer.id = 'player';
		//audioPlayer.ontimeupdate = updateProgress();
		e.target.id = 'playing';
		audioPlayer.src = songName;
		audioPlayer.setAttribute('ontimeupdate' , 'updateTime()');
		document.body.appendChild(audioPlayer);
		audioPlayer.play();
		
		seekbarAdder();
		e.target.appendChild(seekbar);
		

		audioPlayer.addEventListener('ended', function(){
				audioPlayer.remove();
				document.getElementById('seekbar').remove();

				e.target = '';
		}, false);
	}




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
