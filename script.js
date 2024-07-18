document.addEventListener('DOMContentLoaded', function () {
    const termsLink = document.getElementById('termsLink');
    const privacyLink = document.getElementById('privacyLink');
    const termsModal = document.getElementById('termsModal');
    const privacyModal = document.getElementById('privacyModal');
    const termsFrame = document.getElementById('termsFrame');
    const privacyFrame = document.getElementById('privacyFrame');
    const closeButtons = document.querySelectorAll('.close');

    // Open modal for Terms and Conditions
    termsLink.addEventListener('click', function (event) {
        event.preventDefault();
        termsModal.style.display = 'block';
        termsFrame.src = "https://click.afflink.mobi/TermsAndConditions?id=1236&country=Unknown&langcode=en";
    });

    // Open modal for Privacy Policy
    privacyLink.addEventListener('click', function (event) {
        event.preventDefault();
        privacyModal.style.display = 'block';
        privacyFrame.src = "https://click.afflink.mobi/PrivacyPolicy?id=1236&country=Unknown&langcode=en";
    });

    // Close modals when close button is clicked
    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            termsModal.style.display = 'none';
            privacyModal.style.display = 'none';
            termsFrame.src = '';
            privacyFrame.src = '';
        });
    });

    // Close modals when clicking outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === termsModal || event.target === privacyModal) {
            termsModal.style.display = 'none';
            privacyModal.style.display = 'none';
            termsFrame.src = '';
            privacyFrame.src = '';
        }
    });
});
