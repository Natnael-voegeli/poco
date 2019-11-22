<?php
// Number
$bob_geldof = 3;

// String
$bob = "Bob is great !";

// Array
$bob = [4,5,6];

// Booleans
$bob = true;
$bob = false;

// Functions
function bob($birthYear) {

$age = 2019 - $birthYear;

return "Bob is" . $age;

}
?>


<h1><?php echo bob(1995); ?></h1>
