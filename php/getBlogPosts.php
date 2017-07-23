<?php

	$fileContents = file_get_contents('http://hoverbaum.net/atom.xml');
	$fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);
	$fileContents = trim(str_replace('"', "'", $fileContents));
	$xml = simplexml_load_string($fileContents);
	$json = json_encode($xml);

	file_put_contents('blog.json', $json);

    header('Content-Type: application/json');
	die($json);

?>
