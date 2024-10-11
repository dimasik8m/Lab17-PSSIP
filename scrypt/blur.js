document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.model-item');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            items.forEach(i => {
                if (i !== item) {
                    i.classList.add('blur');
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            items.forEach(i => {
                i.classList.remove('blur');
            });
        });
    });
});
