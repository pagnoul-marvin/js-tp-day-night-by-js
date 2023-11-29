const settings = {
    jsEnabledClass: 'js-enabled',
    bodyNightModClass: 'body--night-mode',
    tumblerSelector: '.tumbler',
    tumblerNightModCLass: 'tumbler--night-mode',
    postSelector: '.post',
    postNightModClass: 'post--night-mode',
};

document.documentElement.classList.add(settings.jsEnabledClass);
const buttonNightMod = document.querySelector('.tumbler__wrapper');
buttonNightMod.addEventListener('click', () => {
    document.body.classList.toggle(settings.bodyNightModClass);
    document.querySelector(settings.tumblerSelector).classList.toggle(settings.tumblerNightModCLass);
    for (const post of document.querySelectorAll(settings.postSelector)) {
        post.classList.toggle(settings.postNightModClass);
    }
})