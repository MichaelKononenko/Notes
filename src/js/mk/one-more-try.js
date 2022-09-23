import { notesData } from './data';
console.log(notesData);
const data = [];

console.log(data);
const userAccessLevel = sessionStorage.getItem('userAccessLevel');
console.log('hello ', userAccessLevel);

let idCounter = 0;
const addButton = document.getElementById('add');
const notesArea = document.querySelector('.content-wrapper');
const submitButton = document.getElementById('form-submit');
const backdrop = document.querySelector('.mk-backdrop');
const inputModalForm = document.querySelector('.mk-modal__form');
const noteModal = document.querySelector('.mk-note__backdrop');
const noteList = document.querySelector('.mk-note__list');

//render notes from
for (const dataItem of notesData) {
  data.push(dataItem);
  addNewItem(idCounter);
  idCounter += 1;
}

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
  const title = inputModalForm.elements[0];
  const description = inputModalForm.elements[1];
  const tags = inputModalForm.elements[2];
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
  addNewItem(idCounter);

  console.log(data);
}

function addNewItem(idCounter) {
  const newNote = document.createElement('li');
  newNote.classList.add('note');
  newNote.id = `item-${idCounter}`;

  newNote.innerHTML += `
   <h2 class="note__title">${data[idCounter].title} №${idCounter}</h2>
    <p class="note__tags">tags: ${data[idCounter].tags}</p>
  `;

  notesArea.append(newNote);
}
////////////////
noteModal.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    noteModal.classList.toggle('is-hidden');
  }
});
////////////////
//show the note modal//
function showNoteModal(itemId) {
  noteModal.classList.remove('is-hidden');

  noteList.innerHTML = `
     <li class="mk-note__item"><h2 id="note-title">${data[itemId].title} №<span>${itemId}</span></h2>
        <p id="note-description">${data[itemId].description}</p>
        <p id="note-tags">tags: ${data[itemId].tags}</p></li>`;
}

//add 10 lorem items//
const loremItemButton = document.getElementById('10-items');
loremItemButton.addEventListener('click', createLorem);

function createLorem() {
  for (let i = 0; i < 10; i++) {
    const newData = {
      title: 'Lorem, ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, maxime tempora! Reprehenderit, sequi harum amet aliquam rerum officia! Impedit, dolorum? Consequatur nemo sit quas. Numquam aspernatur reprehenderit nulla illum, voluptatibus tenetur voluptatem possimus fugit natus. Quia eos iure neque praesentium voluptatibus expedita provident ipsa aperiam. Excepturi dolorem nisi fugit tenetur.',
      tags: ['lorem', 'ipsum', 'dolor', 'sit'],
    };
    data.push(newData);

    addNewItem(idCounter);
    idCounter += 1;
  }
  console.log(data);
}

//open item modal //
let listElementId;

notesArea.addEventListener('click', openItemModal);

function openItemModal(event) {
  const closestLiElement = event.target.closest('li');
  if (closestLiElement != null) {
    listElementId = closestLiElement.id;
    listElementId = Number(listElementId.split('-')[1]);
    showNoteModal(listElementId);
    // return listElementId;
  }
}

//handling clicks in the modal window of an element//
noteModal.addEventListener('click', itemClick);
function itemClick(event) {
  buttonTarget = event.target.id;
  switch (buttonTarget) {
    case 'next':
      listElementId += 1;
      if (listElementId > data.length - 1) {
        listElementId = data.length - 1;
      }
      if (!Object.keys(data[listElementId]).length) {
        listElementId += 1;
      }

      showNoteModal(listElementId);
      break;
    case 'previous':
      listElementId -= 1;
      if (listElementId < 1) {
        listElementId = 0;
      }
      if (!Object.keys(data[listElementId]).length) {
        listElementId -= 1;
      }

      showNoteModal(listElementId);
      break;
    case 'remove':
      console.log(data);
      const removedItem = document.getElementById(`item-${listElementId}`);
      removedItem.remove();
      data[listElementId] = {};
      noteModal.classList.add('is-hidden');
      break;
  }
}
