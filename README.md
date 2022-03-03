A trivial Node script for cloning an existing Typescript project, into a Javascipt replica.

Might be useful if you quickly want to get ride of all the typescript related code from a project and clone it into a javascript replica.

## Usage:

`node index.js /absolute/path/to/source/ /absolute/path/to/destination/`

### Example:

`node index.js ~/Projects/DemoTS/ ~/Projects/DemoJS/`

`DemoTS` and `DemoJS` directories need to exist and you need to pass absolute paths to both the directories.

**Note: The script in it's current incarnation doesn't clean the contents of the desitnaton directory upon re-runs, you will have to clean the contents of the directory yourself, if it already contains some data. To ensure correctness, make sure the destination directory is empty.**

**Just Run**
`rm -rf /absolute/path/to/destination/`
