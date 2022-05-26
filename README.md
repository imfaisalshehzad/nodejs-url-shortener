# Application

## Backend Environment Setup

To reach inside the `backend` folder from terminal and to install the dependencies and to start the backend server run
the below commands.

```
  cd backend
  npm install
  npm start
```

By default, backend app runs at port `3001` on your local machine. you can change inside `backend/bin/www` file.

### Backend API Endpoints

| Method | API  | Content-Type | JSON Body |
| -------- | ---------------    | ------------       | ----- |
| **POST** | `{BACKEND_SERVER_URL}/api/url/encode` | `application/json` | `{ "longUrl": "https://google.com" }` |
| **POST** | `{BACKEND_SERVER_URL}/api/url/encode` | `application/json` | `{ "code": "ABC123" }` |
| **GET**  | `{BACKEND_SERVER_URL}/api/url/statistic/:code` | `application/json` | `-` |



## Frontend Environment Setup

To reach inside the `frontend` folder from terminal and to install the dependencies and to start the backend server run
the below commands.

```
  cd frontend
  npm install
  npm run dev
```
