//Code pour la gestion des menus tabs
const tabs: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('[data-tab-value]');
const tabInfos: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('[data-tab-info]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target: HTMLElement | null = document.querySelector<HTMLElement>(tab.dataset.tabValue!);
    if (!target) {
      throw new Error(`Impossible de trouver l'élément cible avec la valeur "${tab.dataset.tabValue}"`);
    }
    tabInfos.forEach(tabInfo => {
      tabInfo.classList.remove('active');
    });
    target.classList.add('active');
  });
});
