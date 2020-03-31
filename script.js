const projects = [
    {
        name: 'base-apparel-splash-page',
        link: 'https://relaxed-poitras-71302d.netlify.com/'
    },
    {
        name: 'clipboard-landing-page',
        link: 'https://quirky-minsky-657eba.netlify.com/'
    },
    {
        name: 'four-card-web-app',
        link: 'https://lucid-yonath-04dab6.netlify.com/'
    },
    {
        name: 'fylo-landing-page-two-column',
        link: 'https://friendly-bell-fb7d83.netlify.com/'
    },
    {
        name: 'huddle-landing-page-single',
        link: 'https://eloquent-shannon-b75d7c.netlify.com/'
    },
    {
        name: 'huddle-landing-page',
        link: 'https://quizzical-kowalevski-aafb95.netlify.com/'
    },
    {
        name: 'insure-landing-page',
        link: 'https://hardcore-lichterman-b4c1d4.netlify.com/'
    },
    {
        name: 'ping-coming-soon',
        link: 'https://fervent-mayer-53440f.netlify.com/'
    },
    {
        name: 'pricing-component-toggle',
        link: 'https://gracious-benz-b8a1e1.netlify.com/'
    },
    {
        name: 'project-tracking-component',
        link: 'https://admiring-panini-cd2606.netlify.com/'
    }
];

const list = document.getElementById('list');

projects.forEach(({ name, link }, i) => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <a href="${link}">
            <img src="/images/${name}-desktop-preview.jpg" alt="${name}" />
            <p>${i + 1}. ${formatProjectName(name)}</p>
        </a>

        <div class="links-container">
            <a href="${link}" class="blue">
                <i class="fas fa-eye"></i>
            </a>
        </div>
    `;

    list.appendChild(listItem);
});

function formatProjectName(name) {
    return name 
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}