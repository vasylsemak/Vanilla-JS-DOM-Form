const form = document.getElementById('addForm');
const itemsList = document.getElementById('items');

form.addEventListener('submit', addItem);

// Add Item to List
function addItem(e) {
  e.preventDefault();
  const input = document.getElementById('item').value;
  const li = document.createElement('li');
  li.className = 'list-group-item';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(document.createTextNode(input));
  li.appendChild(deleteBtn);

  itemsList.appendChild(li);
}
