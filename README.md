# Basic Yeoman Json Templating
Takes input from a json file and writes it out in the current folder.

## Setup

### Install Node
Download from https://nodejs.org/en/download/

### Install Yeoman
Run the following command:
```
npm install -g yo
```

#### Windows special instructions
In order to run yo commands, you will need to have your powershell set up to run remote signed scripts.
Open a powershell window in adminstrator mode and run the following:
```
Set-ExecutionPolicy RemoteSigned
```

### Install template
Navigate to root directory of this project and run the following commands:
```
npm install
```

## Using Template

### Add input
Add a inputs.json file in a folder you would like to run the template.
It should have a field named "testVar". See below for an example. 
There is also an example file under the test directory. 

```
{
  "testVar": "hello2"
}
```

### Run template
From the folder you would like to apply the template, run the following:
```
yo yeoman-tes
```

## Updating template

### Change generator name
This is the name is found under the package.json file. 
It must begin with "generator-"; this will be excluded when running the template.

### Change the template
This is the template.txt file under the templates folder, update it to change the output.

t