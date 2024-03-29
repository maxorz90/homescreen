const themes = [ 'maki', '2b' ];

function createLinkElement(theme){

  let head = document.getElementsByTagName('HEAD')[0];
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'css/themes/'+theme+".css";
  head.appendChild(link);
}

function getRandomTheme() {
  const number = Math.floor(Math.random() * 2);

  createLinkElement(themes[number]);
}

getRandomTheme();
