const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    openIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
});

const eventForm = document.getElementById('event-form');

eventForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form data
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventLocation = document.getElementById('event-location').value;
    const eventParticipants = document.getElementById('event-participants').value;

    // Handle event creation (e.g., save to database, display confirmation)
    console.log("Event Name:", eventName);
    console.log("Event Date:", eventDate);
    console.log("Event Time:", eventTime);
    console.log("Event Location:", eventLocation);
    console.log("Event Participants:", eventParticipants);

    // Clear form inputs or show confirmation
    eventForm.reset();
});
