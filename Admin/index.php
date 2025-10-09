<?php  include("auth.php") ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Blog Site - Dashboard</title>
    <!-- links -->
    <?php include("./includes/links.php") ?>
</head>

<body class="bg-light">

    <div class="main-container d-flex">

        <!-- sidebar -->
        <?php include("./includes/sidebar.php") ?>

        <div class="content" id="content">
            <!-- navbar -->
            <?php include("./includes/navbar.php") ?>

            <div class="p-3">
                <!-- navbar -->
                <?php include("./includes/tabs.php") ?>
            </div>
        </div>
    </div>


</body>

</html>