<?
//Retrives data from a post and sends an email.

//Note - protect from spammer use by checking which page calls it.

$name = $_POST['name'];
$email = $_POST['email'];
$dob = $_POST['dob'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$body = "A message from the website...\nName: $name\nEmail: $email\nD.O.B: $dob\nPhone No: $phone\nMessage: $message\n[ENDS]";

if (mail("danny.smith@brightonaircadets.com", "New message from $name [thru web form]", $body, "From: $email")) {
  header("Location: thanks.html");
 } else {
  echo("<meta http-equiv=\"refresh\" content=\"5; url=contact.html\" /> <h3>Oops - something went wrong</h3><p>Could you try sending the message again? If it still doesn't work, send us an email instead!</p>");
 }
?>