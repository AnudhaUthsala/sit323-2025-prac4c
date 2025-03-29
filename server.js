const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Helper function to validate numbers
const validateNumbers = (num1, num2 = null) => {
  if (num2 !== null) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
      return false;
    }
  } else {
    if (typeof num1 !== 'number' || isNaN(num1)) {
      return false;
    }
  }
  return true;
};

// Addition endpoint
app.get('/add', (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!validateNumbers(n1, n2)) {
      return res.status(400).json({
        error: 'Invalid input. Please provide valid numbers for num1 and num2.'
      });
    }

    const result = n1 + n2;
    res.json({
      operation: 'addition',
      num1: n1,
      num2: n2,
      result: result
    });
  } catch (error) {
    res.status(500).json({
      error: 'An unexpected error occurred during addition.'
    });
  }
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!validateNumbers(n1, n2)) {
      return res.status(400).json({
        error: 'Invalid input. Please provide valid numbers for num1 and num2.'
      });
    }

    const result = n1 - n2;
    res.json({
      operation: 'subtraction',
      num1: n1,
      num2: n2,
      result: result
    });
  } catch (error) {
    res.status(500).json({
      error: 'An unexpected error occurred during subtraction.'
    });
  }
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!validateNumbers(n1, n2)) {
      return res.status(400).json({
        error: 'Invalid input. Please provide valid numbers for num1 and num2.'
      });
    }

    const result = n1 * n2;
    res.json({
      operation: 'multiplication',
      num1: n1,
      num2: n2,
      result: result
    });
  } catch (error) {
    res.status(500).json({
      error: 'An unexpected error occurred during multiplication.'
    });
  }
});

// Division endpoint
app.get('/divide', (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!validateNumbers(n1, n2)) {
      return res.status(400).json({
        error: 'Invalid input. Please provide valid numbers for num1 and num2.'
      });
    }

    if (n2 === 0) {
      return res.status(400).json({
        error: 'Division by zero is not allowed.'
      });
    }

    const result = n1 / n2;
    res.json({
      operation: 'division',
      num1: n1,
      num2: n2,
      result: result
    });
  } catch (error) {
    res.status(500).json({
      error: 'An unexpected error occurred during division.'
    });
  }
});

// Exponentiation endpoint (num1^num2)
app.get('/power', (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!validateNumbers(n1, n2)) {
      return res.status(400).json({
        error: 'Invalid input. Please provide valid numbers for num1 and num2.'
      });
    }

    const result = Math.pow(n1, n2);
    res.json({
      operation: 'exponentiation',
      num1: n1,
      num2: n2,
      result: result
    });
  } catch (error) {
    res.status(500).json({
      error: 'An unexpected error occurred during exponentiation.'
    });
  }
});

// Square root endpoint (sqrt(num1))
app.get('/sqrt', (req, res) => {
  try {
    const { num1 } = req.query;
    const n1 = parseFloat(num1);

    if (!validateNumbers(n1)) {
      return res.status(400).json({
        error: 'Invalid input. Please provide a valid number for num1.'
      });
    }

    if (n1 < 0) {
      return res.status(400).json({
        error: 'Square root of a negative number is not allowed.'
      });
    }

    const result = Math.sqrt(n1);
    res.json({
      operation: 'square_root',
      num1: n1,
      result: result
    });
  } catch (error) {
    res.status(500).json({
      error: 'An unexpected error occurred during square root calculation.'
    });
  }
});

// Modulo endpoint (num1 % num2)
app.get('/modulo', (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!validateNumbers(n1, n2)) {
      return res.status(400).json({
        error: 'Invalid input. Please provide valid numbers for num1 and num2.'
      });
    }

    if (n2 === 0) {
      return res.status(400).json({
        error: 'Modulo by zero is not allowed.'
      });
    }

    const result = n1 % n2;
    res.json({
      operation: 'modulo',
      num1: n1,
      num2: n2,
      result: result
    });
  } catch (error) {
    res.status(500).json({
      error: 'An unexpected error occurred during modulo operation.'
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Enhanced Calculator Microservice!',
    endpoints: {
      addition: '/add?num1=5&num2=3',
      subtraction: '/subtract?num1=5&num2=3',
      multiplication: '/multiply?num1=5&num2=3',
      division: '/divide?num1=5&num2=3',
      exponentiation: '/power?num1=2&num2=3',
      square_root: '/sqrt?num1=9',
      modulo: '/modulo?num1=10&num2=3'
    },
    note: 'Replace the numbers in the examples with your desired values.'
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found. Please check the API documentation.'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Enhanced calculator microservice running on port ${PORT}`);
});
