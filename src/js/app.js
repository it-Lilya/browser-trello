import { State } from './State';
import { Post } from './Post';
import { Transfer } from './Transfer';

const state = new State(localStorage);
const newPost = new Post();

newPost.bindToDOM(document.querySelector('.container'));
newPost.init();

const dragDrop = new Transfer();
dragDrop.init();

window.addEventListener('unload', () => {
  state.save(newPost.createObj());
});

const loader = state.load();
newPost.showLoad(loader);
