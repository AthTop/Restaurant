export default (content) => {
    const div = document.createElement('div');
  
    const info = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = 'Our restaurant has been serving amazing, fresh and warm food since 2013. It was funded by the great Chef Chefocious! We are not a themed restaurant but instead strive to provide our customers with foods from all over the world!';
    info.appendChild(p);
    info.classList.add('card');
    div.appendChild(info);

    const location = document.createElement('div');
    const ploc = document.createElement('p');
    ploc.textContent = `Originally funded in Chef City, we have now expanded our network to almost the whole country! You can find us on all of the big cities!`;
    location.appendChild(ploc);
    location.classList.add('card');
    div.appendChild(location);

    content.appendChild(div);
}