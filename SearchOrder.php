<?php
 header("Access-Control-Allow-Origin", "*");
 header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");


header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//$urlServer = 'http://localhost/ReactApps/food-web';
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "test";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$urlServer = 'http://localhost/ReactApps/food-web';
$method = $_SERVER['REQUEST_METHOD'];
    
 $orderDate=$_GET['date1'];
 $orderDate1=$_GET['date2'];
 //$toDate=$_GET['ToDate'];

   $trp = mysqli_query($conn, "select product.productId,product.name,price,orderId,orderDate,orderfood.orderAmount,
   orderfood.quantity
   
   ,orderfood.productId
   from product,orderfood
   where product.productId = orderfood.productId
    AND orderDate between '${orderDate}' AND '${orderDate1}' 
    order by orderfood.orderId
   
    ");
   
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
   print json_encode($rows); //convert php data to json data
  // echo json_encode($response);
?>
