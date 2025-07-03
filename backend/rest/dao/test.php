<?php

require_once 'ExamDao.php';

$examDao = new ExamDao();
$customers = $examDao->get_customers();

print_r($customers);
