document.addEventListener('DOMContentLoaded', () => {
    // Filtragem de abas da Ementa com transição limpa
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            const targetCategory = button.getAttribute('data-target');

            menuItems.forEach(item => {
                if (item.getAttribute('data-category') === targetCategory) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Inicialização da Ementa: Mostrar apenas os pratos principais por defeito
    menuItems.forEach(item => {
        if (item.getAttribute('data-category') !== 'principais') {
            item.style.display = 'none';
        }
    });
});