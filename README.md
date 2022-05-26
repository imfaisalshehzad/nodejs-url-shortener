# URL Shortener

- Backend: [ExpressJS](https://expressjs.com/)
- Database: [MongoDB](https://www.mongodb.com/)
- Frontend : [NextJS](https://nextjs.org/)

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

To reach inside the `frontend` folder from terminal to start and install project dependencies run
the below commands on your terminal.

```
  cd frontend
  npm install
  npm run dev
```
