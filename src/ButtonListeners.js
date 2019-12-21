import $ from 'jquery';

const generateHome = function () {
  return `
    <header role="banner">
      <h1>Title</h1>
    </header>
    <section>
      <h2>Headline</h2>
    </section>
    <section>
      <button type="button" class="learnMore">Learn More</button>
    </section>
  `;
};

const generateLearnMore = function () {
  return `
    <header role="banner">
      <h1>Title</h1>
    </header>
    <section>
      <h2>Headline</h2>
    </section>
    <section>
      <p>About me</p>
    </section>
    <section>
      <button type="button" class="resume">Resume</button>
      <button type="button" class="seeMyWork">See my Work</button>
      <button type="button" class="contactMe">Contact Me</button>
    </section>
  `;
};

const generateResume = function () {
  return `
    <section>
      <p>Resume</p>
    </section>
    <section>
      <button type="button" class="seeMyWork">See My Work</button>
      <button type="button" class="home">Home</button>
      <button type="button" class="contactMe">Contact Me</button>
    </section>
  `;
};

const generateContactMe = function () {
  return `
    <section>
      <p>Contact Me</p>
    </section>
    <section>
      <button type="button" class="resume">Resume</button>
      <button type="button" class="home">Home</button>
      <button type="button" class="seeMyWork">See My work</button>
    </section>
  `;
};

const generateSeeMyWork = function () {
  return `
    <section>
      <button type="button">Github</button>
    </section>

    <section class = 'scrollmenu'>
      <div class = 'project'> 
        <p>Project 1</p>
      </div>
      <div class = 'project'> 
        <p>Project 2</p>
      </div>
      <div class = 'project'> 
        <p>Project 3</p>
      </div>
      <div class = 'project'> 
        <p>Project 4</p>
      </div>
    </section>

    <section>
      <button type="button" class="resume">Resume</button>
      <button type="button" class="home">Home</button>
      <button type="button" class="contactMe">Contact Me</button>
    </section>
  `;
};

const render = function (html = generateHome) {
  $('#main').html(html);
};

const handleLearnMore = function () {
  $('#main').on('click', '.learnMore', event => {
    render(generateLearnMore);
  });
};

const handleResume = function() {
  $('#main').on('click', '.resume', event => {
    render(generateResume);
  });
};

const handleContactMe = function() {
  $('#main').on('click', '.contactMe', event => {
    render(generateContactMe);
  });
};

const handleSeeMyWork = function() {
  $('#main').on('click', '.seeMyWork', event => {
    render(generateSeeMyWork);
  });
};

const handleHome = function() {
  $('#main').on('click', '.home', event => {
    render(generateHome);
  });
};

const bindEventListeners = function () {
  handleLearnMore();
  handleResume();
  handleContactMe();
  handleSeeMyWork();
  handleHome();
};

export default {
  render,
  bindEventListeners
};