const theme_array = [
  {
    name: 'maki',
    image_source_name: 'Kicks',
    image_source_link: 'https://twitter.com/kicks0u',
  },
  {
    name: '2b',
    image_source_name: 'Artgerm',
    image_source_link: 'https://www.deviantart.com/artgerm/art/2B-662254318',
  },
]

function getRandomTheme() {
  const number = Math.floor(Math.random() * theme_array.length);
  const themeIndex = theme_array[number];
  createLinkElement(themeIndex.name);
  createImageSource(themeIndex.image_source_name, themeIndex.image_source_link);
}

function createLinkElement(theme){
  let head = document.getElementsByTagName('HEAD')[0];
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'css/themes/'+theme+".css";
  head.appendChild(link);
}

function createImageSource(name, src){
  var domElement = document.getElementById("image-source");
  domElement.innerHTML = `Image credit: <a href="${src}">${name}</a>`;
}

getRandomTheme();
