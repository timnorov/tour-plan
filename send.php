<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "New message from Best Tour Plan";
$body = "
<h2>New message</h2>
<b>Name:</b> $name<br>
<b>Phone:</b> $phone<br>
<b>Message:</b><br>$message";

$titleSubs = "New subscriber to the Newsletter";
$bodySubs = "
<h2>New subscriber</h2>
<b>Email:</b> $email";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'timurnorov.gloacademy@gmail.com'; // Логин на почте
    $mail->Password   = 'Timur123456'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('timurnorov.gloacademy@gmail.com', 'Тимур Норов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('timur.norov@gmail.com');  


if ($email == "") {
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    header('Location: thankyou.html');
} else {
    $mail->isHTML(true);
    $mail->Subject = $titleSubs;
    $mail->Body = $bodySubs;

    header('Location: subscribe-result.html');
}
// Отправка сообщения
    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
