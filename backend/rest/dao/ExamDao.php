<?php

class ExamDao {

    private $conn;

    /**
     * constructor of dao class
     */
    public function __construct(){
        try {
          /** TODO
           * List parameters such as servername, username, password, schema. Make sure to use appropriate port
           */

          /** TODO
           * Create new connection
           */

           $this->conn = new PDO("mysql:host=localhost;dbname=webtest", "root", "vildan2314");


          echo "Connected successfully";
        } catch(PDOException $e) {
          echo "Connection failed: " . $e->getMessage();
        }
    }

    /** TODO
     * Implement DAO method used to get customer information
     */
    public function get_customers(){
        $query = "SELECT * FROM customers";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);

    }

    /** TODO
     * Implement DAO method used to get customer meals
     */
    public function get_customer_meals($customer_id) {
        $query = "SELECT meals.*, foods.* FROM meals JOIN foods ON meals.food_id = foods.id  WHERE meals.customer_id = :customer_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':customer_id', $customer_id);
        $stmt->execute();
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);

    }

    /** TODO
     * Implement DAO method used to save customer data
     */
    public function add_customer($data){

    }

    /** TODO
     * Implement DAO method used to get foods report
     */
    public function get_foods_report(){

    }
}
?>
