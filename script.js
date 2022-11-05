// ------------  SERVICES ------------

const accordion__items = [...document.querySelectorAll('.accordion-item')];
accordion__items.forEach((item) => {
  const btn = item.querySelector('.accordion-header-img');
  const text = item.querySelector('.accordion-text-wrapper');
  let height;
  resize();

  if (!item.classList.contains('active')) {
    text.style.height = '0px';
  }

  function addOrRemoveHeight(height) {
    if (item.classList.contains('active')) {
      text.style.height = height + 'px';
    } else {
      text.style.height = '0px';
    }
  }

  function resize() {
    text.style.height = 'auto';
    height = text.scrollHeight;
    addOrRemoveHeight(height);
  }

  window.addEventListener('resize', resize);
  const btn2 = item.querySelector('.accordion-header-title');
  btn2.addEventListener('click', () => {
    item.classList.toggle('active');
    addOrRemoveHeight(height);
  })
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
    addOrRemoveHeight(height);
  });
});

// ------------- GALLARY ------------

//TODO: эта реализация работает только при одинаковом к-стве картинок...
function changeGal(folder) {
  let content = document.querySelector(".carousel-inner").innerHTML;
  if (folder == "Front-End") {
    document.querySelector(".carousel-inner").innerHTML = content.replaceAll("Desing", folder);
  } else {
    document.querySelector(".carousel-inner").innerHTML = content.replaceAll("Front-End", folder);
  }
}
