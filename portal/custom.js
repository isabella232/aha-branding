var origin = window.location.origin;

var logoHtml;
var context;
var titleHtml;

if(origin.indexOf('pureconnect') > -1) {
    logoHtml = '<img class="pureconnect-logo platform-logo" src="https://genesys.aha.io/attachments/6558391697642203884/token/c32652a985067f60c734f94540e009541b8420a2f9fffe689301e1c3f136b74d" alt="PureConnect Logo">'
    context='pureconnect';
    titleHtml='<b><span class="highlight">PureConnect</span></b>';
}

if(origin.indexOf('pureengage') > -1) {
    logoHtml = '<img class="pureengage-logo platform-logo" src="https://genesys.aha.io/attachments/6558391697560195619/token/14642e301b4f1e304c1910776927d0e39060455082714a79e13bfd757d0db14b" alt="PureEngage Logo">'
    context='pureengage';
    titleHtml='<b><span class="highlight">PureEngage</span></b>';
}

if(origin.indexOf('purecloud') > -1) {
    logoHtml = '<img class="purecloud-logo platform-logo" src="https://genesys.aha.io/attachments/6558391697591354673/token/5d7359f0724b204284812c8b7e35fb0da4971b5e8181abebaf46a2140f2b7079" alt="PureCloud Logo">'
    context='purecloud';
    titleHtml='<b><span class="highlight">PureCloud</span></b>';
}

if(origin.indexOf('genesys') > -1) {
    logoHtml = '<img class="platform-logo" src="https://genesys.aha.io/attachments/6559232633694973713/token/ebf7111ec79581638affbd1a300c7155012fcc233ca0739ab7158f2ed291a827" alt="Genesys Ideas Labs Logo">'
    titleHtml='<span>Master</span>';
}

$('.platform-logo-container').append(logoHtml);
$('.platform-title').append(titleHtml);

/* Inject the genesys knowledge network sidebar */
window._gknUnivNav = {
    theme: 'light', // default is dark
    context: context // default is purecloud
};
$.getScript('https://apps.mypurecloud.com/gkn-univ-nav/embed/gkn.min.js');