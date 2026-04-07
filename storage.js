const STORAGE_KEY = "activities";

function getActivities() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveActivities(activities) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
}