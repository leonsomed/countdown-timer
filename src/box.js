export const BoxFactory = (parent) => {
    const html = `
        <span class="box-title">-</span>
        <span class="box-subtitle">-</span>
    `;

    const container = document.createElement('div');

    container.setAttribute('class', 'box');
    container.insertAdjacentHTML('afterbegin', html);

    parent.appendChild(container);

    const domTitle = container.getElementsByClassName('box-title')[0];
    const domSubtitle = container.getElementsByClassName('box-subtitle')[0];

    return ({ title, subtitle }) => {
        domTitle.innerHTML = title;
        domSubtitle.innerHTML = subtitle;
    };
};
