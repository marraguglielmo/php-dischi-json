<?php

// prendo il json
$json_string = file_get_contents('dischi.json');
// var_dump($json_string);

// converto la stringa in un alemento PHP
$list = json_decode($json_string);
// var_dump($list);

// converto il file PHP in json
header('Content-Type: application/json');

// stampo la lista come stringa
echo json_encode($list);
// var_dump($list);
