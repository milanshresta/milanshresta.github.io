  // Retrieve launch date from local storage
  let launchDate = localStorage.getItem('launchDate');

  // If launch date is not set, set it to 7 days from now
  if (!launchDate) {
    launchDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
    localStorage.setItem('launchDate', launchDate);
  }

  // Update the countdown every second
  const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is over, stop it
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "<p>The countdown is over!</p>";
      // Remove launch date from local storage
      localStorage.removeItem('launchDate');
    }
  }, 1000);