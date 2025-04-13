
import { db, collection, addDoc } from './firebase.js';

document.getElementById('noteForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const note = {
    title: title.value,
    description: description.value,
    priority: priority.value,
    tags: tags.value.split(',').map(tag => tag.trim()),
    timestamp: new Date().toISOString()
  };

  await addDoc(collection(db, "notes"), note);
  localStorage.setItem(note.title, JSON.stringify(note));

  message.textContent = "Your note has been successfully saved!";
  this.reset();
});
