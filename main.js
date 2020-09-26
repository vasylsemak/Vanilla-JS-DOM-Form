const form = document.getElementById('addForm');
const unorderedList = document.getElementById('items');
const filter = document.getElementById('filter');
const itemsList = document.getElementsByTagName('li');

// Event Listeners
form.addEventListener('submit', addItem);
unorderedList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterList);

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

// Filter List
function filterList(evt) {
  Array.from(itemsList).forEach(item => {
    let filterT = evt.key.toLowerCase();
    let itemT = item.textContent.toLowerCase();

    if (itemT.indexOf(filterT) !== -1) item.style.display = 'block';
    else item.style.display = 'none';
  });
}
