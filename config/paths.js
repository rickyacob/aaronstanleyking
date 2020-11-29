  
const path = require("path");
const ROOT_DIR = process.cwd();

const SRC = "src/";
const ASSETS = "assets/";
const PUBLIC = "public/";
const CONFIG = "config/";

module.exports = {
	root: ROOT_DIR,
	src: path.resolve(ROOT_DIR, SRC),
	srcAssets: path.resolve(ROOT_DIR, SRC, ASSETS),
	public: path.resolve(ROOT_DIR, PUBLIC),
	config: path.resolve(ROOT_DIR, CONFIG),
};