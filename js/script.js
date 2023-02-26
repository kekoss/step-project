// section services
let servicesTabTitles = document.querySelectorAll('.services__tab-title')
let servicesTabContents = document.querySelectorAll('.services__tab-content')

function showTabs(){
    for (let item of servicesTabTitles){
        item.addEventListener('click', function(){
            let currentTab = item
            let tabId = currentTab.getAttribute('data-tab')
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



