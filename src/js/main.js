// Import our custom CSS
import '../scss/styles.scss';

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
