function handleSearchFocus(selector, borderColor) {
    document.querySelector(selector).addEventListener('focus', function () {
        document.querySelector('#search-nav').style.border = `3px solid ${borderColor}`;
        document.querySelector('#search-nav button').style.visibility = 'visible';
    });

    document.querySelector(selector).addEventListener('blur', function () {
        document.querySelector('#search-nav').style.border = 'none';
        document.querySelector('#search-nav button').style.visibility = 'hidden';
    });
}

function showModal(button, modal) {
    // console.log(modal)
    if (document.querySelector(modal).hasAttribute('open'))
        document.querySelector(modal).removeAttribute('open');
    else {
        document.querySelector(modal).setAttribute('open', '');
        gsap.from(modal, {
            height: '90px',
            duration: 0.1,
        })
    }

    button.addEventListener('blur', () => {
        document.querySelector(modal).removeAttribute('open')
    })
}

function activePage() {
    let pages = document.querySelectorAll('#nav-left .pages-navbar')
    for (let i = 0; i < 3; i++) {
        if (window.location.pathname == pages[i].getAttribute('href'))
            pages[i].classList.add('active-page')
    }
}

activePage();
handleSearchFocus('#navbar-search', '#7fc1ff');