<?php 
        $page = $_GET['page'];  //On récupere la page par l'URL
        include($page); //On l'inclut
    ?>

    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    
    <a href="?page=home">home</a>
    <a href="?page=contact">contact</a>
    <a href="?page=flag">flag</a>
   
</body>
</html>