// section services
let servicesTabTitles = document.querySelectorAll('.services__tab-title')
let servicesTabContents = document.querySelectorAll('.services__tab-content')

function showTabs(){
    for (let item of servicesTabTitles){
        item.addEventListener('click', function(){
            let currentTab = item
            let tabId = currentTab.dataset.tab
            let currentContent = document.querySelector(tabId)

            if(!currentTab.classList.contains('active')){
                for(let item of servicesTabTitles){
                    item.classList.remove('active')
                }
                currentTab.classList.add('active')
                
                for(let item of servicesTabContents){
                    item.classList.remove('active')
                }
                currentContent.classList.add('active')
            }
        })
    }
}
showTabs()
// section work
let workFilter = document.querySelector('.work-filter')
let workFilterItems = document.querySelectorAll('.work-filter__item')
let filterContent = document.querySelectorAll('.gallery-image')

function filterWork(){
    workFilter.addEventListener('click', function(event){
        let targetFilter = event.target.dataset.filter
        let target = event.target

       if(!target.classList.contains('active')){
        for(let item of workFilterItems){
            item.classList.remove('active')
        }
        target.classList.add('active')
       }
        
        switch(targetFilter){
            case 'all':
                getItems('gallery-image')
                break
            case 'graphic-design':
                getItems(targetFilter)
                break
            case 'web-design':
                getItems(targetFilter)
                break
            case 'landing-page':
                getItems(targetFilter)
                break
            case 'wordpress':
                getItems(targetFilter)
                break        
        }
    })
}
filterWork()

function getItems(className){
    filterContent.forEach(item => {
        if(item.classList.contains(className)){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

// slider
let sliderContent = document.querySelectorAll('.slider__content')
let sliderIndicator = document.querySelectorAll('.slider__indicator')
let prevButton = document.querySelector('.slider__button-prev')
let nextButton = document.querySelector('.slider__button-next')
let currentIcon = 0
let currentContent = 0

const nextSlide = () => {
    goToSlide((currentIcon + 1) % sliderIndicator.length);
    goToContent((currentContent + 1) % sliderContent.length)
}

const previousSlide = () => {
    goToSlide((currentIcon - 1 + sliderIndicator.length) % sliderIndicator.length);
    goToContent((currentContent - 1 + sliderContent.length) % sliderContent.length)
}

const goToSlide = (s) => {
    sliderIndicator[currentIcon].classList.remove('active');
    currentIcon = s;
    sliderIndicator[currentIcon].classList.add('active');
}

const goToContent = (s) => {
    sliderContent[currentContent].classList.remove('active')
    currentContent = s;
    sliderContent[currentContent].classList.add('active')
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', previousSlide);

// Load More

let buttonMore = document.querySelector('.work__button')
let workGallery = document.querySelector('.work__gallery')

buttonMore.onclick = () => {
   setTimeout(addImage, 1000)
}

function addImage(){
    for (counter = 1;counter <= 12; counter++) {
        workGallery.insertAdjacentHTML("beforeend", `<img src ="img/work/work-${counter}.jpg">`);
    }
    buttonMore.style.display = 'none'
}