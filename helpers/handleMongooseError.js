function handleMongooseError(error, data, next) {
  error.status = 400;
  console.log(error.name);
  if (error.name === "MongoServerError" && error.code === 11000) {
    // Check if the error is due to a duplicate key (unique constraint)
    if (error.keyPattern && error.keyPattern.userName) {
      // Custom message for the userName field
      error.message = "Username is not unique";
    } else if (error.keyPattern && error.keyPattern.email) {
      // Custom message for the email field
      error.message = "Email is not unique";
    }
  }
  next();
}

module.exports = handleMongooseError;
