"use strict";
//Code pour la gestion des menus tabs
const tabs = document.querySelectorAll('[data-tab-value]');
const tabInfos = document.querySelectorAll('[data-tab-info]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabValue);
        if (!target) {
            throw new Error(`Impossible de trouver l'élément cible avec la valeur "${tab.dataset.tabValue}"`);
        }
        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active');
        });
        target.classList.add('active');
    });
});
