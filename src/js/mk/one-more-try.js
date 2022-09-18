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
const removeButton = document.getElementById('remove');
const previousNote = document.getElementById('previous');
const nextNote = document.getElementById('next');

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
  addNewItem(idCounter);

  console.log(data);
}

function addNewItem(idCounter) {
  const newNote = document.createElement('li');
  newNote.classList.add('note');
  newNote.id = `item-${idCounter}`;

  newNote.innerHTML += `
   <h2 class="note__title">${data[idCounter - 1].title} №${idCounter}</h2>
    <p class="note__tags">tags: ${data[idCounter - 1].tags}</p>
  `;

  notesArea.append(newNote);

  const itemElement = document.getElementById(`item-${idCounter}`);
  itemElement.addEventListener('click', () => {
    console.log(idCounter);
    showNoteModal(idCounter);
    removeButton.addEventListener(
      'click',
      (remove = () => removeNote(idCounter))
    );
  });
}

noteModal.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    noteModal.classList.toggle('is-hidden');
  }
});

//show the note modal//
function showNoteModal(itemId) {
  nextNote.addEventListener('click', (next = () => goNextNote(itemId)), {
    once: true,
  });
  previousNote.addEventListener(
    'click',
    (previous = () => {
      goPreviousNote(itemId);
    }),
    {
      once: true,
    }
  );

  noteModal.classList.remove('is-hidden');

  noteList.innerHTML = `
     <li class="mk-note__item"><h2 id="note-title">${
       data[itemId - 1].title
     } №${itemId}</h2>
        <p id="note-description">${data[itemId - 1].description}</p>
        <p id="note-tags">tags: ${data[itemId - 1].tags}</p></li>`;
}

//add 10 lorem items//
const loremItemButton = document.getElementById('10-items');
loremItemButton.addEventListener('click', createLorem);

function createLorem() {
  for (let i = 0; i < 10; i++) {
    idCounter += 1;
    const newData = {
      title: 'Lorem, ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, maxime tempora! Reprehenderit, sequi harum amet aliquam rerum officia! Impedit, dolorum? Consequatur nemo sit quas. Numquam aspernatur reprehenderit nulla illum, voluptatibus tenetur voluptatem possimus fugit natus. Quia eos iure neque praesentium voluptatibus expedita provident ipsa aperiam. Excepturi dolorem nisi fugit tenetur.',
      tags: ['lorem', 'ipsum', 'dolor', 'sit'],
    };
    data.push(newData);

    addNewItem(idCounter);
  }
  console.log(data);
}

//remove item//
function removeNote(id) {
  console.log(data);
  const removedItem = document.getElementById(`item-${id}`);
  removedItem.remove();
  data[id - 1] = {};
  noteModal.classList.add('is-hidden');
  removeButton.removeEventListener('click', remove);
}

// handling forward and backward buttons//
function goPreviousNote(itemId) {
  itemId -= 1;
  if (itemId < 1) {
    itemId = 1;
  }
  console.log('ne ok');
  if (!Object.keys(data[itemId - 1]).length) {
    itemId -= 1;
  }
  showNoteModal(itemId);
}
function goNextNote(itemId) {
  console.log('voobshe ne ok');
  itemId += 1;
  if (itemId > data.length) {
    itemId = data.length;
  }
  if (!Object.keys(data[itemId - 1]).length) {
    itemId += 1;
  }
  showNoteModal(itemId);
}
