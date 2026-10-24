# CraveIt 🍔 | Full-Stack Food Ordering Application

CraveIt is a full-stack food ordering web application built using the **MERN stack**. It provides an interactive interface for browsing food items, managing a shopping cart, entering delivery details, and placing orders.

The project demonstrates full-stack web development, REST API integration, user authentication, database management, and payment integration.

## 📌 Project Overview

CraveIt aims to make the online food ordering process convenient by allowing users to explore available food items, add items to their cart, review their order total, and proceed with checkout.

The application combines a React-based frontend with a Node.js and Express.js backend and a MongoDB database.

## ✨ Features

### User Features
- **User Authentication:** Sign-in and registration functionality.
- **Browse Food Items:** Explore available food items through the application interface.
- **Shopping Cart:** Add items to the cart and manage selected items.
- **Order Total Calculation:** View the cost of selected items.
- **Delivery Details:** Enter a delivery address during checkout.
- **Payment Options:** Cash on Delivery (COD) and Stripe payment integration.
- **Protected Routes:** Restrict access to protected pages using authentication mechanisms.

### Admin Features
- Dedicated admin interface.
- Separate frontend and admin application structure.
- Support for integrating administrative food and order management functionality.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript | Application logic and interactivity |
| HTML5 | Page structure |
| CSS3 | Styling and responsive layouts |
| Node.js | Server-side JavaScript runtime |
| Express.js | Backend routing and API development |
| MongoDB | Database for application data |
| Mongoose | MongoDB object modeling |
| REST APIs | Communication between frontend and backend |
| Axios / Fetch | Making HTTP requests |
| JWT | Authentication and protected access |
| Cookies | Supporting authentication flows |
| Stripe | Online payment integration |
| Git & GitHub | Version control and source code management |

## 🏗️ Application Architecture

CraveIt follows a client-server architecture.

**Frontend:** React.js provides the user interface and sends HTTP requests to the backend.

**Backend:** Node.js and Express.js handle API requests, application logic, authentication, and communication with the database.

**Database:** MongoDB stores application data using Mongoose models.

**Payment Integration:** Stripe supports online payment integration, alongside the Cash on Delivery option.

### Request Flow

```text
User
  |
  v
React.js Frontend
  |
  v
REST API Requests
  |
  v
Node.js + Express.js
  |
  v
MongoDB Database
```

## 📂 Project Structure

The repository separates the frontend and admin application code.

```text
CraveIt/
├── admin/
├── frontend/
└── README.md
```

The exact internal structure may vary depending on the current version of the project.

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js and npm
- MongoDB or access to a MongoDB Atlas database
- Git
- A code editor such as Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/vinitaparab/CraveIt.git
```

### 2. Navigate to the Project

```bash
cd CraveIt
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

Start the frontend using the appropriate script defined in its `package.json`, for example:

```bash
npm run dev
```

### 4. Configure the Backend

Navigate to the backend directory within the project, locate its `package.json`, and install its dependencies using:

```bash
npm install
```

Configure the environment variables required by your backend, such as the MongoDB connection string, authentication secret, server port, and Stripe configuration.

Use the variable names expected by your source code. Do not commit real passwords, secret keys, or API credentials to GitHub.

Start the backend using the appropriate script defined in its `package.json`.

**Note:** The commands and directory paths may need adjustment to match the current repository structure and available npm scripts.

## 🔐 Security Considerations

The application incorporates authentication-related functionality and protected routes. For a production deployment, ensure that:

- Passwords are hashed securely.
- Protected backend endpoints validate authentication and authorization.
- Payment operations are verified on the server.
- Sensitive credentials are stored in environment variables.
- Input validation and appropriate error handling are implemented.

## 💡 Challenges and Learning Outcomes

This project provides practical experience with:

- Building a full-stack application using the MERN stack.
- Connecting a React frontend to backend REST APIs.
- Managing application data with MongoDB and Mongoose.
- Implementing authentication and protected routes.
- Managing cart state and calculating order totals.
- Integrating payment options into a checkout workflow.
- Organizing code into separate frontend and admin applications.
- Using Git and GitHub for source control.

## 🚀 Future Enhancements

Potential enhancements include:

- Advanced food search, filtering, and sorting.
- Product categories and detailed food information.
- Order history and order status tracking.
- Improved admin inventory and order management.
- Coupon and discount functionality.
- Enhanced form validation and user feedback.
- Deployment with production-ready configuration.

## 👩‍💻 Author

**Vinita Parab**

BSc Information Technology Graduate | Aspiring Full-Stack Developer

- GitHub: [@vinitaparab](https://github.com/vinitaparab)
- Project Repository: [CraveIt — GitHub](https://github.com/vinitaparab/CraveIt)

---

*CraveIt is a portfolio project developed to demonstrate full-stack web development skills and practical application of the MERN stack.*
