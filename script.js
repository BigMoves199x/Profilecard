function updateTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = `${now.toUTCString()}`;
}

// Update time on page load
updateTime();

// Update time every second
setInterval(updateTime, 1000);

