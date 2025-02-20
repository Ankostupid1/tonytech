// Add any JavaScript functionality here
document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded");
});

document.addEventListener('DOMContentLoaded', () => {
    const ceoContainer = document.getElementById('ceo-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ceoContainer.classList.add('visible'); // Add the visible class
                observer.unobserve(ceoContainer); // Stop observing after it becomes visible
            }
        });
    });

    observer.observe(ceoContainer); // Start observing the CEO container
});

document.addEventListener('DOMContentLoaded', () => {
    const ceoContainer = document.getElementById('ceo-container');
    const footer = document.getElementById('footer');

    // Intersection Observer for CEO container
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ceoContainer.classList.add('visible'); // Add the visible class
                observer.unobserve(ceoContainer); // Stop observing after it becomes visible
            }
        });
    });

    observer.observe(ceoContainer); // Start observing the CEO container

    // Animate footer on page load
    window.addEventListener('load', () => {
        footer.classList.add('visible'); // Add the visible class to footer
    });
});





    // Intersection Observer for Tony container
    const tonyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tonyContainer.classList.add('visible'); // Add the visible class
                tonyObserver.unobserve(tonyContainer); // Stop observing after it becomes visible
            }
        });
    });

    tonyObserver.observe(tonyContainer); // Start observing the Tony container

    // Animate footer on page load
    window.addEventListener('load', () => {
        footer.classList.add('visible'); // Add the visible class to footer
    });
});


//appointment form
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Validate form fields
    if (name && email && phone && date && time) {
        // Prepare form data for submission
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('date', date);
        formData.append('time', time);

        // Send data to the PHP backend
        fetch('submit_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Show success or error message from PHP
            document.getElementById('appointmentForm').reset(); // Reset the form
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while booking your appointment. Please try again.');
        });
    } else {
        alert('Please fill out all fields before submitting.');
    }
});