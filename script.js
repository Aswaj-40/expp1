document.addEventListener("DOMContentLoaded", () => {
    // Sidebar navigation elements
    const todayTasksTab = document.getElementById("todayTasks");
    const scheduledTasksTab = document.getElementById("scheduledTasks");
    const settingsTab = document.getElementById("settings");
  
    // Main content sections
    const todayTasksSection = document.getElementById("todayTasksSection");
    const scheduledTasksSection = document.getElementById("scheduledTasksSection");
    const settingsSection = document.getElementById("settingsSection");
  
    // Task inputs and buttons
    const taskInput = document.getElementById("taskInput");
    const taskTimeInput = document.getElementById("taskTimeInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const tasksList = document.getElementById("tasks");
  
    const scheduledTasksList = document.getElementById("scheduledTasksList");
  
    // Function to switch sections
    function showSection(sectionToShow) {
      todayTasksSection.classList.toggle("hidden", sectionToShow !== "today");
      scheduledTasksSection.classList.toggle("hidden", sectionToShow !== "scheduled");
      settingsSection.classList.toggle("hidden", sectionToShow !== "settings");
  
      todayTasksTab.classList.toggle("active", sectionToShow === "today");
      scheduledTasksTab.classList.toggle("active", sectionToShow === "scheduled");
      settingsTab.classList.toggle("active", sectionToShow === "settings");
    }
  
    // Sidebar navigation click events
    todayTasksTab.addEventListener("click", () => showSection("today"));
    scheduledTasksTab.addEventListener("click", () => showSection("scheduled"));
    settingsTab.addEventListener("click", () => showSection("settings"));
  
    // Function to add tasks to both Today and Scheduled sections
    function addTask(description, time) {
      // Add to Today Tasks
      const todayTaskItem = document.createElement("li");
      todayTaskItem.innerHTML = `
        <span>${description}</span>
        ${time ? `<span class="task-time">(${time})</span>` : ""}
      `;
      tasksList.appendChild(todayTaskItem);
  
      // Add to Scheduled Tasks
      const scheduledTaskItem = document.createElement("li");
      const todayDate = new Date().toLocaleDateString(); // Current date
      scheduledTaskItem.innerHTML = `
        <span>${description}</span>
        ${time ? `<span class="task-time">(${time})</span>` : ""}
        <span class="task-date">(${todayDate})</span>
      `;
      scheduledTasksList.appendChild(scheduledTaskItem);
    }
  
    // Add task to both sections on button click
    addTaskButton.addEventListener("click", () => {
      const description = taskInput.value.trim();
      const time = taskTimeInput.value;
  
      if (description) {
        addTask(description, time);
        taskInput.value = "";
        taskTimeInput.value = "";
      } else {
        alert("Please enter a task description.");
      }

      
  // Add new filter
  addFilterButton.addEventListener("click", () => {
    const filterName = filterNameInput.value.trim();
    const filterColor = filterColorInput.value;

    if (filterName) {
      if (!availableFilters[filterName]) {
        availableFilters[filterName] = filterColor;

        const filterItem = document.createElement("li");
        filterItem.innerHTML = `
          <input type="radio" name="filterRadio" value="${filterName}">
          <span style="color: ${filterColor}; font-weight: bold;">${filterName}</span>
          <button class="delete-filter">X</button>
        `;

        filters.appendChild(filterItem);

        // Delete filter functionality
        filterItem.querySelector(".delete-filter").addEventListener("click", () => {
          delete availableFilters[filterName];
          filters.removeChild(filterItem);

          // Unselect the deleted filter if it's currently selected
          const selectedFilter = document.querySelector(
            input[name="filterRadio"]:checked
          );
          if (selectedFilter && selectedFilter.value === filterName) {
            selectedFilter.checked = false;
          }
        });

        // Clear input fields
        filterNameInput.value = "";
        filterColorInput.value = "#ff0000";
      } else {
        alert("Filter name already exists.");
      }
    } else {
      alert("Please enter a filter name.");
    }
  });
});
})
  

  