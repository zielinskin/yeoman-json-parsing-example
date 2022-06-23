'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }
  start() {
    this.fs.copyTpl(
        this.templatePath('template.txt'),
        this.destinationPath(
          `results/template.txt`
        ),
        {
          testVar: "hello"
        }
    );
  }
};