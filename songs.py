
#use this to print songs name

import os
mypath = 'audio/'

target = open('index.html','w')
#		<li data-src="audio/Phoebex.mp3">Phoebex</li>
target.write('''<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta charset="utf-8" />
	<title>Juke Box</title>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	
</head>
<body>
	<div id="searcharea">
		<label for="search" id ="search-label">Live Search</label>
		<input type="search" name="search" id="search" placeholder="search a song" />
	</div>
	<p>Auto-Play
	 <label class="switch">
      <input type="checkbox" id="checkbox" class="switch-input">
      <span class="switch-label" data-on="On" data-off="Off"></span>
      <span class="switch-handle"></span>
    </label></p>
	<div id="update">
	<ul class ="player">
	''')
for i in os.listdir(mypath):
	if '.mp3' in i:
		x='<li data-src="audio/'+(i)+'">'+(i)+'</li>'
		target.write(x)
		target.write('\n')
target.write('''
	</ul>
	</div>
	<script src="js/script.js"></script>
</body>
</html>
''')

target.close()