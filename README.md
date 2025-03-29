# **Enhanced Calculator Microservice**  

A **Node.js + Express** microservice that provides basic and advanced arithmetic operations via a REST API.  

## **Features**  
✅ **Basic Operations**  
- Addition (`/add`)  
- Subtraction (`/subtract`)  
- Multiplication (`/multiply`)  
- Division (`/divide`)  

✅ **Advanced Operations**  
- Exponentiation (`/power`)  
- Square Root (`/sqrt`)  
- Modulo (`/modulo`)  

✅ **Error Handling**  
- Invalid inputs (non-numeric values)  
- Division by zero  
- Square root of negative numbers  
- Modulo by zero  

---

## **API Endpoints**  

| **Endpoint**    | **Method** | **Parameters**       | **Example Request**               | **Response Example**                          |
|----------------|-----------|---------------------|-----------------------------------|---------------------------------------------|
| `/add`         | GET       | `num1`, `num2`      | `/add?num1=5&num2=3`             | `{ "operation": "addition", "num1": 5, "num2": 3, "result": 8 }` |
| `/subtract`    | GET       | `num1`, `num2`      | `/subtract?num1=5&num2=3`        | `{ "operation": "subtraction", "num1": 5, "num2": 3, "result": 2 }` |
| `/multiply`    | GET       | `num1`, `num2`      | `/multiply?num1=5&num2=3`        | `{ "operation": "multiplication", "num1": 5, "num2": 3, "result": 15 }` |
| `/divide`      | GET       | `num1`, `num2`      | `/divide?num1=10&num2=2`         | `{ "operation": "division", "num1": 10, "num2": 2, "result": 5 }` |
| `/power`       | GET       | `num1`, `num2`      | `/power?num1=2&num2=3`           | `{ "operation": "exponentiation", "num1": 2, "num2": 3, "result": 8 }` |
| `/sqrt`        | GET       | `num1`              | `/sqrt?num1=9`                   | `{ "operation": "square_root", "num1": 9, "result": 3 }` |
| `/modulo`      | GET       | `num1`, `num2`      | `/modulo?num1=10&num2=3`         | `{ "operation": "modulo", "num1": 10, "num2": 3, "result": 1 }` |
| `/` (Root)     | GET       | -                   | `/`                              | Returns API documentation with example endpoints. |

---

## **Error Responses**  
The API returns structured error messages for invalid requests:  

- **Invalid numbers**  
  ```json
  { "error": "Invalid input. Please provide valid numbers." }
  ```
- **Division by zero**  
  ```json
  { "error": "Division by zero is not allowed." }
  ```
- **Square root of a negative number**  
  ```json
  { "error": "Square root of a negative number is not allowed." }
  ```
- **Modulo by zero**  
  ```json
  { "error": "Modulo by zero is not allowed." }
  ```
- **Endpoint not found**  
  ```json
  { "error": "Endpoint not found. Please check the API documentation." }
  ```

---

## **Setup & Installation**  

### **Prerequisites**  
- Node.js (v14+)  
- npm (Node Package Manager)  

### **Steps**  
1. **Clone the repository** (if applicable)  
   ```bash
   git clone https://github.com/AnudhaUthsala/sit323-2025-prac4c.git
   cd calculator-microservice
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the microservice**  
   - **Development mode (auto-restart on changes)**  
     ```bash
     npm run dev
     ```
   - **Production mode**  
     ```bash
     npm start
     ```

4. **Access the API**  
   The service runs on:  
   ```
   http://localhost:3000
   ```

---

## **Testing the API**  

### **Using `curl`**  
```bash
# Addition
curl "http://localhost:3000/add?num1=5&num2=3"

# Division (error case)
curl "http://localhost:3000/divide?num1=5&num2=0"

# Square root
curl "http://localhost:3000/sqrt?num1=16"
```

### **Using a Browser or Postman**  
- Visit `http://localhost:3000` for API documentation.  
- Test endpoints like `http://localhost:3000/power?num1=2&num2=4`.  
