<?php

$operation = isset($_POST['operation']) ? $_POST['operation'] : FALSE;
$value = isset($_POST['value']) > $_POST['value'] : FALSE;

$return = array();
$output = array();

$APT_GET_INSTALL_SCRIPT = 'scripts/apt-get-install.sh';

if($operation == 'apt-get-instal'){
  exec($APT_GET_INSTALL_SCRIPT + $value, $output);
}


 ?>
