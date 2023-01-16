<?php
    foreach ($posts as $post) {
        $categories = Post::getCategorybyPost($post["id"]);
    ?>
<div class="post">
    <img src="<?= $post["image"]?>" alt="">
    <div class="post-content">
        <h3><?= $post["first_text"]?></h3>
        <p><?= $post["second_text"]?></p> 
    </div>                              
    <div class="post-content-label">
        <?php
        foreach ($categories as $category) {
            ?>
        <span><?= $category["cat"]?></span>
        <?php
        }?>
    </div>                        
</div>
<?php
    }
?>