<?php

// prendo il json
$json_string = file_get_contents('dischi.json');
// var_dump($json_string);

// converto la stringa in un alemento PHP
$list = json_decode($json_string, true);
// var_dump($list);


// verifico che in POST esista la variabile newDiscTitle
// se esiste aggiungo un disco alla lista
// aggiorno dischi.json

if (isset($_POST['newDiscTitle'])) {
    $new_disc = [
        'title' => $_POST['newDiscTitle'],
        'author' => $_POST['newDiscAuthor'],
        'year' => $_POST['newDiscYear'],
        'poster' => $_POST['newDiscPoster']

    ];

    $list[] = $new_disc;

    // salvo la nuova lista trasformata in stringa
    file_put_contents('dischi.json', json_encode($list));
}

// converto il file PHP in json
header('Content-Type: application/json');

// stampo la lista come stringa
echo json_encode($list);
// var_dump($list);
