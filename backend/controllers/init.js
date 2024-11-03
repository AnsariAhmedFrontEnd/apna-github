const fs = require("fs").promises;
const path = require("path");
const initRepo = async () => {
  const repoPath = path.resolve(process.cwd(), ".apnagit");
  const commitPath = path.join(repoPath, "commits");
  try {
    await fs.mkdir(repoPath, { recursive: true });
    await fs.mkdir(commitPath, { recursive: true });
    await fs.writeFile(
      path.join(repoPath, "config.js"),
      JSON.stringify({ bucket: process.env.S3_BUCKET })
    );

    console.log("repository initialized");
  } catch (error) {
    console.error("Error initializing repository", error);
  }
};

module.exports = { initRepo };
