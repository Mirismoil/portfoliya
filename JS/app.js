const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ue'];
const langArr = {

    "abou": {
        "ru": "Знате, кто я? <br> Всем привет, я Шахзод Разработчик из Джизака, Узбекистан <br> Я младший веб-разработчик. <br><br>  Помимо кодирования, есть еще несколько занятий, которыми я люблю заниматься! <br><br> Играть в игры <br>Путешествоват <br>  Изучат языков <br><br>Никогда не сдавайся!.",
        "en": "Know Who I'M <br> Hello Everyone, <br> I am Shahriyor Developer from Jizzakh, Uzbekistan <br> I am Junior Web developer. <br><br> Apart from coding, some other activities that I love to do! <br><br> Playing Games <br> Travelling <br>Learn Language",
        "ue": "Всім привіт, <br> я Шахріер Розробник з Джизака, Узбекистан <br> я молодший веб-розробник. <br><br> окрім кодування, я люблю займатися деякими іншими видами діяльності! <br><br> грати в ігри <br> подорожувати <br > вивчати мову"
    },

    "sk": {
        "ru": "Языки, которые я хорошо знаю Javascript и Node js.<br>Но у меня нету опыта.<br>Всякий раз, когда это возможно, я также применяю свою страсть к разработке продуктов с Node.js и современных библиотек и фреймворков Javascript, таких как React.js.",
        "ue": "има",
        "en": "The languages I know well are Javascript and Node js.<br>But I have no experience.<br>Whenever possible, I also apply my passion to developing products with Node.js and modern Javascript libraries and frameworks, such as React.js ."
    },
    "PS": {
        "ru": "Профессиональные навыки",
        "ue": "Професійні навички",
        "en": "Profesional Skills"
    },
    "home": {
        "ru": "Главная",
        "ue": "Головна",
        "en": "Home"
    },
    "skill2": {
        "ru": "Навыки",
        "ue": "Навичка",
        "en": "Skills"
    },
    "fm": {
        "ru": "НАЙДИ МЕНЯ НА",
        "ue": "ЗНАЙДИ МЕНЕ НА",
        "en": "FIND ME ON"
    },
    "skill": {
        "ru": "Навыки",
        "ue": "Навичка",
        "en": "Skills"
    },

    "work2": {
        "ru": "Проекты",
        "ue": "Мої роботи",
        "en": "Projects"
    },
    "work": {
        "ru": "Проекты",
        "ue": "Мої роботи",
        "en": "Projects"
    },
    "ab2": {
        "ru": "О мне",
        "ue": "про мене",
        "en": "About"
    },
    "ab": {
        "ru": "О мне",
        "ue": "про мене",
        "en": "About"
    },
    "hi": {
        "ru": "Привет,",
        "ue": "Привіт",
        "en": "Hi,"
    },
    "im": {
        "ru": "я",
        "ue": "Я   ",
        "en": "I'm     "
    },
    "job": {
        "ru": "Разработчик front-end",
        "ue": "Розробник front-end",
        "en": "Front-end developper"
    },
    "rost": {
        "ru": "имя",
        "ue": "има",
        "en": "name"
    }
}



select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();

}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash)
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    // document.querySelector('title').innerHTML = langArr ['unit'][hash];
    // /document.querySelector('.lng-name').innerHTML = langArr['name'][hash];

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}
changeLanguage();


// try { 
//     if (localStorage.getItem('theme') === 'dark')
//     // $('html').addClass('dark');
//     document.querySelector('html').classList.add('dark');
// } catch (err) { }

document.querySelector('.themetoggle').addEventListener('click', (event) => {
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme', 'dark');
    }
    addDarkClassToHTML()
})

function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
            document.querySelector('.themetoggle span').textContent = 'wb_sunny'
        } else {
            document.querySelector('html').classList.remove('dark');
            document.querySelector('.themetoggle span').textContent = 'dark_mode'

        }
        // $('html').addClass('dark');

    } catch (err) { }
}

addDarkClassToHTML()

const cursor = document.querySelector('.cursors');
const cursor2 = document.querySelector('.cursors2');
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = 'left:' + e.clientX + 'px; top:' + e.clientY + 'px;';
});


// const animeItems = document.querySelectorAll('._anim-items')
// if(animeItems.length > 0){
//     function animOnScroll(params0)
// {
//     for (let index = 0 ; index < animeItems.length ; index++){
//         const animeItems = animeItems[index];
//         const animeItemsHeight = animeItems.offsetHeight;
//         const animeItemsOffset =offset (animeItems).top;
//         const animeStart = 4;
//     }
// }

// function offset (el){
//     const rect = el.get
// }



// }

const menuToggle = document.querySelector(".menutoggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = function (params) {
    navigation.classList.toggle("active");
};
const list = document.querySelectorAll(".list");
function activeLink() {
    list.forEach((item) => item.classList.remove("act"));
    this.classList.add("act");
}
list.forEach((item) => item.addEventListener("click", activeLink));
