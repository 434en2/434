let activePhoto = document.querySelector('.active-photo');
let previewLists = document.querySelectorAll('.preview-list li a');

for (let previewList of previewLists) {
    
    previewList.onclick = function(evt) {
        let activeSlider = document.querySelector('.preview-list .active-item');
        evt.preventDefault();
        activePhoto.src = previewList.href
        activeSlider.classList.remove('active-item');
        previewList.classList.add('active-item');

    };
};