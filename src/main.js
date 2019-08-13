import {getMenuMarkup} from './components/menu';
import {getSearchMarkup} from './components/search';
import {getFilterMarkup} from './components/filter';
import {getContentMarkup} from './components/content';
import {getCardMarkup} from './components/card';
import {getLoadMoreMarkup} from './components/load-more';
import {getCardEditMarkup} from './components/card-edit';

const mainElement = document.querySelector(`.main`);
const headerElement = document.querySelector(`.main__control`);

const testCards = [{text: `Example default task with custom color.`, color: ``, repeat: false, deadLine: null, tags: [], edit: true},
  {text: `Next example task with deadline`, color: `red`, repeat: false, deadLine: new Date(2019, 7, 10, 12, 0, 0), tags: [], edit: false},
  {text: `Next example task with tags`, color: `pink`, repeat: false, deadLine: new Date(2019, 11, 22, 18, 0, 0), tags: [`#День Рождения`, `#Бухаем!`]}];

const render = (container, template) => {
  const place = `beforeEnd`;
  container.insertAdjacentHTML(place, template);
};

const prepareSite = () => {
  render(headerElement, getMenuMarkup());
  render(mainElement, getSearchMarkup());
  render(mainElement, getFilterMarkup());
  render(mainElement, getContentMarkup());
  const boardElement = document.querySelector(`.board`);
  const boardTasksElement = boardElement.querySelector(`.board__tasks`);
  testCards.forEach(({text, color, repeat, deadLine, tags, edit}) => {
    let newCard = edit ? getCardEditMarkup() : getCardMarkup(text, color, repeat, deadLine, tags);
    render(boardTasksElement, newCard);
  });
  render(boardElement, getLoadMoreMarkup());
};

prepareSite();
