function Sidebar() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.btn');

    if (sidebar.style.left === '0px') {
        sidebar.style.display = 'block';
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.display = 'block';
        sidebar.style.left = '0';
        content.style.marginLeft = '60px'; 
    }
}