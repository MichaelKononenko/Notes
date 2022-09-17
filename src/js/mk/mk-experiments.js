const addButton = document.getElementById('add');
const notesArea = document.querySelector('.content-wrapper');

console.log(notesArea);
addButton.addEventListener('click', addItem);

let idCounter = 0;

function addItem() {
  const newNote = document.createElement('li');
  newNote.classList.add('note');
  newNote.id = `item-${idCounter}`;
  newNote.innerHTML += `
   <h2 class="note__title">Title</h2>
    <p class="note__tags">tags</p>
  `;
  notesArea.append(newNote);
  idCounter += 1;
}
