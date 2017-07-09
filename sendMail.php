<?php


if(!isset($_POST["name"]) || !isset($_POST["email"]) || !isset($_POST["message"])) {
	die("0|Please fill in all fields.");
}

$mailer = new MailSender();

$to = "mail@hendrik-wallbaum.de";
if($mailer->sendMail($to, $_POST["email"], $_POST["name"], "Personal Page Contact Form", $_POST["message"])) {
	die("1|Message send successful");
} else {
	die("0|Failed to send your message");
}


class MailSender {


	function __construct() {

	}

        private function mail_utf8($to, $subject, $message, $header) {
                $header_ = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/plain; charset=UTF-8' . "\r\n";
                return mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $header_ . $header);
        }

        private function mail_html($to, $subject, $message, $header) {
                $header_ = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=UTF-8' . "\r\n";
                return mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $header_ . $header);
        }

        /*
                Sends a Mail.
        */
	public function sendMail($to, $from, $nameFrom, $subject, $msg) {
		$headers = 'From: ' . $nameFrom . '<' . $from . ">\r\n" .
        	       'Reply-To: ' . $from . "\r\n" .
        	       'X-Mailer: PHP/' . phpversion();
                if($this->mail_utf8($to, $subject, $msg, $headers)) {
        	       return true;
                } else {
        	       return false;
                }
	}

        /*
                Simple Standard Mail from is set in this class.
        */
        public function sendStdMail($to, $subject, $msg) {
                $headers = 'From: ' . MailSender::FROM_NAME . '<' . MailSender::FROM . ">\r\n" .
                        'Reply-To: ' . MailSender::FROM . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();
                if($this->mail_utf8($to, $subject, $msg, $headers)) {
                        return true;
                } else {
                        return flase;
                }
        }

        /*
                Send a notification to the one running the site.
        */
        public function sendNotification($subject, $msg) {
                $this->sendStdHTMLMail(MailSender::FROM, $subject, $msg);
        }

        /*
                Mail from Adress set in this class as html type.
        */
        public function sendStdHTMLMail($to, $subject, $msg) {
                $headers = 'From: ' . MailSender::FROM_NAME . '<' . MailSender::FROM . ">\r\n" .
                        'Reply-To: ' . MailSender::FROM . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();
                if($this->mail_html($to, $subject, $msg, $headers)) {
                        return true;
                } else {
                        return flase;
                }
        }

        public function sendHTMLMail($to, $from, $fromName, $subject, $msg) {
                $headers = 'From: ' . $fromName . '<' . $from . ">\r\n" .
                        'Reply-To: ' . $from . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();
                if($this->mail_html($to, $subject, $msg, $headers)) {
                        return true;
                } else {
                        return flase;
                }
        }

}

?>
