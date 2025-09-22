function showSideBarSm(){
    const sideBarsm = document.querySelector('.sidebar-small');
    const menuButton = document.querySelector('.menu-button-small')
    sideBarsm.style.display = 'flex'
    menuButton.style.display = 'none'
}

function hideSideBarSm(){
        const sideBarsm = document.querySelector('.sidebar-small');
        const menuButton = document.querySelector('.menu-button-small')
        sideBarsm.style.display = 'none';
        menuButton.style.display = 'block'

}
