A simple NodeJS script for cloning an existing Typescript project and create a new Javascipt project.

## Usage:

`node index.js /absolute/path/to/source/ /absolute/path/to/destination/`

### Example:

`node index.js ~/Projects/DemoTS ~/Projects/DemoJS`

`DemoTS` directory needs to exists, but `DemoJS` directory is optional, it may or mayn't exist. If the directory doesn't exist, it will be created by the script.

**Note: The script in it's current incarnation doesn't clean the contents of the desitnaton directory upon re-runs, you will have to clean the contents of the directory yourself, if it already contains some data.**

**Just Run**
`rm -rf /absolute/path/to/destination/`
