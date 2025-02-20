<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Include PHPMailer

// Get form data from the POST request
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.example.com'; // Replace with your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'tonytech858@gmail.com'; // Replace with your email
    $mail->Password = 'your_email_password'; // Replace with your email password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Recipients
    $mail->setFrom('tonytech858@gmail.com', 'TonyTech');
    $mail->addAddress($email, $name);

    // Content
    $mail->isHTML(false);
    $mail->Subject = 'New Appointment Booking - TonyTech';
    $mail->Body = "You have received a new appointment booking.\n\nDetails:\nName: $name\nEmail: $email\nPhone: $phone\nDate: $date\nTime: $time";

    $mail->send();
    echo "Appointment booked successfully! TonyTech will contact you shortly.";
} catch (Exception $e) {
    echo "Error: Unable to send the appointment details. Please try again later.";
}
?>