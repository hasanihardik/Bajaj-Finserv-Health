const express = require('express');
const router = express.Router();
const { processData } = require('../utils/dataProcessor');

/**
 * POST /bfhl
 * Process array of data and return categorized results
 */
router.post('/', (req, res) => {
  try {
    // Validate request body
    if (!req.body || !req.body.data) {
      return res.status(400).json({
        is_success: false,
        message: "Request body must contain 'data' field"
      });
    }

    // Process the input data
    const result = processData(req.body.data);

    // Return response with required fields
    res.status(200).json({
      is_success: true,
      user_id: "hardik_hasani_17091999",
      email: "hardik.hasani2022@vitstudent.ac.in",
      roll_number: "22BCE1397",
      ...result
    });
  } catch (error) {
    // Handle validation errors
    if (error.message.includes('Invalid input')) {
      return res.status(400).json({
        is_success: false,
        message: error.message
      });
    }
    
    // Pass other errors to error handler middleware
    throw error;
  }
});

module.exports = router;
