const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted');
  const name = e.currentTarget.item.value;
  // if its empty then don't submit it
  if (!name) {
    return;
  }
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // push the items into our state
  items.push(item);
  console.log(`there are now ${items.length} in your state`);
  // clear the form
  // e.target.reset();
  e.currentTarget.item.value = '';

  // fire off a custom event that will tell anyone else who cares that the items have been updated!
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input type="checkbox" value="${item.id}" ${
        item.complete ? 'checked' : ''
      }>
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}" value="${
        item.id
      }">&times;</button>
    </li>`
    )
    .join('');
  // console.log(html);
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('saving items to local storage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from LS');
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach(item => items.push(item));
    items.push(...lsItems);
    // items.push(lsItems[0]);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('Deleting', id);
  items = items.filter(item => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('marking as complete', id);
  const itemRef = items.find(item => item.id === id);
  console.log(itemRef);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation: We listen for the click on the List <ul>
// but then delegate the click over to the button if that is what was clicked.
list.addEventListener('click', function(e) {
  const id = parseInt(e.target.value);
  console.log(e.target, e.currentTarget);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches(`input[type="checkbox"]`)) {
    markAsComplete(id);
  }
});
restoreFromLocalStorage();
