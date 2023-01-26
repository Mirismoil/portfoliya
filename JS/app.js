const select = document.querySelector('select');
const allLang = ['en', 'ru', 'uz'];
const langArr = {

    "abou": {
        "ru": "Привет <br> Я Мирисмаил Разработчик из Ташкента, Узбекистан <br> Я Жуноир веб-разработчик. <br><br>  Я люблю свою профессию <br> Каждый день я работаю 6-8 часов <br><br>Я интересуюсь: <br>Играть Пубг <br> Путешествовать<br>Изучить языки <br>",
        "en": "Hello <br> I am Mirismoil Developer from Toshkent, Uzbekistan <br> I am Junior Web developer. <br><br> Apart from coding, some other activities that I love to do! <br><br> My hobbies: <br> play game PUBG <br> traveling <br> leoring langueage",
        "uz": "Salom! <br> Men Yuldashev Mirismoil O'zbekiston respublikasi <br> Toshkent shahrida yashiman <br> Man Junior-programistman. <br><br>Ko'p insonlar o'ylaydi It-soxa qiyind dep lekin unday emas menga o'zimning ishim yoqadi va men ishimga kuniga 6-8 soat sarflayman<br><br> Qiziqishlarim: <br> PUBG o'yinini oynash <br> sayohat qilish <br > til organish"
    },

    "sk": {
        "ru": "Я написал в низу что я знаю об программирование<br>Я очень хочу поднять моё уревен <br> я хочу изучить другие из этого",
        "uz": "Men paski jadvalda It-sohasi bo'yicha bilgan narsalarim.<br> Bu narsalarni sizga jadval asosida qildim. <br>Siz bularni ko'rib nima bilishimni bilsangiz bo'ladi.",
        "en": "I'll show you what I know in the table below<br>i want to improve my knowledge and i want to have a solid knowledge of the below table and learn more"
    },
    "PS": {
        "ru": "Профессиональные навыки",
        "uz": "Programistlik bo'yicha bilimlarim",
        "en": "Profesional Skills"
    },
    "home": {
        "ru": "Главная",
        "uz": "Bosh sahifa",
        "en": "Home"
    },
    "skill2": {
        "ru": "Навыки",
        "uz": "Bilimlarim",
        "en": "Skills"
    },
    "fm": {
        "ru": "НАЙДИ МЕНЯ НА",
        "uz": "Meni topish uchun",
        "en": "FIND ME ON"
    },
    "skill": {
        "ru": "Навыки",
        "uz": "Bilimlarim",
        "en": "Skills"
    },

    "work2": {
        "ru": "Проекты",
        "uz": "Qilgan ishlarim",
        "en": "Projects"
    },
    "work": {
        "ru": "Проекты",
        "uz": "Qilgan ishlarim",
        "en": "Projects"
    },
    "ab2": {
        "ru": "Обо мне",
        "uz": "Men haqimda",
        "en": "About"
    },
    "ab": {
        "ru": "Обо мне",
        "uz": "Men haqimda",
        "en": "About"
    },
    "hi": {
        "ru": "Привет,",
        "uz": "Salom",
        "en": "Hi,"
    },
    "im": {
        "ru": "Я",
        "uz": "Men",
        "en": "I'm     "
    },
    "job": {
        "ru": "Разработчик front-end",
        "uz": "Front-end programist",
        "en": "Front-end developper"
    },
    "rost": {
        "ru": "имя",
        "uz": "ismim",
        "en": "name"
    },
    "free": {
        "ru": "Для справки",
        "uz": "Murojat uchun",
        "en": "for reference"
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
