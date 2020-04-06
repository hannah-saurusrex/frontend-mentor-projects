const projects = [
    {
        name: 'rest-countries-api',
        link: 'https://objective-rosalind-d9f84d.netlify.com/'
    },
    {
        name: 'insure-landing-page',
        link: 'https://hardcore-lichterman-b4c1d4.netlify.app/'
    },
    {
        name: 'base-apparel-splash-page',
        link: 'https://relaxed-poitras-71302d.netlify.app/'
    },
    {
        name: 'clipboard-landing-page',
        link: 'https://quirky-minsky-657eba.netlify.app/'
    },
    {
        name: 'four-card-web-app',
        link: 'https://lucid-yonath-04dab6.netlify.app/'
    },
    {
        name: 'fylo-landing-page-two-column',
        link: 'https://friendly-bell-fb7d83.netlify.app/'
    },
    {
        name: 'huddle-landing-page-single',
        link: 'https://eloquent-shannon-b75d7c.netlify.app/'
    },
    {
        name: 'huddle-landing-page',
        link: 'https://quizzical-kowalevski-aafb95.netlify.app/'
    },
    {
        name: 'ping-coming-soon',
        link: 'https://fervent-mayer-53440f.netlify.app/'
    },
    {
        name: 'pricing-component-toggle',
        link: 'https://gracious-benz-b8a1e1.netlify.app/'
    },
    {
        name: 'project-tracking-component',
        link: 'https://admiring-panini-cd2606.netlify.app/'
    }
];


const list = document.getElementById('list');

projects.forEach(({ name, link }) => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <a target="_blank" href="${link}">
            <img src="/images/${name}-desktop-preview.jpg" alt="${name}" />
            <p class="project-name">${formatProjectName(name)}</p>
        </a>

        <div class="links-container">
            <a target="_blank" href="${link}" class="pink">
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