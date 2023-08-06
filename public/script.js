document.addEventListener('DOMContentLoaded', () => {

    const showPasswordCheckbox = document.getElementById('show-password');
    const passwordInput = document.getElementById('password');

    showPasswordCheckbox.addEventListener('change', () => {
        passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });

    const form = document.getElementById('my-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log('Error', error);
        }
    });
});