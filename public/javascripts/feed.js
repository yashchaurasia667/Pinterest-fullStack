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

function showModal(modal) {
    if (modal.hasAttribute('open'))
        modal.removeAttribute('open');
    else
        modal.setAttribute('open', '');
}

handleSearchFocus('#navbar-search', '#7fc1ff');