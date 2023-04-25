const specialOrderLink = document.querySelector('.special-order-link');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const sliderDots = document.querySelector('.slider-dots');
const sliderList = document.querySelector('.slider-list');
const sliderDotTemplate = document.querySelector('.slider-dots-button');
const sliderItems = document.querySelectorAll('.slider-item');

const servicesLinksList = document.querySelector('.services-info-list');
const servicesLinks = document.querySelectorAll('.services-info-title');
const servicesScreens = document.querySelectorAll('.services-info-item');

const itemsNumberInput = document.querySelector('.items-number');
const itemsNumberButtonMinus = document.querySelector('.minus-left');
const itemsNumberButtonPlus = document.querySelector('.plus-right');


if (specialOrderLink) {
  specialOrderLink.addEventListener('click', function (importantEvent) {
    importantEvent.preventDefault();
    modal.classList.add('modal-container-open');
  });
  modalCloseButton.addEventListener('click', function (importantEvent) {
    modal.classList.remove('modal-container-open');
  });
}

if (sliderList) {
  const model = [];

  const initModel = () => {
    const fragment = document.createDocumentFragment();
    sliderItems.forEach(() => {
      model.push(false)
      const dotElement = sliderDotTemplate.cloneNode(true);
      fragment.append(sliderDotTemplate);
    });
    model[0] = true;
    sliderDots.innerHTML - '';
    sliderDots.append(fragment);
    document.querySelectorAll('.dots').forEach((item) => {
      item.classList.remove('dots-active');
    });
    document.querySelector('.dots').classList.add('dots-active');
  };

  initModel();

  const setActiveElement = (index) => {
    model.forEach((item, i) => {
      model[i] = i === index ? true : false;
    });
  }

  const renderActiveScreen = () => {
    const index = model.findIndex((item) => item);
    sliderList.style.transform = `translateX(${-1160 * index}px)`;
  };

  const renderActiveDot = () => {
    document.querySelector('.dots-active').classList.remove('dots-active');
    const index = model.findIndex((item) => item);
    const sliderDotsItems = document.querySelectorAll('.slider-dots-button');
    Array.from(sliderDotsItems)[index].querySelector('button').classList.add('dots-active');
  }

  const setTabIndex = () => {
    const index = model.findIndex((item) => item);
    sliderItems.forEach((item, i) => {
      const links = item.querySelectorAll('a');
      links.forEach((link) => {
        link.tabIndex = index === i ? 0 : -1;
      });
    });
  }

  setTabIndex();

  const render = () => {
    renderActiveScreen();
    renderActiveDot();
    setTabIndex();
  }

  previous.addEventListener('click', () => {
    const index = model.findIndex((item) => item);
    const previous = index - 1 > 0 ? index - 1 : 0;
    setActiveElement(previous);
    render();
  });

  next.addEventListener('click', () => {
    const index = model.findIndex((item) => item);
    const next = index + 1 < model.length ? index + 1 : model.length - 1;
    setActiveElement(next);
    render();
  });

  sliderDots.addEventListener('click', (evt) => {
    const sliderDotsItems = document.querySelectorAll('.slider-dots-button');
    const index = Array.from(sliderDotsItems).indexOf(evt.target.closest('li'));
    setActiveElement(index);
    render();
  });
}

if (servicesLinksList) {
  servicesLinksList.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.classList.contains('services-button')) {
      const index = Array.from(servicesLinks).indexOf(evt.target.closest('li'));
      document.querySelector('.services-button-active').classList.remove('services-button-active');
      evt.target.classList.add('services-button-active');
      document.querySelector('.services-active').classList.remove('services-active');
      Array.from(servicesScreens)[index].classList.add('services-active');
    }
  });
}

if (itemsNumberInput) {
  itemsNumberButtonMinus.addEventListener('click', () => {
    if (itemsNumberInput.value > 0) {
      itemsNumberInput.value--;
    }
  });
  itemsNumberButtonPlus.addEventListener('click', () => {
    itemsNumberInput.value++;
  });
}
