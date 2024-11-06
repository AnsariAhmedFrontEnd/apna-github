const createRepo = (req, res) => {
  res.send("Repo created");
};

const getAllRepo = (req, res) => {
  res.send("All repo fetrched");
};

const fetchRepoById = (req, res) => {
  res.send("Repo detailes fetched");
};

const fetchRepoByName = (req, res) => {
  res.send("Repo fercheeb by name");
};

const fetchRepoForCurrentUser = (req, res) => {
  res.send("current user repo fethed");
};

const updateRepo = (req, res) => {
  res.send("Repo update");
};

const toggleVisibility = (req, res) => {
  res.send("visibility toggled");
};

const deletedRepo = (req, res) => {
  res.send("Repo deleted");
};

module.exports = {
  createRepo,
  getAllRepo,
  fetchRepoById,
  fetchRepoByName,
  fetchRepoForCurrentUser,
  updateRepo,
  toggleVisibility,
  deletedRepo,
};
