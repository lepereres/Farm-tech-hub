# API Documentation for Farm Tech Hub

## Introduction
Welcome to the API documentation for the Farm Tech Hub. This document details all available endpoints, their request/response structures, and authentication methods used in the API.

## Authentication
To access the Farm Tech Hub API, you must authenticate using a valid token. Include your token in the headers of your requests:

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Endpoints

### 1. Get All Farms
- **Method:** GET  
- **URL:** `/api/farms`

**Request Example:**  
```
GET /api/farms HTTP/1.1
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Response Example:**  
```json
[
    {
        "id": 1,
        "name": "Green Acres",
        "location": "California"
    },
    {
        "id": 2,
        "name": "Sunny Farms",
        "location": "Texas"
    }
]
```  

### 2. Create a Farm
- **Method:** POST  
- **URL:** `/api/farms`

**Request Example:**  
```json
{
    "name": "New Farm",
    "location": "Oregon"
}
```

**Response Example:**  
```json
{
    "id": 3,
    "name": "New Farm",
    "location": "Oregon"
}
```

### 3. Update a Farm
- **Method:** PUT  
- **URL:** `/api/farms/{id}`

**Request Example:**  
```json
{
    "name": "Updated Farm Name",
    "location": "Washington"
}
```

**Response Example:**  
```json
{
    "id": 1,
    "name": "Updated Farm Name",
    "location": "Washington"
}
```

### 4. Delete a Farm
- **Method:** DELETE  
- **URL:** `/api/farms/{id}`

**Request Example:**  
```
DELETE /api/farms/1 HTTP/1.1
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Response Example:**  
```json
{
    "message": "Farm deleted successfully."
}
```

## Conclusion
This API provides necessary endpoints to manage farm data effectively. For additional inquiries or support, please reach out to the API maintainers.
