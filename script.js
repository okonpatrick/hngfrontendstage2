// JavaScript code to populate dynamic content
document.addEventListener("DOMContentLoaded", function () {
    // Slack Name
    const slackName = "Patrick Anthony Okon";
    document.querySelector("[data-testid='slackUserName']").textContent = slackName;

    // Current Day of the Week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = `Current Day: ${dayOfWeek}`;

    // Current UTC Time in Milliseconds
   const utcMilliseconds = today.getUTCMilliseconds();
   document.querySelector("[data-testid='currentUTCTime']").textContent = `UTC Time in Milliseconds: ${utcMilliseconds}`;
});
