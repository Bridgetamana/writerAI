const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const overlay = document.getElementById('overlay');
const apiSelectBtn = document.getElementById('api-select-btn');
const apiDropdown = document.getElementById('api-dropdown');
const chatInput = document.getElementById('chat');

function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

apiSelectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    apiDropdown.classList.toggle('show');
});

document.addEventListener('click', () => {
    apiDropdown.classList.remove('show');
});

const optionItems = document.querySelectorAll('.option-item');
optionItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const mode = item.getAttribute('data-mode');
        const modeName = item.querySelector('p').textContent;
        apiSelectBtn.firstChild.textContent = modeName + ' ';
        apiDropdown.classList.remove('show');
        chatInput.placeholder = `I am ready to ${modeName.toLowerCase()} your text...`;
        chatInput.focus();
    });
});

chatInput.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});
