// script.js

// Add new journal entry
function addJournalEntry() {
    const textArea = document.getElementById("journal-text");
    const log = document.getElementById("journal-log");
    if (textArea.value.trim()) {
        const entry = document.createElement("div");
        entry.textContent = textArea.value;
        entry.className = "journal-entry";
        log.prepend(entry);
        textArea.value = "";
    }
}

// Add a task to the dashboard
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    if (taskInput.value.trim()) {
        const task = document.createElement("div");
        task.className = "task";
        task.innerHTML = `<span>${taskInput.value}</span> <input type="checkbox">`;
        taskList.appendChild(task);
        taskInput.value = "";
    }
}
