const getAllUsers = async (req, res) => {
  res.send("All users fetched");
};

const signup = async (req, res) => {
  res.send("Signup user");
};

const login = async (req, res) => {
  res.send("Login User");
};

const getUsersProfile = async (req, res) => {
  res.send("Get user Profile");
};

const updateUserProfile = async (req, res) => {
  res.send("Update User Profile");
};

const deleteUserProfile = async (req, res) => {
  res.send("Delete User Profile");
};

module.exports = {
  getAllUsers,
  signup,
  login,
  getUsersProfile,
  updateUserProfile,
  deleteUserProfile,
};
