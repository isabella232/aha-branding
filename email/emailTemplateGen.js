const fs = require('fs');
const path = require('path');

const HEADER =  '<!-- ####################################\n' +
                '## GENERATED CODE. DO NOT ALTER ####\n' +
                '#################################### !-->\n';

const PLATFORM_KEY = '@{PLATFORM}';
const FOOTER_KEY = '@{FOOTER}';

const PURECONNECT = 'pureconnect';
const PURECLOUD = 'purecloud';
const PUREENGAGE = 'pureengage';
const GENESYS = 'genesys';

var footer = '';

function main() {
    console.log('Generating templates');

    footer = fs.readFileSync(path.join(__dirname, './footer.html')).toString();

    generateNewIdeaTemplates();
    generateAdminResponseTemplates();
    generateCommentTemplates();
    generateStatusChangedTemplates();
}

/**
 * Adds the header to the template.
 * 
 * @param {string} template 
 */
function addHeader(template) {
    return HEADER + template;
}

/**
 * Adds the footer to the template.
 * 
 * @param {string} template 
 */
function addFooter(template) {
    let footerRegEx = new RegExp(FOOTER_KEY, 'g');

    return template.replace(footerRegEx, footer);
}


/**
 * Removes unnecessary formatting from the template.
 * 
 * @param {string} template 
 */
function removeFormatting(template) {
    let formatRegEx = /\s\s\s\s/g;

    return template.replace(formatRegEx, '');
}

function generateNewIdeaTemplates() {
    console.log('Generating new idea templates');

    let newIdeaTemplate = fs.readFileSync(path.join(__dirname, './new idea template.html')).toString();

    newIdeaTemplate = addHeader(newIdeaTemplate);
    newIdeaTemplate = addFooter(newIdeaTemplate);
    newIdeaTemplate = removeFormatting(newIdeaTemplate);

    let platformRegEx = new RegExp(PLATFORM_KEY, 'g');

    let pureConnectNewIdea = newIdeaTemplate.replace(platformRegEx, PURECONNECT);
    let pureCloudNewIdea = newIdeaTemplate.replace(platformRegEx, PURECLOUD);
    let pureEngageNewIdea = newIdeaTemplate.replace(platformRegEx, PUREENGAGE);
    let genesysNewIdea = newIdeaTemplate.replace(platformRegEx, GENESYS);

    console.log('Writing generated new idea templates to file');

    fs.writeFile(path.join(__dirname, './gen/newIdea/pureconnect new idea.txt'), pureConnectNewIdea);
    fs.writeFile(path.join(__dirname, './gen/newIdea/purecloud new idea.txt'), pureCloudNewIdea);
    fs.writeFile(path.join(__dirname, './gen/newIdea/pureengage new idea.txt'), pureEngageNewIdea);
    fs.writeFile(path.join(__dirname, './gen/newIdea/genesys new idea.txt'), genesysNewIdea);
}

function generateAdminResponseTemplates() {
    console.log('Generating admin response templates');

    let adminResponseTemplate = fs.readFileSync(path.join(__dirname, './admin response template.html')).toString();

    adminResponseTemplate = addHeader(adminResponseTemplate);
    adminResponseTemplate = addFooter(adminResponseTemplate);
    adminResponseTemplate = removeFormatting(adminResponseTemplate);

    let platformRegEx = new RegExp(PLATFORM_KEY, 'g');

    let pureConnectAdminResponse = adminResponseTemplate.replace(platformRegEx, PURECONNECT);
    let pureCloudAdminResponse = adminResponseTemplate.replace(platformRegEx, PURECLOUD);
    let pureEngageAdminResponse = adminResponseTemplate.replace(platformRegEx, PUREENGAGE);
    let genesysAdminResponse = adminResponseTemplate.replace(platformRegEx, GENESYS);

    console.log('Writing generated admin response templates to file');

    fs.writeFile(path.join(__dirname, './gen/adminResponse/pureconnect admin response.txt'), pureConnectAdminResponse);
    fs.writeFile(path.join(__dirname, './gen/adminResponse/purecloud admin response.txt'), pureCloudAdminResponse);
    fs.writeFile(path.join(__dirname, './gen/adminResponse/pureengage admin response.txt'), pureEngageAdminResponse);
    fs.writeFile(path.join(__dirname, './gen/adminResponse/genesys admin response.txt'), genesysAdminResponse);
}

function generateCommentTemplates() {
    console.log('Generating comment templates');

    let commentTemplate = fs.readFileSync(path.join(__dirname, './comment template.html')).toString();

    commentTemplate = addHeader(commentTemplate);
    commentTemplate = addFooter(commentTemplate);
    commentTemplate = removeFormatting(commentTemplate);

    let platformRegEx = new RegExp(PLATFORM_KEY, 'g');

    let pureConnectComment = commentTemplate.replace(platformRegEx, PURECONNECT);
    let pureCloudComment = commentTemplate.replace(platformRegEx, PURECLOUD);
    let pureEngageComment = commentTemplate.replace(platformRegEx, PUREENGAGE);
    let genesysComment = commentTemplate.replace(platformRegEx, GENESYS);

    console.log('Writing generated comment templates to file');

    fs.writeFile(path.join(__dirname, './gen/comment/pureconnect comment.txt'), pureConnectComment);
    fs.writeFile(path.join(__dirname, './gen/comment/purecloud comment.txt'), pureCloudComment);
    fs.writeFile(path.join(__dirname, './gen/comment/pureengage comment.txt'), pureEngageComment);
    fs.writeFile(path.join(__dirname, './gen/comment/genesys comment.txt'), genesysComment);
}

function generateStatusChangedTemplates() {
    console.log('Generating status changed templates');

    let statusChangedTemplate = fs.readFileSync(path.join(__dirname, './status changed template.html')).toString();

    statusChangedTemplate = addHeader(statusChangedTemplate);
    statusChangedTemplate = addFooter(statusChangedTemplate);
    statusChangedTemplate = removeFormatting(statusChangedTemplate);

    let platformRegEx = new RegExp(PLATFORM_KEY, 'g');

    let pureConnectStatusChanged = statusChangedTemplate.replace(platformRegEx, PURECONNECT);
    let pureCloudStatusChanged = statusChangedTemplate.replace(platformRegEx, PURECLOUD);
    let pureEngageStatusChanged = statusChangedTemplate.replace(platformRegEx, PUREENGAGE);
    let genesysStatusChanged = statusChangedTemplate.replace(platformRegEx, GENESYS);

    console.log('Writing generated status changed templates to file');

    fs.writeFile(path.join(__dirname, './gen/statusChanged/pureconnect status changed.txt'), pureConnectStatusChanged);
    fs.writeFile(path.join(__dirname, './gen/statusChanged/purecloud status changed.txt'), pureCloudStatusChanged);
    fs.writeFile(path.join(__dirname, './gen/statusChanged/pureengage status changed.txt'), pureEngageStatusChanged);
    fs.writeFile(path.join(__dirname, './gen/statusChanged/genesys status changed.txt'), genesysStatusChanged);
}

main();

