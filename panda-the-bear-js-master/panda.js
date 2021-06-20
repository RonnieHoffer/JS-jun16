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
        console.log(highlight_list);
    highlight = highlight_list[1];
        console.log(highlight);
    highlight.innerHTML = "Ron Bear";
        console.log(highlight);
        console.log('');
//     heading = document.querySelectorAll('.highlight');
//     console.log(heading);
//     heading.forEach(element => {
//         console.log(element.innerHTML)
//     });

    info_title_list = document.querySelectorAll('.info-title');
        console.log(info_title_list);
    info_title = info_title_list[1];
        console.log(info_title);
    info_title.innerHTML = "Bear Experience";
        console.log(info_title);
        console.log('');
    // icon_suitcase = document.querySelector('.icon-suitcase');
    //     console.log(icon_suitcase);
    // icon_suitcase.innerHTML = "Bear Experience";

    document.body.style.backgroundColor = "navy";
    // styleSheet = document.styleSheets[0];
    //     console.log(styleSheet);
    // backgroundColour = styleSheet.body;
    //     console.log(backgroundColour);

    highlight_list.forEach(element => {
        element.setAttribute('style', 'color: yellow');
    });

    h1List = document.querySelectorAll("H1");
        console.log(h1List);
    h1List.forEach(element => {
        element.setAttribute('style', 'font-family: monospace');
        // element.setAttribute('style', 'color: yellow');
    });
    
    sidebarIconList = document.querySelectorAll('.action-icon-bg');
        console.log(sidebarIconList);
    sidebarIconList.forEach(element =>{
        element.setAttribute('style', 'background-color: red');
    });

    document.getElementsByName('message')[0].placeholder = "state your business";
    document.getElementsByName('name')[0].value = "your nemesis";
    document.getElementsByName('email')[0].value = 'koalathebear@gmail.com';
    document.getElementsByName('submit')[0].value = 'En garde!';
    
});