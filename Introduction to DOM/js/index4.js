const listItems = document.querySelectorAll('li');

// Add event listener to each list item
listItems.forEach(item => {
    item.addEventListener('click', removeItem);
});

// Remove item from list
function removeItem(e) {    
    // Get the list item
    const li = e.target;
    // Remove the list item
    li.remove();
}