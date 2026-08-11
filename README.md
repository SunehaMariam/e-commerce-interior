## Furniro — Furniture E-Commerce Website

A responsive furniture e-commerce frontend built with React. Furniro provides a modern shopping experience with product listings, product details, cart functionality, product comparison, and checkout-related pages.

## Features

Responsive furniture e-commerce UI

Home, Shop, Products, Cart, Compare, Checkout, Contact, and Blog pages

Reusable React components

Product cards with:

Product image

Name

Description

Price

Old price

New/discount badges

Add to cart

Dynamic product detail navigation using React Router

Dynamic product information and images

Product quantity controls

Size and color selection

Shopping cart using React Context

Product comparison with selectable products

Rating and review display

Reusable Navbar, Footer, Buttons, Product Cards, and other UI components

Custom CSS styling without Tailwind CSS

## Technologies Used

React.js

JavaScript (ES6+)

React Router DOM

Context API

CSS3

Vite

React Icons / image assets

## Project Structure

src/
├── assets/
│   └── images/
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── ProductCard/
│   ├── ProductImages/
│   ├── ProductInfo/
│   ├── ProductCompare/
│   ├── ShopFilter/
│   ├── Button/
│   └── context/
│       └── CartContext.jsx
│
├── pages/
│   ├── Home/
│   ├── Shop/
│   ├── Product/
│   ├── Cart/
│   ├── Compare/
│   ├── Checkout/
│   ├── Contact/
│   └── Blog/
│
├── App.jsx
├── main.jsx
└── index.css


## Getting Started

1. Clone the repository

git clone YOUR_REPOSITORY_URL

2. Open the project

cd your-project-folder

3. Install dependencies

npm install

4. Start the development server

npm run dev

Vite will provide a local development URL, usually:

http://localhost:5173

## Build for Production

npm run build

To preview the production build:

npm run preview

## Routing

The application uses React Router for navigation.

Example routes:

/
 /shop
 /products
 /product/:id
 /cart
 /compare
 /checkout
 /contact
 /blog

The dynamic product route allows a user to click a product card and open the selected product's detail page.

Example:

/product/1
/product/2
/product/3

## Cart Functionality

Cart functionality is handled through React Context.

Products can be added with:

addToCart({
  id,
  image,
  name,
  price,
  quantity,
});

The cart supports:

Adding products

Product quantity

Product image

Product name

Product price

Cart navigation

## Product Details

When a product card is clicked, the selected product information is passed through React Router navigation.

Example:

navigate(`/product/${id}`, {
  state: {
    image,
    name,
    price,
    description,
  },
});

The product detail page then displays the selected product information.

## Product Compare

The compare section allows users to select products from dropdown menus and compare:

Product image

Product name

Product price

Rating

Number of reviews

The comparison UI updates dynamically when another product is selected.

 ## Styling

The project uses regular CSS files for component-specific styling.

Examples:

ProductCard.css
ProductImages.css
ProductInfo.css
ProductCompare.css

No Tailwind CSS is required.

## Responsive Design

The website is designed to work across:

Desktop

Laptop

Tablet

Mobile

CSS media queries can be used to adapt layouts for smaller screens.

## Assets

Product and UI images are stored inside:

src/assets/images/

Examples include:

Product images

Sofa images

Rating stars

Social media icons

Shop images

UI graphics
## Future Improvements

Possible improvements include:

Backend/API integration

Database-powered products

User authentication

Persistent cart storage

Wishlist functionality

Search and filtering

Real checkout/payment integration

Product reviews

Admin dashboard

Order tracking

 ## Author

Suneha Mariam

📄 License

This project is created for educational, portfolio, and internship purposes.
