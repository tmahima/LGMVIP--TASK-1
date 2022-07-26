function addTask() {
    let Taskname = document.getElementById("task-input").value;
    if (Taskname == "") {
        alert("Please enter a task to continue");
    }
    else {
        let list = document.getElementById("list");
        let item = document.createElement('li');
        let a = document.createElement('a');
        let b = document.createElement('a');
        a.className = 'fa-solid fa-xmark';
        b.className = 'fa-solid fa-check';
        item.textContent = Taskname;
        a.style.textDecoration = 'none';
        a.style.color = 'red';
        b.style.color = 'green';
        b.style.textDecoration = 'none';
        item.appendChild(a);
        item.appendChild(b);
        let first = list.firstElementChild;
        if (first == null) {
            list.appendChild(item);
            document.getElementById("task-input").value = "";
        }
        else {
            list.insertBefore(item, first);
            document.getElementById("task-input").value = "";
        }
        let del = a;
        del.addEventListener('click', function (e) {
            let list = document.getElementById("list");
            let item = e.target.parentNode;
            list.removeChild(item);
        })
        let done = b;
        done.addEventListener('click', function (e) {
            let item = e.target.parentNode;
            item.style.color = 'red';
            item.style.textDecoration = 'line-through';
        })
    }
}