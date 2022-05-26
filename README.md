# URL Shortener

- Backend: [ExpressJS](https://expressjs.com/)
- Database: [MongoDB](https://www.mongodb.com/)
- Frontend : [NextJS](https://nextjs.org/)

### Database Environment Setup

You can follow [these](https://www.mongodb.com/basics/create-database) steps to create the database and user account
password.

1. Rename `.env.sample` to `.env` inside the backend and frontend folders.
2. Replace below values with yours inside the `backend` project directory.
    - `<USER_NAME>`
    - `<PASSWORD>` 
      - You have to use password from  *Security > Database Access*
        ![Image](https://i.ibb.co/YXDVXmc/Screen-Shot-2022-05-26-at-10-32-00-AM.png)
    - `<MONGO_CLUSTER>`
    - `<DB_NAME>`

### Backend Environment Setup

To reach inside the `backend` folder from terminal and to install the dependencies and to start the backend server run
the below commands. By default, backend app runs at port `3001` on your local machine. you can change
inside `backend/bin/www` file.

```
  cd backend
  npm install
  npm start
```

#### Backend API Endpoints

| Method | API  | Content-Type | JSON Body |
| -------- | ---------------    | ------------       | ----- |
| **POST** | `{BACKEND_URL}/api/url/encode` | `application/json` | `{ "longUrl": "https://google.com" }` |
| **POST** | `{BACKEND_URL}/api/url/encode` | `application/json` | `{ "code": "ABC123" }` |
| **GET**  | `{BACKEND_URL}/api/url/statistic/:code` | `application/json` | `-` |

___

### Frontend Environment Setup

To reach inside the `frontend` folder from terminal to start and install project dependencies run the below commands on
your terminal.

```
  cd frontend
  npm install
  npm run dev
```

Paste `http://localhost:3000/` in your browser to access the frontend.
