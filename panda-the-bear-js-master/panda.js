document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the Panda console');
    console.log('');

    profile_img = document.querySelector('.profile-image');
        console.log('The old profile image source was' + profile_img.src);
        console.log('');        
    profile_img.src = 'https://placebear.com/400/400';
        console.log('The new profile image source is' + profile_img.src);
        console.log('');

    photography_img = document.querySelector('.photography');
        console.log('The old photography image source was ' + photography_img.src);
        console.log('');
    photography_img.src = 'https://placebear.com/325/225';
        console.log('The new photography image source is ' + photography_img.src);
        console.log('');

    highlight_list = document.querySelectorAll('.highlight');
    highlight_list.forEach(element => {
        if(element.innerHTML === 'Panda The Bear'){
            element.innerHTML = 'Ron Bear';
        };
    });

    info_title_list = document.querySelectorAll('.info-inner-container .info-title');
    info_title_list.forEach(element => {
        if(element.innerText.trim() === 'Employment') {
            element.innerText = 'Bear Experience'
        };
    });

    document.body.style.backgroundColor = "navy";

    highlight_list.forEach(element => {
        element.setAttribute('style', 'color: yellow');
    });

    h1List = document.querySelectorAll("H1");
        console.log(h1List);
    h1List.forEach(element => {
        element.setAttribute('style', 'font-family: monospace; color: yellow');
    });
    
    sidebarIconList = document.querySelectorAll('.action-icon-bg');
        console.log(sidebarIconList);
    sidebarIconList.forEach(element =>{
        element.setAttribute('style', 'background-color: red');
    });

    // const forms = document.querySelectorAll('form');
    // const form = forms[0];
    
    // Array.from(form.elements).forEach((input) => {
    //   console.log(input);
    // });



    form = document.querySelector('form');
        console.log(form);
        console.log(form.elements);
    formElements = Array.from(form.elements);
        console.log(formElements);
    formElements.forEach(function(e) {
        if (e.name === 'message') {
            e.placeholder = 'state your business'
        }
        if (e.name === 'name') {
            e.value = 'your nemesis'
        }
        if (e.name === 'email') {
            e.value = 'koalathebear@gmail.com'
        }
        if (e.name === 'submit') {
            e.value = 'En garde!'
            e.disabled = true
        }
    });

        console.log(formElements);

    // var sideBarInfo = document.querySelector('aside');
    //     console.log(sideBarInfo);
    // var matches = sideBarInfo.querySelectorAll('bio-info');
    //     console.log(matches);

});