# XOMMERCE

XOMMERCE is a full-stack e-commerce web application featuring a React + Vite frontend and an Express.js backend. The project demonstrates a modern shopping experience with product browsing, cart, wishlist, and category features.

## Project Structure

```
XOMMERCE Folder/
├── backend/           # Express.js backend API
│   ├── server.js      # Main server file
│   ├── Men.js         # Men's product data
│   ├── shop.js        # Shop product data
│   ├── public/        # Static assets for backend
│   └── ...            # Other backend files and folders
└── frontend/          # React + Vite frontend
    ├── src/           # Source code (components, features, layouts, etc.)
    ├── public/        # Static assets (styles, fonts, images, video)
    ├── index.html     # Main HTML file
    └── ...            # Other frontend files and configs
```

## Features

- Product listing and browsing
- Category and grid sections
- Shopping cart with add/remove functionality
- Wishlist management
- Responsive navigation menu
- Redux Toolkit for state management
- RESTful API endpoints for products

## Technology Stack

**Frontend:**

- React.js (with Vite)
- React Router DOM
- Redux Toolkit & React Redux
- CSS Modules

**Backend:**

- Node.js
- Express.js
- CORS & Body-Parser
- dotenv for environment configuration

## Setup Instructions

### Backend

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The backend will run on the port specified in `.env` (default: 3000).

### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The frontend will run on the default Vite port (usually 5173).

## Usage

- Open the frontend in your browser (e.g., http://localhost:5173).
- Browse products, add items to your cart or wishlist.
- The backend API serves product data at `/api/shop/product` and `/api/men/product`.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is open-source and available under standard open-source licenses.
