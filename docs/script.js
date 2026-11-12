// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Active Navigation Link Highlighter
    // Automatically highlights the nav item matching the current page
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // Match the href attribute with the current filename
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Interactive Notice Board Click Handler
    // Simulates opening a modal or detailed view when clicking notices
    const noticeLinks = document.querySelectorAll('.notice-list a');

    noticeLinks.forEach(notice => {
        notice.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link jump for demonstration
            const noticeTitle = notice.textContent;

            // You can replace this with a modal popup or redirection logic
            console.log(`User clicked notice: ${noticeTitle}`);
            alert(`Loading details for:\n"${noticeTitle}"`);
        });
    });

    // 3. Simple Console Greeting for Build Verification
    console.log("CSE Department Website JavaScript loaded successfully.");
});