const tabs = document.querySelectorAll('.our-work-process_btn');
const tabContents = document.querySelectorAll('.our-work-process_tab');

function hideTabContent(a) {
    for (let i = a; i < tabContents.length; i++) {
        tabContents[i].classList.add('none');
    }
  }
  
  hideTabContent(1);

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabContents.forEach(content => {
        content.classList.add('none');
        content.style.opacity = '0';
      });
  
      tabs.forEach(tab => tab.classList.remove('active-btn'));

      tabContents[index].classList.remove('none');
      setTimeout(() => {
        tabContents[index].style.opacity = '1';
      }, 100);
  
      tab.classList.add('active-btn');
    });
  });