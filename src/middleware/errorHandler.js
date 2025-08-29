/**
 * Global error handling middleware
 */
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Handle validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      is_success: false,
      message: err.message
    });
  }

  // Handle other errors
  res.status(500).json({
    is_success: false,
    message: 'Internal server error'
  });
};

module.exports = errorHandler;
