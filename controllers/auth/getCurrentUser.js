const getCurrentUser = async (req, res) => {
  const user = req.user;

  const { email, userName, avatarUrl, phone, skype, birthday } = user;

  res.status(200).json({
    code: 200,
    message: "Current user data",
    data: {
      user: {
        userName,
        email,
        avatarUrl,
        phone,
        skype,
        birthday,
      },
    },
  });
};

module.exports = getCurrentUser;
