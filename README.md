## Nxt-Trendz

This is an e-commerce web application built using React and integrated with a backend API for product management and user authentication. The app features product browsing, filtering, shopping cart management, and secure route navigation, all designed to provide a seamless shopping experience.

## Project Overview

This e-commerce web application provides users with the ability to browse and filter products, view product details, manage items in a shopping cart, and complete purchases. It is built using React for the frontend and communicates with a backend API to handle product data, user authentication, and cart functionality.

The application focuses on usability, performance, and secure authentication using JWT (JSON Web Tokens). Users must authenticate before accessing certain routes, and the app ensures secure interactions by protecting sensitive routes.

## Tech Stack

- **Frontend**: React.js
- **Routing**: React Router
- **Styling**: CSS, Bootstrap
- **State Management**: React state management, Context API
- **API Integration**: RESTful APIs
- **Authentication**: JWT-based secure authentication

## Features

### Core Features

1. **User Authentication & Route Protection**
   - Redirects unauthenticated users to the Login route when attempting to access protected pages (Home, Products, Cart).
   - Authenticated users can freely access Home, Products, and Cart pages.

2. **Product Listing & Filtering**
   - Filters products by title, category, and rating.
   - Supports multiple filters applied simultaneously.
   - Displays a loader while fetching data.
   - "No Products" view displayed if no results match the filters.

3. **Product Details**
   - Clicking on a product takes the user to the Product Details page.
   - Allows users to adjust the quantity of the product they wish to buy.
   - Displays similar products and product details.

4. **Shopping Cart**
   - Users can add products to their cart, adjust quantities, and remove items.
   - Cart summary shows total price and item count.
   - Supports quantity updates (increase/decrease) for each product.
   - Cart items persist and are updated as the user interacts with the cart.

5. **Responsive Design**
   - Fully responsive design, optimized for both desktop and mobile devices.

6. **Error Handling & Loader Indicators**
   - Displays failure views when API requests fail.
   - Shows loaders during data fetching for a smooth user experience.

### Additional Features

1. **Product Quantity Updates**
   - If an authenticated user tries to add the same product multiple times, the app updates the quantity in the cart rather than adding a new entry.

2. **Cart Summary**
   - Displays the total price and number of items in the cart at all times.

3. **Clear Cart**
   - "Remove All" button allows users to clear all items in the cart, showing an empty cart view.

4. **Error Recovery**
   - If a product detail or product list request fails, users can continue shopping or return to previous views seamlessly.

## API Endpoints

### 1. **Products API**
   - **URL:** `https://apis.ccbp.in/products`
   - **Method:** `GET`
   - **Description:** Fetches a list of products, with optional filters.
   - **Query Parameters:**
     - `category`: (Optional) Filters products by category.
     - `rating`: (Optional) Filters products by rating.
     - `title_search`: (Optional) Filters products by title.
   - **Example Request:**
     ```bash
     GET https://apis.ccbp.in/products?category=4&rating=4&title_search=machine
     ```

### 2. **Product Details API**
   - **URL:** `https://apis.ccbp.in/products/:id`
   - **Method:** `GET`
   - **Description:** Fetches detailed information for a specific product.
   - **Path Parameters:**
     - `id`: The unique ID of the product.
   - **Example Request:**
     ```bash
     GET https://apis.ccbp.in/products/16
     ```

### 3. **User Authentication API**
   - **URL:** `https://apis.ccbp.in/auth/login`
   - **Method:** `POST`
   - **Description:** Authenticates the user and returns a JWT token.
   - **Request Body:**
     ```json
     {
       "username": "your-username",
       "password": "your-password"
     }
     ```

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e-commerce-web-app.git
   ```
2. Install the dependencies:
   ```bash
   cd e-commerce-web-app
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```

## Usage
Once the application is running, you can:

- Browse products and filter them by category, rating, and title.
- View product details and adjust the quantity.
- Manage your cart by adding, removing, or updating products.
- Securely authenticate and navigate between routes.

## Contributing
Project is open for contributions. Please fork the repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
Thanks to [CCBP APIs](https://apis.ccbp.in/) for providing API endpoints.
