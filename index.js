//preiau butonul
mybutton = document.getElementById("btn-top");

//cand se da scroll >20 px se afiseaza butonul
window.onscroll = function () {
    scrollFunction()
    var currentScrolPos = window.pageYOffset;
    if (currentScrolPos > 20) {
        document.getElementsByClassName('hamburger')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('hamburger')[0].style.display = 'inline-block';
    }
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }


}

// cand se da click pe buton, se trimite in capul paginii
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;


}
/* ------------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
function thanks() {
    alert("Succes! Am instiintat magazinul. Vino sa iti ridici personal produsele. Te asteptam!");
}
/* -------------------------------------------------------------------------- */




/* ---------------------------------------------------------------------------- */
function hideBlock() {
    var x = document.querySelectorAll('.main-nav li');
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === 'none') {
            x[i].style.display = 'block'
        } else {
            x[i].style.display = 'none'
        }
    }

}
/* ------------------------------------------------------------------------------ */
function broken() {
    alert("Current form not working due to an email address that has been deleted!")
}
