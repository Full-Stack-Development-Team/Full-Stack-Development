 API Documentation

 1. Overview

The SyncBoard REST API provides endpoints for user authentication and task-board management.

The API follows a RESTful architecture and uses JSON for request and response data.

 Base URL

```text
http://localhost:5000/api
```

> Replace the port number with the actual backend port used by the project.

---

 2. Authentication

The API uses JWT-based authentication.

After successful login, the client receives a JWT token.

Protected endpoints require the following HTTP header:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

 3. Authentication Endpoints

 Register User

 POST `/auth/register`

Creates a new user account.

 Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Successful Response

```json
{
  "message": "User registered successfully"
}
```

 Possible Errors

```text
400 Bad Request
409 Conflict
500 Internal Server Error
```

---

 Login User

 POST `/auth/login`

Authenticates an existing user.

 Request

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

 Successful Response

```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "USER_ID",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

 Possible Errors

```text
400 Bad Request
401 Unauthorized
500 Internal Server Error
```

---

 4. Board Endpoints

Get All Boards

 GET `/boards`

Returns boards available to the authenticated user.

 Headers

```http
Authorization: Bearer <JWT_TOKEN>
```

 Response

```json
[
  {
    "_id": "BOARD_ID",
    "name": "Development Board",
    "owner": "USER_ID"
  }
]
```

---

 Create Board

 POST `/boards`

Creates a new board.

 Headers

```http
Authorization: Bearer <JWT_TOKEN>
```

 Request

```json
{
  "name": "Development Board"
}
```

 Response

```json
{
  "_id": "BOARD_ID",
  "name": "Development Board",
  "owner": "USER_ID"
}
```

---

 Get Board

 GET `/boards/:id`

Returns a specific board.

 Headers

```http
Authorization: Bearer <JWT_TOKEN>
```

 Response

```json
{
  "_id": "BOARD_ID",
  "name": "Development Board",
  "owner": "USER_ID"
}
```

---

 Update Board

 PUT `/boards/:id`

Updates an existing board.

 Request

```json
{
  "name": "Updated Development Board"
}
```

 Response

```json
{
  "_id": "BOARD_ID",
  "name": "Updated Development Board"
}
```

---

 Delete Board

 DELETE `/boards/:id`

Deletes a board.

 Response

```json
{
  "message": "Board deleted successfully"
}
```

---

 5. Task Endpoints

 Get Tasks

 GET `/tasks`

Returns tasks for the authenticated user/board.

 Response

```json
[
  {
    "_id": "TASK_ID",
    "title": "Create login page",
    "description": "Implement user login",
    "status": "Todo",
    "board": "BOARD_ID"
  }
]
```

---

 Create Task

 POST `/tasks`

Creates a new task.

 Request

```json
{
  "title": "Create login page",
  "description": "Implement user login",
  "status": "Todo",
  "board": "BOARD_ID"
}
```

 Response

```json
{
  "_id": "TASK_ID",
  "title": "Create login page",
  "description": "Implement user login",
  "status": "Todo",
  "board": "BOARD_ID"
}
```

---

 Update Task

 PUT `/tasks/:id`

Updates an existing task.

 Request

```json
{
  "title": "Create login page",
  "status": "Doing"
}
```

 Response

```json
{
  "_id": "TASK_ID",
  "title": "Create login page",
  "status": "Doing"
}
```

---

 Delete Task

DELETE `/tasks/:id`

Deletes an existing task.

 Response

```json
{
  "message": "Task deleted successfully"
}
```

---

 6. Common HTTP Status Codes

| Status | Meaning                        |
| ------ | ------------------------------ |
| 200    | Request successful             |
| 201    | Resource created               |
| 400    | Bad request                    |
| 401    | Authentication required/failed |
| 403    | Forbidden                      |
| 404    | Resource not found             |
| 409    | Conflict                       |
| 500    | Server error                   |

---

 7. Error Response Format

API errors should return a JSON response such as:

```json
{
  "error": "Error message"
}
```

---

 8. API Testing

The API endpoints should be tested using Postman or another REST API testing tool.

The following tests should be performed:

* User registration
* User login
* Get boards
* Create board
* Update board
* Delete board
* Create task
* Get tasks
* Update task
* Delete task
* Unauthorized request
* Invalid request

---

# 9. Authentication Test

Protected endpoints should reject requests without a valid JWT token.

Example:

```http
GET /api/boards
```

Without:

```http
Authorization: Bearer <JWT_TOKEN>
```

Expected result:

```text
401 Unauthorized
```
