
<?php 
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");


header("Access-Control-Allow-Origin", "Origin");
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS,PATCH');
header('Access-Control-Allow-Origin: *');

header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$response = array();
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "test";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "connection made";
  // echo $_POST['name'];
}

$name=$_POST['name'];
$amount=$_POST['amount'];
$quantity=$_POST['quantity'];
$date1=$_POST['odate'];
$pid=$_POST['pid'];
$address=$_POST['address'];
$cell=$_POST['contactNo'];

 $trp = mysqli_query($conn, "insert into orderfood values(null,'${date1}',${amount},${pid},'${cell}','${address}',${quantity},'${name}')");
 

$rows = array();
while($r = mysqli_fetch_assoc(true)) {
   $rows[] = $r;
}
print json_encode($rows);

echo json_encode($response);

?>

?>
