export default function(content) {
    const div = document.createElement('div');
    div.id = 'homepage';
    const heading = document.createElement('h1');
    heading.textContent = 'Super Amazing Restaurant';
    div.appendChild(heading);
    
    const img = document.createElement('img');
    img.setAttribute('src', './imgs/bg.jpg');
    img.setAttribute('alt', 'Background Image');
    div.appendChild(img);

    const text = document.createElement('p');
    text.textContent = 'Established in 2013, serving amazing and delicious food every day!';
    div.appendChild(text);
    content.appendChild(div);
};