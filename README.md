A trivial Node script for cloning an existing Typescript project, into a Javascipt replica.

Might be useful if you quickly want to get ride of all the typescript related code from a project and clone it into a javascript replica.

## Usage:

`node index.js /absolute/path/to/source/ /absolute/path/to/destination/`

### Example:

`node index.js ~/Projects/DemoTS ~/Projects/DemoJS`

`DemoTS` directory needs to exists, but `DemoJS` directory is optional, it may or mayn't exist. If the directory doesn't exist, it will be created by the script.

**Note: The script in it's current incarnation doesn't clean the contents of the desitnaton directory upon re-runs, you will have to clean the contents of the directory yourself, if it already contains some data.**

**Just Run**
`rm -rf /absolute/path/to/destination/`
