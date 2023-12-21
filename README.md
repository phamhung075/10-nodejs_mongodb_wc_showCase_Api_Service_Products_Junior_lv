This is a personal project series based on the lessons by @anonystick ([https://github.com/anonystick](https://github.com/anonystick)).
## 1. [Authentication and API Key Management (HS256)](https://github.com/phamhung075/2-nodejs_mongodb_wc_showCase_Dynamic_for_ApiKey_and_Permissions_HS256/tree/master)

## 2. [ErrorHandler ApiResponse](https://github.com/phamhung075/3-nodejs_mongodb_wc_showCase_ErrorHandler_API)

## 3. [Success Handler ApiResponse](https://github.com/phamhung075/4-nodejs_mongodb_wc_showCase_ApiResponseUseClass/tree/master?tab=readme-ov-file)

## 4. [SignUp and Login Public Access](https://github.com/phamhung075/5-nodejs_mongodb_wc_showCase_SignUpLogin)

## 5. [Logout Authentication](https://github.com/phamhung075/6-nodejs_mongodb_wc_showCase_LogoutAuthentication)
## 6. [Refresh Token and Token Verification](https://github.com/phamhung075/7-nodejs_mongodb_wc_showCase_RefreshToken_verifyToken)
## 7. [Schema for Products in E-commerce](https://github.com/phamhung075/8-nodejs_mongodb_wc_showCase_Schema_Products_Ecommerce)
## 8. API for Products Using Factory Pattern

### Introduction

`10-nodejs_mongodb_wc_showCase_Api_Service_use_Factory_Pattern_Products_Junior_lv` is a Node.js application that demonstrates the use of the simple factory pattern to create a flexible and scalable API for managing products in a MongoDB database. This approach is ideal for e-commerce platforms where product management requires a dynamic and adaptable architecture.

Version Upgrade Highlights

Enhanced Product Model (./models/product.model.js): The product schema has been upgraded with additional attributes and validation rules to better represent complex product data.

Advanced Product Service (./services/product.service.js): Includes refined business logic and data handling methods, offering a more comprehensive approach to product management.

Improved Authentication Mechanism (./services/authenticationV2.js): Introduces a more robust and secure authentication system, ensuring better data protection and user management.

Revamped Product Controller (./controllers/product.controller.js): Features more efficient request handling and response generation for product-related operations.

Version Simple: 
https://github.com/phamhung075/9-nodejs_mongodb_wc_showCase_API_Product_use_Factory_Pattern

Version upgrade level Senior: 
https://github.com/phamhung075/11-nodejs_mongodb_wc_showCase_Api_Service_use_Factory_Pattern_Products_Senior_lv

### Installation

- Clone the repository:

    `git clone https://github.com/phamhung075/10-nodejs_mongodb_wc_showCase_Api_Service_use_Factory_Pattern_Products_Junior_lv.git`
    
- Change to the directory:

    `cd 10-nodejs_mongodb_wc_showCase_Api_Service_use_Factory_Pattern_Products_Junior_lv`
    
- Install dependencies:
 
    `npm install`
    

### Features

- **Factory Pattern Implementation**: Utilizes the factory pattern in creating services for product management, enhancing code modularity and reusability.
- **Product Service** (`./services/product.service.js`): Central service for product operations, created using the factory pattern.
- **Product Controller** (`./controllers/product.controller.js`): Manages product-related API routes and request handling.
- **Product Routes** (`./routes/product.route.js`): Defines API endpoints for product management activities like creating, reading, updating, and deleting products.

### Usage

- The application showcases how to structure and organize a product management API using the factory pattern.
- Demonstrates CRUD operations for products in a MongoDB database, suitable for e-commerce platforms.

### MongoDB Connection

- Connect to MongoDB using: `mongodb://localhost:27017/ecommerce`

### Additional Notes

- This project can be used as a reference or starting point for building scalable and maintainable e-commerce applications.
- The factory pattern implementation provides a template for structuring services in Node.js applications.

### Postman Examples

- **Signup**, **Login**, **Logout** examples as in the previous project.
- **Token Refresh** examples as in the previous project.
  
For more detailed examples, refer to see [README.png](./help10.png).
