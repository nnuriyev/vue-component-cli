#!/usr/bin/env node

const path = require('path');
const chalk = require("chalk");
const shell = require("shelljs");

const createFiles = (componentName, workingFolder) => {
    shell.mkdir(`${workingFolder}/${componentName}`);
    shell.cat(__dirname + '/templates/component.module.vue').to(`${workingFolder}/${componentName}/component.module.vue`);
    shell.mkdir(`${workingFolder}/${componentName}/Components`);
    shell.mkdir(`${workingFolder}/${componentName}/Container`);
    shell.cat(__dirname + '/templates/Container/script.module.js').to(`${workingFolder}/${componentName}/Container/script.module.js`);
    shell.touch(`${workingFolder}/${componentName}/Container/style.module.scss`);
    shell.touch(`${workingFolder}/${componentName}/Container/template.module.html`);
    shell.mkdir(`${workingFolder}/${componentName}/Models`);
    shell.mkdir(`${workingFolder}/${componentName}/Models/Extras`);
    shell.mkdir(`${workingFolder}/${componentName}/Models/Module`);
    shell.cat(__dirname + '/templates/Models/Module/Components.js').to(`${workingFolder}/${componentName}/Models/Module/Components.js`);
    shell.cat(__dirname + '/templates/Models/Module/Computed.js').to(`${workingFolder}/${componentName}/Models/Module/Computed.js`);
    shell.cat(__dirname + '/templates/Models/Module/Data.js').to(`${workingFolder}/${componentName}/Models/Module/Data.js`);
    shell.cat(__dirname + '/templates/Models/Module/Methods.js').to(`${workingFolder}/${componentName}/Models/Module/Methods.js`);
    shell.cat(__dirname + '/templates/Models/Module/Props.js').to(`${workingFolder}/${componentName}/Models/Module/Props.js`);
    shell.cat(__dirname + '/templates/Models/Module/Watch.js').to(`${workingFolder}/${componentName}/Models/Module/Watch.js`);
};


const success = (componentName) => {
    console.log(chalk.white.bgGreen.bold(`Done! Created ${componentName} component.`));
};

const run = async () => {

    if(!process.argv[2]){
        console.log('Component name is required!');
        return;
    }

    const componentName = process.argv[2];
    const workingFolder = process.argv[3] ? process.argv[3] : process.cwd();

    createFiles(componentName, workingFolder);
    success(componentName);

};
  
run();