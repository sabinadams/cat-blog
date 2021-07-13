// ****************************
// Help! My cat blog is broken!
// Can you help me fix it?
// ****************************

// import "./style.css";

const blogContent = [
  {
    id: '1',
    title: 'Tabby is my favourite',
    imageUrl: 'http://placekitten.com/300/200',
    body:
      "This is my cat, Tabby. She's the greatest cat in the world, She just loves to play and cuddle!"
  },
  {
    id: '2',
    title: 'My Other Cat, Quinton',
    imageUrl: 'http://placeKitten.com/200/200',
    body:
      "Quinton's a little choosy. He only likes fancy things. He takes up a lot of my income."
  }
];

const ellipsis = text => text.substr(0, 50) + '...';
const findPropEq = (prop, value) => data =>
  data.find(obj => obj[prop] === value);

// ellipsis toggle
const expandElipsis = function() {
  const blogId = this.attributes['data-blogId'].value;
  const currentState = this.attributes['data-state'].value;
  const children = [...document.getElementById(blogId).children];
  const bodyEle = findPropEq('id', 'body')(children);
  const buttonEle = findPropEq('id', 'toggle')(children);
  const body = findPropEq('id', blogId)(blogContent);

  console.log(body.body);
  if (currentState === 'hide') {
    this.setAttribute('data-state', 'showing');
    this.innerHTML = 'Read More!';
    bodyEle.innerHTML = ellipsis(body.body);
  } else {
    this.setAttribute('data-state', 'hide');
    this.innerHTML = 'hide';
    bodyEle.innerHTML = body.body;
  }
};

const blogListing = ({ id, title, imageUrl, body }) => `
  <article id="${id}" class="blog">
    <h2>${title}</h2>
    <img url=${imageUrl} />
    <p id="body">${ellipsis(body)}</p>
    <button id="toggle" type="button" class="btnMore" data-blogId="${id}" data-state="showing">
      Read More!
    </button>
  </article>
`;

const app = document.getElementById('app');
app.innerHTML = `
    <main role="main" class="app">
      <h1 class="heading">Welcome to my cat blog!</h1>
      <content class="content">
        ${blogContent.map(blogListing)}
      </content>
    </main>
  `;

let buttons = Array.from(app.getElementsByClassName('btnMore'));
console.log(buttons);
// for ( key in buttons ) {
//   console.log(buttons[key])
//   buttons[key].addEventListener('click', expandElipsis);
// }
