const input = document.querySelector('.input');
const todo = document.querySelector('.todo-box');
const submit = document.querySelector('.submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const value = input.value;
    if (value === '') {
        alert("Please enter your task");
    }else {
        addTodo(value);
        input.value = '';   // Clear the input field after adding
    }
});

const addTodo = (item) => {
    const listItem = document.createElement('li');
    const checkboxId = `checkbox-${Date.now()}`;       // Generate a unique ID
    listItem.innerHTML = `
                        <div class="articles">
                            <input type="checkbox" name="${checkboxId}" id="${checkboxId}" class="checkbox">
                            <p class="content">${item}</p>
                            <button class="icon-1">
                                <i class="fas fa-edit" id="icon-1"></i>
                            </button>
                            <button class="icon-2">
                                <i class="fas fa-trash" id="icon-2"></i>
                            </button>
                        </div>
    `;

    todo.appendChild(listItem);

    // Add event listener to the checkbox
    const checkbox = listItem.querySelector('.checkbox');
    checkbox.addEventListener('click', () => {
        const p = listItem.querySelector('.content');
        //console.log(`Checkbox is ${checkbox.checked}`);
        (checkbox.checked) ? p.classList.add('checked') : p.classList.remove('checked');
            
    });

    const deleteButton = listItem.querySelector('.icon-2');
    deleteButton.addEventListener('click', () => {
        listItem.remove();                                  // Remove the list item when delete is clicked
    });

    // Add event listener to the edit button (icon-1)
    const editButton = listItem.querySelector('.icon-1');
    editButton.addEventListener('click', () => {
        const editedText = prompt('Edit your task:', item);
        if (editedText) {
            const content = listItem.querySelector('.content');
            content.textContent = editedText;
        }
    });

    // Use event delegation to handle delete and edit actions for dynamically added list items
    // todo.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('icon-2')) {
    //         // Delete action
    //         const listItem = e.target.closest('li');
    //         listItem.remove();
    //     } else if (e.target.classList.contains('icon-1')) {
    //         // Edit action
    //         const listItem = e.target.closest('li');
    //         const content = listItem.querySelector('.content');
    //         const editedText = prompt('Edit your task:', content.textContent);
    //         if (editedText !== null) {
    //             content.textContent = editedText;
    //         }
    //     }
    // });
}
