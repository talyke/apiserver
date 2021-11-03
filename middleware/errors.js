const errorHandler = (err, req, res, next) => {
    console.log(123)
    if (res.headersSent) {
      return next(err)
    }
  
    res.status(500).json({
      success: false,
      error: err.message || 'Server Error',
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    })
  }
  
  module.exports = errorHandler

// these help if your having API trouble https://openweathermap.org/faq#error
// 401 wrong API key 
// 404 could be wrong initialization of API or see the web link
// 429 means you have made more 60 API calls in a minute!
