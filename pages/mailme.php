<?php
$email = $_POST["email"];
$msg = $_POST["message"];

$to = "chat.chillfeast@gmail.com";
$sub = "New Enquiry";
$body = "email:".$email."\nemail:".$msg;

mail($to, $sub, $body);
?>