var origin = window.location.host.replace('.ideas.aha.io', '');

var logoHtml;
var context;
var titleHtml;

switch (origin) {
  case 'pureconnect':
    logoHtml = '<img class="pureconnect-logo platform-logo" src="https://genesys.aha.io/attachments/6558391697642203884/token/c32652a985067f60c734f94540e009541b8420a2f9fffe689301e1c3f136b74d" alt="PureConnect Logo">'
    context='pureconnect';
    titleHtml='<b><span class="highlight">PureConnect</span></b> Genesys';
    break;

  case 'genesysengage':
    logoHtml = '<img class="pureengage-logo platform-logo" src="https://genesys.aha.io/attachments/6843759719316910111/token/a25675390f02bd31703705ec920e5f23d5f9f5041103b12ce6835e3145b06635" alt="Genesys Engage Logo">'
    context='pureengage';
    titleHtml='<b><span class="highlight">Genesys Engage</span></b>';
    break;

  case 'genesyscloud':
    logoHtml = '<img class="purecloud-logo platform-logo" src="https://genesys.aha.io/attachments/6843759719224569046/token/06df81c6f1ca34d66c1ceb3216ba9467789af9300a3e7806aaa4378992c6fce0" alt="Genesys Cloud Logo">'
    context='purecloud';
    titleHtml='<b><span class="highlight">Genesys Cloud</span></b>';
    break;

  default: //genesys ideas portal
    logoHtml = '<img class="platform-logo" src="https://genesys.aha.io/attachments/6559232633694973713/token/ebf7111ec79581638affbd1a300c7155012fcc233ca0739ab7158f2ed291a827" alt="Genesys Ideas Labs Logo">'
    titleHtml='<span>Master Genesys</span>';

}

$('.platform-logo-container').append(logoHtml);
$('.platform-title').append(titleHtml);

/* Inject the genesys knowledge network sidebar */
window._gknUnivNav = {
    theme: 'light', // default is dark
    context: context // default is purecloud
};
$.getScript('https://apps.mypurecloud.com/gkn-univ-nav/embed/gkn.min.js');