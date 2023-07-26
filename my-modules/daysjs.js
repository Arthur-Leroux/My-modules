//import du modules dayjs natif 
const dayjs = require(`dayjs`);
//plugin de dayjs pour changer le format
const advancedFormat = require('dayjs/plugin/advancedFormat');
//j'appelle la fonction avec l'extension plugin
dayjs.extend(advancedFormat);


function date(){
    return dayjs().format(`dddd, MMMM Do YYYY`);
}
date();

module.exports = {date};