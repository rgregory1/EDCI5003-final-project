 // Theme Toggle
    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme');
      const newTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    }

    // Load Theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // To-do logic
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
      const list = document.getElementById('task-list');
      if (!list) return; // prevent error if todo section is removed

      list.innerHTML = '';
      tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${task}</span>
          <div>
            <button onclick="editTask(${i})">Edit</button>
            <button onclick="deleteTask(${i})">Delete</button>
          </div>
        `;
        list.appendChild(li);
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function addTask() {
      const input = document.getElementById('new-task');
      const task = input.value.trim();
      if (task) {
        tasks.push(task);
        input.value = '';
        renderTasks();
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    function editTask(index) {
      const newTask = prompt("Edit task:", tasks[index]);
      if (newTask) {
        tasks[index] = newTask.trim();
        renderTasks();
      }
    }

    renderTasks();

    // Save Profile
    function saveProfile(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      alert(`Profile saved for ${name} (${email})`);
      location.reload();
    }



    document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');

    const profileNameSlot = document.getElementById('profile-name');
    console.log('profileNameSlot:', profileNameSlot);

    const name = localStorage.getItem('name');
    console.log('localStorage name:', name);

    if (profileNameSlot) {
        if (name) {
        profileNameSlot.textContent = name;
        profileNameSlot.removeAttribute('href');  // no link when name exists
        profileNameSlot.style.cursor = 'default'; // show normal cursor
        profileNameSlot.onclick = null;            // disable click
        } else {
        profileNameSlot.textContent = 'Create a profile';
        profileNameSlot.href = 'profile.html';    // link to profile creation page
        profileNameSlot.style.cursor = 'pointer'; // show pointer cursor
        }
    }
    });

function clearLocalStorage() {
  localStorage.clear();
  console.log("Local storage has been cleared.");
  location.reload();
}


document.querySelectorAll('.image-card img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'rotateY(180deg)';
    img.style.filter = 'grayscale(100%)';
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateY(0deg)';
    img.style.filter = 'grayscale(0%)';
  });
});