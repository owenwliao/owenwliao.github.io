const headerSection = document.querySelector('.header-section');
const titleSection = document.querySelector('.title-section');
const skillsTitleContainer = document.querySelector('.skills-title-container');

function updatePhotoPosition() {
    const headerSectionHeight = headerSection.offsetHeight;
    const titleSectionHeight = titleSection.offsetHeight;
    const skillsTitleContainerHeight = skillsTitleContainer.offsetHeight;
    const totalHeight = headerSectionHeight + titleSectionHeight + skillsTitleContainerHeight + 48; // +48px for the padding

    document.documentElement.style.setProperty('--photo-top', `${totalHeight}px`)
}

updatePhotoPosition();

window.addEventListener('resize', updatePhotoPosition);