
let button=document.getElementById('darkmode')
function darkmode() {
    var darkModeButton = document.getElementById('darkmode');
    var cardElement = document.getElementById('cardd');

    if (darkModeButton.innerHTML === 'Dark Mode') {
        // Enable dark mode
        document.body.classList.add('dark-mode');
        cardElement.classList.add('dark-mode');
        document.getElementById('hbar').style.backgroundColor='white'
        document.getElementById('csbar').style.backgroundColor='white'
        document.getElementById('jbar').style.backgroundColor='white'
        document.getElementById('pybar').style.backgroundColor='white'
        document.getElementById('aboutme').style.borderColor='white';
        document.getElementById('head1').style.color='white'
        document.getElementById('introh').style.color='white'
        document.getElementById('head2').style.color='white'
        darkModeButton.innerHTML = 'Light Mode';
    } else {
        document.getElementById('hbar').style.backgroundColor='black'
        document.getElementById('introh').style.color='black'
        document.getElementById('csbar').style.backgroundColor='black'
        document.getElementById('jbar').style.backgroundColor='black'
        document.getElementById('pybar').style.backgroundColor='black'
        document.getElementById('aboutme').style.borderColor='black';
        document.getElementById('head1').style.color='black'
        document.getElementById('head2').style.color='black'
        document.getElementById('introh').style.color='black'
        document.body.classList.remove('dark-mode');
        cardElement.classList.remove('dark-mode');
        darkModeButton.innerHTML = 'Dark Mode';
    }
}
document.getElementById('darkmode').onclick=darkmode
