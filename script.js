console.log('js file was called...')

/**Texts */

let aboutMeText = "I graduated as an electronic engineer and have 3 years of experience."+
"I love to solve problems and learn new things."+ 
 "Now, I am interested in web technologies."+
 "I am looking forward to joining a team that works on"+
"creative projects as a web developer."
 


let testTextLarge = "Lorem Ipsum is simply dummy text" +
"of the printing and typesetting industry." +
"Lorem Ipsum has been the industry's standard" +
"dummy text ever since the 1500s," +
"when an unknown printer took a"+
"galley of type and scrambled it to make a type specimen book."+
" It has survived not only five centuries," +
"but also the leap into electronic typesetting,"+
" remaining essentially unchanged."+
"It was popularised in the 1960s with the release of "+
"Letraset sheets containing Lorem Ipsum passages," +
"and more recently with desktop publishing software like" +
"Aldus PageMaker including versions of Lorem Ipsum"



let testTextMedium = "Lorem Ipsum is simply dummy text" +
"of the printing and typesetting industry." +
"Lorem Ipsum has been the industry's standard" +
"dummy text ever since the 1500s," +
"when an unknown printer took a"+
"galley of type and scrambled it to make a type specimen book."+
" It has survived not only five centuries,";

let testTextSmall = "Lorem Ipsum is simply dummy text" +
"of the printing and typesetting industry.";

/**Experiences */

let experiences = [
    {
        title:'Powercoders',
        date:'09.2022',
        detail:testTextMedium,
        imgSrc:'./img/logo/powercoders-logo.svg'
    },
    {
        title:'Nadir',
        date:'11.2017',
        detail:testTextMedium,
        imgSrc:'./img/logo/nadirAyakkabi.svg'
    },
    {
        title:'Digitest',
        date:'01.2017',
        detail:testTextMedium,
        imgSrc:'./img/logo/digitestLogo.png'
    },
    {
        title:'Digitest',
        date:'01.2017',
        detail:testTextMedium,
        imgSrc:'./img/logo/digitestLogo.png'
    }

]

/** Education */
let educations=[
    {
        title: 'Msc',
        date:'01.2015',
        detail:testTextSmall,
        imgSrc:'./img/logo/ytu.svg'
    },

    {
        title: 'Bsc',
        date:'08.2008',
        detail:testTextSmall,
        imgSrc:'./img/logo/ytu.svg'
    },
    {
        title: 'Bsc',
        date:'08.2008',
        detail:testTextSmall,
        imgSrc:'./img/logo/ytu.svg'
    }
];

let skills = [
    {
        title:'Excel',
        level:'advanced'
    },
    {
        title:'VHDL',
        level:'advanced'
    },
    {
        title:'HTML',
        level:'intermediate'
    },
    {
        title:'CSS',
        level:'intermediate'
    },
    {
        title:'Javascript',
        level:'intermediate'
    },
    {
        title:'SQL',
        level:'intermediate'
    },
    {
        title:'Python',
        level:'intermediate'
    },
    {
        title:'Node.js',
        level:'intermediate'
    },
    {
        title:'Matlab',
        level:'intermediate'
    },
    {
        title:'Java',
        level:'begineer'
    },
    {
        title:'C#',
        level:'begineer'
    }
]

let hobbies = [
    {
        type:'indoor',
        title:'Watching Films',
        imgUrl:'./img/readingBook.jfif'
    },
    {
        type:'indoor',
        title:'Play games with my family',
        imgUrl:'./img/readingBook.jfif'
    },
    {
        type:'indoor',
        title:'Cooking',
        imgUrl:'./img/readingBook.jfif'
    },
    {
        type:'indoor',
        title:'Reading book',
        imgUrl:'./img/readingBook.jfif'
    },
    {
        type:'outdoor',
        title:'Going to picnik',
        imgUrl:'./img/readingBook.jfif'
    },
    {
        type:'outdoor',
        title:'Hiking',
        imgUrl:'./img/readingBook.jfif'
    },
    {
        type:'outdoor',
        title:'Playing football',
        imgUrl:'./img/readingBook.jfif'
    }
]

let experience = document.getElementById('experience');
let education = document.getElementById('education');
let skill = document.getElementById('skills');
let advancedSkillSet = document.getElementById('advanced');
let intermediateSkillSet = document.getElementById('intermediate');
let begineerSkillSet = document.getElementById('begineer');
let indoorActivity = document.getElementById('indoor');
let outdoorActivity = document.getElementById('outdoor');
let afterPressMenu = document.getElementById('afterPressMenu');

function loadHeader(){
    let header = document.getElementsByTagName("header");
    header[0].style.opacity = 1;
    header[0].style.transform = "translate3d(0, 0, 0)";

    loadExperiences(experiences,experience);
    loadExperiences(educations,education);
    loadSkills(skills);
    loadHobbies(hobbies);
}

// set p element 

let elAboutMe = document.getElementById('aboutMe');
elAboutMe.innerText = aboutMeText;

let textsLarge = document.querySelectorAll('.textLarge');
let textsMedium = document.querySelectorAll('.textMedium');
let textsSmall = document.querySelectorAll('.textSmall');

for(let i=0;i<textsLarge.length;i++){
    textsLarge[i].innerHTML=testTextLarge
}

for(let i=0;i<textsMedium.length;i++){
    textsMedium[i].innerHTML=testTextMedium
}

for(let i=0;i<textsSmall.length;i++){
    textsSmall[i].innerHTML=testTextLarge
}


function addPart(nameOfOrganization,date,detail,imgSrc){

    //add Bullet
    const part = document.createElement('div');
    part.setAttribute('class', 'parts');

    const verticalBullet = document.createElement('div');
    verticalBullet.setAttribute('class', 'verticalBullet');

    const bullet = document.createElement('div');
    bullet.setAttribute('class','bullet');

    const verticalLine = document.createElement('div');
    verticalLine.setAttribute('class', 'verticalLine');

    verticalBullet.appendChild(bullet);
    verticalBullet.appendChild(verticalLine);
    
    part.appendChild(verticalBullet);


    // add titles
    const titles = document.createElement('div');
    titles.setAttribute('class','titles');

    const datePar = document.createElement('p');
    datePar.innerText = date;

    const imgLogo = document.createElement('img');
    imgLogo.setAttribute('src',imgSrc)
    

    const namePar = document.createElement('p');
    namePar.innerText = nameOfOrganization;

    titles.appendChild(datePar);
    titles.appendChild(imgLogo);
    titles.appendChild(namePar);
    part.appendChild(titles);

    // add detail
    const details = document.createElement('div');
    details.setAttribute('class','details');

    const detailPar = document.createElement('p');
    detailPar.innerText = detail;

    details.appendChild(detailPar);
    part.appendChild(details);

    return part;

}



// Load Experience 
function loadExperiences(experiences,section){
    let part;
    for(let i=0;i<experiences.length;i++){

        part = addPart(experiences[i].title,experiences[i].date,experiences[i].detail,experiences[i].imgSrc);
        section.appendChild(part);
    }

}

// Load education


// Load Skills 
function loadSkills(skills){
    console.log('called loadSkills function..');
    for(let i=0;i<skills.length;i++){
        let addSkill = document.createElement('div');
        addSkill.setAttribute('class','addSkill');

        let skillTitle = document.createElement('p');
        skillTitle.setAttribute('class','skillTitle');

        switch (skills[i].level) {
            case 'advanced':
                skillTitle.innerText = skills[i].title;
                addSkill.appendChild(skillTitle);
                for(let j=0;j<5;j++){
                    let faSolidStar = document.createElement('i');
                    faSolidStar.setAttribute('class','fa-solid fa-star');
                    addSkill.appendChild(faSolidStar);
                }
                advancedSkillSet.appendChild(addSkill);
                break;
            
            case 'intermediate':
                skillTitle.innerText = skills[i].title;
                addSkill.appendChild(skillTitle);
                for(let j=0;j<3;j++){
                    let faSolidStar = document.createElement('i');
                    faSolidStar.setAttribute('class','fa-solid fa-star');
                    addSkill.appendChild(faSolidStar);
                }
                intermediateSkillSet.appendChild(addSkill);
                break;
        
            case 'begineer':
                skillTitle.innerText = skills[i].title;
                addSkill.appendChild(skillTitle);
                let faSolidStar = document.createElement('i');
                faSolidStar.setAttribute('class','fa-solid fa-star');
                addSkill.appendChild(faSolidStar);
                begineerSkillSet.appendChild(addSkill);
                break;
            
            default:
                break;
        }
    }
}

function loadHobbies(hobbies){
    for (let i=0;i<hobbies.length;i++){
        let addActivity = document.createElement('div');
        addActivity.setAttribute('class','addActivity');

        let titleOfActivity = document.createElement('p');
        titleOfActivity.innerText = hobbies[i].title;

        let imgOfActivity = document.createElement('img');
        imgOfActivity.setAttribute('src',hobbies[i].imgUrl);

        addActivity.appendChild(titleOfActivity);
        addActivity.appendChild(imgOfActivity);

        switch (hobbies[i].type) {
            case 'indoor':
                indoorActivity.appendChild(addActivity);
                break;
            case 'outdoor': 
                outdoorActivity.appendChild(addActivity);
                break;
            default:
                break;
        }
    }
}



window.onresize = removeMenu

function removeMenu(){
    if(window.screen.width>800){
        afterPressMenu.style.display = 'none';
    }
}

function openNavMenu(){
    if(afterPressMenu.style.display === 'none'){
        afterPressMenu.style.display = 'flex';
    }else{
        afterPressMenu.style.display = 'none';
    }
}

