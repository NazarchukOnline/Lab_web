<?php


require "./php/model/connect.php";
require "./php/model/category.php";
require "./php/model/post.php";
require "./php/model/url.php";


$db = db_connnect('localhost', 'root', '', 'Lab9_Web');
$url = check_url();
$category_url = $url[0] ?? false;

Post::$db = $db;

$categories = category::getAll($db);
$posts = Post::getSortCategory($category_url, $db);

?>