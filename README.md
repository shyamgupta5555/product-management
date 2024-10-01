Product Management System
This project is a Product Management System built using Node.js and Express. 
It allows you to CREATE, UPDATE, GET, DELETE  products. 
It also includes an image upload feature and products can be filtered by name and quantity.

Features
Add, update, and delete products.
Upload product images (only JPG and PNG files).
Filter products by name and quantity.
Return a default image if no image is uploaded.
Active and inactive status for products.
Tech Stack

Backend: Node.js, Express.js
Database: Sequelize(ORM), MySQL
File Upload: Multer (for handling image uploads)
API Documentation: Swagger library 
Using laibary jest for TEST CASE  

Installation
Clone the repository:

bash
Copy code
git clone (https://github.com/shyamgupta5555/product-management.git)
cd product-management

Install dependencies: Run the following command to install the required packages:

npm install
Set up the database:

Create a MySQL database for the project.
Update the config/config.json file with your database credentials.
Run database migrations: Use Sequelize to create the necessary database tables


The API will be running at http://localhost:3000/api/.
Swagger API documentation is available at http://localhost:3000/swagger.
API Endpoints

Here are some of the key API endpoints:

create a Product: POST /product

Get a Product by ID: GET /product/:id

Update a Product: PUT /product/:id

Delete a Product: DELETE /product/:id


List Products with Filters: GET /product?name=xyz&minQuantity=5&maxQuantity=100
File Uploads

Products can have images uploaded. Only JPEG and PNG formats are allowed.

If no image is uploaded, the system will return a default image for the product.
Added Dump database import

start Project npm start  
npm test   // for ru test case 


Conclusion
That is it! You have now set up and can use your Product Management System. 
If you encounter any issues, feel free to check the code or the logs for errors.
Happy coding!