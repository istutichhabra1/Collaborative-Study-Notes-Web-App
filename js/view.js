
import { db, collection, getDocs } from './firebase.js';

const notesGrid = document.getElementById('notesGrid');
const filterPriority = document.getElementById('filterPriority');
const searchInput = document.getElementById('search');

let notes = [];

async function loadNotes() {
  const snapshot = await getDocs(collection(db, "notes"));
  notes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  displayNotes();
}

function displayNotes() {
  let filtered = notes.filter(note =>
    note.title.toLowerCase().includes(searchInput.value.toLowerCase()) &&
    (filterPriority.value === 'All' || note.priority === filterPriority.value)
  );

  notesGrid.innerHTML = filtered.map(note => `
    <div class="note-card">
      <h3>${note.title}</h3>
      <p>${note.description}</p>
      <small>Priority: ${note.priority}</small>
    </div>
  `).join('');
}

filterPriority.addEventListener('change', displayNotes);
searchInput.addEventListener('input', displayNotes);

loadNotes();
