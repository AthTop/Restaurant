export default (content) => {
    console.log('test');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const heading = document.createElement('h2');
    heading.textContent = 'MENU';
    menu.appendChild(heading);
    const ul = document.createElement('ul');
    for (let i = 0; i < 10; i++){
        const li = document.createElement('li');
        const menuItem = document.createElement('p');
        menuItem.textContent = `Item ${i}`;
        const price = document.createElement('p');
        price.textContent = `$${5 + i}`;
        li.append(menuItem, price);
        ul.appendChild(li);
    };
    menu.appendChild(ul);
    content.appendChild(menu);
};