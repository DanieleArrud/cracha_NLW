
const linksSocialMedia = {
    github: 'DanieleArrud',
    youtube: 'Dany Sant',
    facebook: 'maykbrito',
    instagram: 'dhans.tug',
    twitter: 'jakeLinytec'
}

function changeSocialMediaLinks(){
    // document.getElementById('userName').textContent = 'Olivia'
    // userName.textContent = 'Fabiana'

    for(let li of SocialLinks.children){
        const social = li.getAttribute('class')
        //alert(li.children[0].href);
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;

       
    }
}

changeSocialMediaLinks();

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        userGithub.textContent = data.login
        userBioGithub.textContent = data.bio;
        userGithub.href = data.html_url
        userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos();
