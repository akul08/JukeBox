
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
	<ul class ="player">
	''')
for i in os.listdir(mypath):
	if '.mp3' in i:
		x='<li data-src="audio/'+(i)+'">'+(i)+'</li>'
		target.write(x)
		target.write('\n')
target.write('''
	</ul>
	<script src="js/script.js"></script>
</body>
</html>
''')

target.close()