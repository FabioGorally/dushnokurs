const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
    const tabs = document.querySelectorAll(tabSelector),
    const contents = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
    contents.forEach((item) => {
        item.style.display = 'none';
    });
    };
        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    };
    
    const showTabContent = (item = 0) => {
        contents[item].style.display = 'block';
        tabs[item].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        const cleanTabSelector = tabSelector.replace(/\./, '');
        if (target && target.classList.contains(cleanTabSelector)) || 
        target.parentNode.classList.contains(cleanTabSelector) {
            tabs.forEach((item, i) => {
                if (target === item || target.parentNode === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

export default tabs;