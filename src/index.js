  
import $ from 'jquery';
import './index.css';
import buttonListener from './ButtonListeners';

const main = function () {
  buttonListener.bindEventListeners();
  buttonListener.render();
};

$(main);