let activities = getActivities();

// render awal (biar data lama muncul)
renderList(activities);
renderTotal(activities);

addBtn.addEventListener("click", function () {
    const name = activityInput.value;
    const duration = parseInt(durationInput.value);

    if (!name || !duration || duration <= 0) return;

    const newActivity = {
        name,
        duration
    };

    activities.push(newActivity);

    saveActivities(activities);

    renderList(activities);
    renderTotal(activities);

    activityInput.value = "";
    durationInput.value = "";
});