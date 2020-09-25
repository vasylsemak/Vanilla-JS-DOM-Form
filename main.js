const form = document.getElementById('addForm');
const unorderedList = document.getElementById('items');
// const itemsCollection = document.getElementsByTagName('li');

form.addEventListener('submit', addItem);
unorderedList.addEventListener('click', removeItem);

// Add Item to List
function addItem(evt) {
  evt.preventDefault();

  const input = document.getElementById('item').value;
  const li = document.createElement('li');
  li.className = 'list-group-item';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(document.createTextNode(input));
  li.appendChild(deleteBtn);

  unorderedList.insertBefore(li, unorderedList.firstChild);
}

// Remove Item
function removeItem(evt) {
  unorderedList.removeChild(evt.target.parentElement);
}
