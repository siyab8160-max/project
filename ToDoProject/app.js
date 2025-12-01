


function addTask() {
    let listContainer = document.getElementById('list-container');
    let inputBox = document.getElementByIdById('input-box');
    if (input === '') {
        alert('Add Your Task');
    }
    else {
        let task = document.createElement('li');
        task.textContent = inputBox.value;
        listContainer.append(task);

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.append('span');
    }
    inputBox.value = '';
}
listContainer.addEventListener('click', (el) => {
    if (el.target.tagName == 'LI')
        el.target.classList.toggle('checked');
    else if (el.target.tagName == 'SPAN')
        el.target.parentElement.remove();
})


