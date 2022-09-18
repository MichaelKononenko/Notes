const data = [];
/*
[
  {
    title: 'loop',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maxime!',
    tags: ['for', 'while', 'do while'],
  },
  {
    title: 'logical operator',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maxime!',
    tags: ['&&', '||', '!'],
  },
  {
    title: 'conditional branch',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maxime!',
    tags: ['if', 'if else', 'else'],
  },
];
*/

let idCounter = 0;
const addButton = document.getElementById('add');
const notesArea = document.querySelector('.content-wrapper');
const submitButton = document.getElementById('form-submit');
const backdrop = document.querySelector('.mk-backdrop');
const modalForm = document.querySelector('form');
const noteModal = document.querySelector('.mk-note__backdrop');
const noteList = document.querySelector('.mk-note__list');

addButton.addEventListener('click', () =>
  backdrop.classList.toggle('is-hidden')
);

backdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    backdrop.classList.toggle('is-hidden');
  }
});

submitButton.addEventListener('click', createNewNote);

function createNewNote(event) {
  event.preventDefault();

  const title = modalForm.elements[0];
  const description = modalForm.elements[1];
  const tags = modalForm.elements[2];
  const newNote = {
    title: title.value,
    description: description.value,
    tags: tags.value,
  };

  data.push(newNote);
  backdrop.classList.toggle('is-hidden');

  title.value = '';
  description.value = '';
  tags.value = '';

  idCounter += 1;
  addNetItem(idCounter);
}

function addNetItem(idCounter) {
  const newNote = document.createElement('li');
  newNote.classList.add('note');
  newNote.id = `item-${idCounter}`;
  newNote.innerHTML += `
   <h2 class="note__title">${data[idCounter - 1].title}</h2>
    <p class="note__tags">${data[idCounter - 1].tags}</p>
  `;

  notesArea.append(newNote);

  const itemElement = document.getElementById(`item-${idCounter}`);
  itemElement.addEventListener('click', () => {
    noteModal.classList.toggle('is-hidden');
    noteList.innerHTML = `
     <li class="mk-note__item"><h2 id="note-title">${
       data[idCounter - 1].title
     }</h2></li>
        <li class="mk-note__item"><p id="note-description">${
          data[idCounter - 1].description
        }</p></li>
        <li class="mk-note__item"><p id="note-tags">${
          data[idCounter - 1].tags
        }</p></li>
        `;
  });
}

noteModal.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    noteModal.classList.toggle('is-hidden');
  }
});
