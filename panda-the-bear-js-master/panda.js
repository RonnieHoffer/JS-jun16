document.addEventListener('DOMContentLoaded', () => {
    console.log('ok');
    
    profile_img = document.querySelector('.profile-image');
    console.log(profile_img.src);
    profile_img.src = 'https://placebear.com/400/400';
    console.log(profile_img.src);

    console.log('');

    photography_img = document.querySelector('.photography');
    // console.log(photography_img.src);
    photography_img.src = 'https://placebear.com/325/225';
    // console.log(photography_img.src);

    heading = document.querySelectorAll('.highlight');
    console.log(heading);
    heading.forEach(element => {
        console.log(element.innerHTML)
    });
});