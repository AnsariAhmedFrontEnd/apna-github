const createIssue = (req, res) => {
  res.send("Issue created");
};

const getIssueById = (req, res) => {
  res.send("Issue fetched");
};

const updateIssueById = (req, res) => {
  res.send("Issue updated");
};

const deleteIssueById = (req, res) => {
  res.send("Issue deleted");
};

const getAllIssues = (req, res) => {
  res.send("Issue fetchd all");
};

module.exports = {
  createIssue,
  getAllIssues,
  getIssueById,
  deleteIssueById,
  updateIssueById,
};
