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

const getAllIssued = (req, res) => {
  res.send("Issue fetchd all");
};

module.exports = {
  createIssue,
  getAllIssued,
  getIssueById,
  deleteIssueById,
  updateIssueById,
};
