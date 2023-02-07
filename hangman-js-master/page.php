<?php
    $header = apache_request_headers();
    if(!empty($_POST['pseudo'])){
        $pseudo_par_defaut = "01010100 01101111 01101011 01111001 01101111";
        $pseudo_saisi = htmlspecialchars($_POST['pseudo']);
        if($pseudo_saisi != $pseudo_par_defaut){
            echo '<p class="color"> "404 not found" </p>';
        }
        else{
            if(isset($header['admin'])){
            if($header['admin'] == "true"){
            header('Admin: true');
            } else{
            header('Admin: false');
            echo '<p class="color"> "bien joue vous passer a la suite" </p>';
            }
            } else{
            header('Admin: false');
            echo '<p class="color"> "bien joue vous passer a la suite" </p>';
            }
        }
    }
?>
<style type="text/css">
    <?php include('/style.css'); ?>
</style>

<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<link rel="stylesheet" href="style.css">
<title>
Formulaire
</title>
</head>
<body>
       <div class="container2" style="position:absolute;z-index:2">
       <h1 style="z-index:2">Bonjour,  <?php echo $_POST['pseudo'] ?></h1>
    </div>
</body>
</html>
