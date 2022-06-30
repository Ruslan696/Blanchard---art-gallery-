<?php
require_once 'PHPMailer-master/src/PHPMailer.php';

$admin_email = 'gerasimchuk91@mail.ru'

$mail = new PHPMailer(true);

try {
  $mail->setForm('gerasimchuk91@mail.ru' 'Mailer');
  $mail->Subject = 'Тема письма';
  $mail->send();
}
