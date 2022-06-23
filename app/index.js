'use strict';

const Generator = require('yeoman-generator');
const fs = require('fs');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }
  start() {
    let rawData = fs.readFileSync('inputs.json');

    let data = JSON.parse(rawData);

    this.fs.copyTpl(
        this.templatePath('template.txt'),
        this.destinationPath(
          `results/template.txt`
        ),
        {
          testVar: data.testVar
        }
    );
  }
};