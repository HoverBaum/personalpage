<?php

	$rss = file_get_contents('http://hoverbaum.net/atom.xml');
	$xml = simplexml_load_string($rss);

 	die(json_encode($xml));

?>
