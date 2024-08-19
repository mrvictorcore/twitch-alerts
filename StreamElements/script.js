//get data from the 🤟 StreamElements 🤟 data injection
const name = '{{name}}';
const amount = '{{amount}}';
const animation = 'wobble';

// vanilla es6 query selection (can use libraries and frameworks too)
const userNameContainer = document.querySelector('#username-container');
const amountContainer = document.querySelector('#amount-container');

// change the inner html to animate it 🤪
userNameContainer.innerHTML = stringToAnimatedHTML(name, animation);
amountContainer.innerHTML = stringToAnimatedHTML(amount, animation);

/**
 * return an html, with animation
 * @param s: the text
 * @param anim: the animation to use on the text
 * @returns {string}
 */
function stringToAnimatedHTML(s, anim) {
    let stringAsArray = s.split('');
    stringAsArray = stringAsArray.map((letter) => {
        return `<span class="animated-letter ${anim}">${letter}</span>`
    });
    return stringAsArray.join('');

}
