# Bajaj Finserv Health API

A REST API built with Node.js and Express that processes arrays of data and returns categorized results.

## API Endpoint

- **URL**: `/bfhl`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Body

```json
{
  "data": ["array", "of", "strings", "numbers", "and", "special", "characters"]
}
```

### Response Format

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1", "5"],
  "even_numbers": ["2", "4"],
  "alphabets": ["A", "B", "C"],
  "special_characters": ["$", "&"],
  "sum": "12",
  "concat_string": "CbA"
}
```

### Example Cases

#### Example A
Request:
```json
{
  "data": ["a","1","334","4","R", "$"]
}
```

Response:
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

#### Example B
Request:
```json
{
  "data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]
}
```

Response:
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2","4","92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

#### Example C
Request:
```json
{
  "data": ["A","ABcD","DOE"]
}
```

Response:
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["A","ABCD","DOE"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "EoDdCbAa"
}
```

## Features

- Processes arrays containing strings, numbers, and special characters
- Categorizes numbers into odd and even arrays
- Converts alphabets to uppercase
- Identifies special characters
- Calculates sum of all numbers
- Creates concatenated string with alternating caps
- Error handling for invalid inputs
- Returns appropriate HTTP status codes

## Error Handling

- Returns 400 status code if request body is invalid
- Returns 500 status code for server errors
- All error responses include `is_success: false`

## Local Development

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Start the production server
```bash
npm start
```

## Deployment

The API is deployed on Render. The deployment configuration includes:

- Build Command: `npm install`
- Start Command: `node index.js`
- Environment: Node.js
- No additional environment variables required

## Tech Stack

- Node.js
- Express
- JavaScript

## Project Structure

```
├── src/
│   ├── index.js           # Main application entry
│   ├── routes/
│   │   └── bfhl.js       # Route handler
│   ├── middleware/
│   │   └── errorHandler.js # Error handling middleware
│   └── utils/
│       └── dataProcessor.js # Data processing utilities
├── index.js              # Root entry point
├── package.json
└── README.md
