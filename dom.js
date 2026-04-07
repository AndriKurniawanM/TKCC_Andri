const activityInput = document.getElementById("activity");
const durationInput = document.getElementById("duration");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const totalText = document.getElementById("total");

function renderList(activities) {
    list.innerHTML = "";

    activities.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} — ${item.duration} menit`;

        list.appendChild(li);
    });
}

function renderTotal(activities) {
    const total = activities.reduce((sum, item) => sum + item.duration, 0);
    totalText.textContent = `Total: ${total} menit (${activities.length} aktivitas)`;
}