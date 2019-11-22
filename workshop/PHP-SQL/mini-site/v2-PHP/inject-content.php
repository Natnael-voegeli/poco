<?php
$title = "This is my dynamic title !";
$content = 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
</head>
<body>
    <h1><?php echo $title; ?></h1>
    <p>this is my content</p>
    <footer>
        &copy;<?php echo date("Y"); ?> by Nobody
    </footer>
</body>
</html>