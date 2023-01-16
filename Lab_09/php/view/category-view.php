<?php
    foreach ($categories as $category) {
?>
    <a href="/<?= $category["url"]?>"><?= $category["cat"]?></a>
<?php
    }
?>