function updateTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = `${now.toUTCString()}`;
}

updateTime();

// Update time every second
setInterval(updateTime, 1000);