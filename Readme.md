# Book Store API
This is a basic Node.js application with a few api endpoints. It uses express for routing and MongoDB as the database. 

## Features
- **Book Management:** Create, update, retrieve and delete books.

## Folder Structure
├── app.js <br/>
├── index.js <br/>
├── controllers/ <br/>
├── models/ <br/>
├── routes/ <br/>
├── package.json <br/>
└── README.md <br/>

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- Node.js
- npm
- MongoDB (local installation or cloud database - atlas)

## Setup Instructions:

### 1. Clone the repo
First, clone the repo to your local machine using git:
```bash
git clone https://github.com/navneetkumar22/book_store.git
cd book_store
cd backend
```

### 2. Install dependencies:
Install the required dependencies using npm:
```bash
npm install
```

### 3. Environment variables:
Create .env file in the root of the application and following variables:
```js
MONGO_URI='yourDatabaseURL'
PORT='port'
```

### 4. Run the application
Start the server using following command:
```bash
npm start
```

### 5. Test the Endpoints:
You can test the available API endpoints using tool like Postman.

- **Create a Book**
    - POST /books
    - Requires title, author, genre and publication_year in the request body.

- **Get All Books**
    - GET /books
    - Retrives all books from the database.

- **Update a Book**
    - PUT /books/:id
    - Update a book with its id.

- **Delete a Book**
    - Delete /books/:id
    - Delete a book with its id.