function createLinkElement(){
  const theme_filename = getRandomTheme();

  let head = document.getElementsByTagName('HEAD')[0];
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'css/themes/'+theme_filename;
  head.appendChild(link);
}

function getRandomTheme() {
  const number = Math.floor(Math.random() * 2);

  switch (number) {
    case 0:
      return "2b.css";
      break;

    case 1:
      return "3b.css";
      break;
  }

}

createLinkElement();
