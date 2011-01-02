<html>
<head>
<title>Ask Lul a question</title>
<style type="text/css">
	body {
		font-family:sans-serif;
		font-size:80%;
		text-align:center;
	}
	#q {
		padding-top:50px;
		text-align:center;
		margin:0 auto;
	}
	h1 {
		font-size:37px;
		color:#c44;
	}
	input {
		font-size:30px;
		margin-bottom:10px;
	}
	#askbutton {
		border-width:1px;
		padding:3px 20px;
	}
	#a {
		padding-top:30px;
		font-size:35px;
		color:#000;
		font-weight:bold;
	}
	select {font-size:37px;text-align:center;vertical-align:middle;width:250px;}
</style>
<script type="text/javascript" src="util.js"></script>
</head>
<body>
	<div id="q">
		<noscript><p>To use this app, you'll need to enable javascript.</p></noscript>
		<form action="#" method="post" onsubmit="x();return false;">
			<h1>Ask Lul a Question</h1>
			<p>Ask Lul a question and have him respond in realtime!</p>
			<input type="text" id="qu" /><br />
			<input type="submit" value="Schwanicate!" id="askbutton" />
		</form>
	</div>
	<div id="a"></div>
</body>
</html>