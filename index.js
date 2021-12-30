const fs = require("fs");
const path = require("path");
const { transformSync } = require("@babel/core");

function convertTStoJS(code) {
  return transformSync(code, {
    plugins: [
      [require.resolve("@babel/plugin-transform-typescript"), { isTSX: true }],
    ],
  });
}

function cloneFiles(sourcePath, destPath) {
  if (!fs.existsSync(destPath)) {
    fs.mkdir(destPath, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }

  const files = fs.readdirSync(sourcePath);
  for (let file of files) {
    if (
      file === "node_modules" ||
      file === ".expo" ||
      file === ".git" ||
      file === ".DS_Store"
    )
      continue;
    let sourceFilePath = path.join(sourcePath, file);
    if (fs.statSync(sourceFilePath).isDirectory()) {
      cloneFiles(sourceFilePath, path.join(destPath, file));
    } else {
      if (file.endsWith(".ts") || file.endsWith(".tsx")) {
        const data = fs.readFileSync(sourceFilePath);
        const { code } = convertTStoJS(data);
        const cloneDestPath = path.join(
          destPath,
          file.replace(".tsx", ".jsx").replace(".ts", ".js")
        );
        fs.writeFileSync(cloneDestPath, code, { encoding: "utf-8" });
      } else {
        const code = fs.readFileSync(sourceFilePath);
        const cloneDestPath = path.join(destPath, file);
        fs.writeFileSync(cloneDestPath, code, { encoding: "utf-8" });
      }
    }
  }
}

function main() {
  const sourcePath = process.argv[2];
  const destinationPath = process.argv[3];

  cloneFiles(sourcePath, destinationPath);
}

main();
