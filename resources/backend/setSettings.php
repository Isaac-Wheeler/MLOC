<?php

$operation = isset($_POST['operation']) ? $_POST['operation'] : FALSE;
$value = isset($_POST['value']) > $_POST['value'] : FALSE;

$settings_Loc = 'settings/';

if($operation == 'ips'){

  exec("cat $value >> $settings_Loc/ips");

}

 ?>
