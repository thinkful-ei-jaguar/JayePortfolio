import $ from 'jquery';

const generateHome = function () {
  return `
    <header role="banner">
      <h1>Lorem Ipsum</h1>
    </header>
    <section>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
    </section>
    <section>
      <button type="button" class="learnMore">Learn More</button>
    </section>
  `;
};

const generateLearnMore = function () {
  return `
    <header role="banner">
      <h1>Lorem Ipsum</h1>
    </header>
    <section>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
    </section>
    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed. Sit amet porttitor eget dolor morbi non arcu risus quis. Sagittis purus sit amet volutpat consequat mauris. At risus viverra adipiscing at in tellus integer feugiat. Et tortor at risus viverra. Non curabitur gravida arcu ac tortor dignissim. Urna et pharetra pharetra massa massa. Neque egestas congue quisque egestas diam in arcu cursus euismod. Ac odio tempor orci dapibus ultrices in iaculis nunc. Amet facilisis magna etiam tempor. Odio tempor orci dapibus ultrices in iaculis. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Et tortor at risus viverra. Bibendum est ultricies integer quis auctor elit sed. Id ornare arcu odio ut sem nulla pharetra diam sit. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Amet commodo nulla facilisi nullam vehicula ipsum. Id faucibus nisl tincidunt eget nullam non nisi.</p>
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
    <header role="banner">
      <h1>Contact Me</h1>
    </header>
    <section>
      <a href="">My GitHub</a>
      <a href="">My LinkedIn</a>
      <p class = 'contact'> LoremIpsum@gmail.com </p>
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
        <p>Lorem Ipsum</p>
        <div class = 'imgPlace'> <p>Img</p> </div>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Technology: Lorem ipsum dolor</p>
        <a href="">project repo</a>
        <a href="">live app</a>
      </div>
      <div class = 'project'> 
        <p>Lorem Ipsum</p>
        <div class = 'imgPlace'> <p>Img</p> </div>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Technology: Lorem ipsum dolor</p>
        <a href="">project repo</a>
        <a href="">live app</a>
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