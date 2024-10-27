export default {
    base: '/XenodeDevDocs/',

    title: 'Xenode Dev Documentation',
    themeConfig: {
        nav: [
            { text: 'GitHub',                    link: 'https://github.com/XenodeStudio' },
        ],
        sidebar: [
            { text: 'Contributing Guidelines',   link: '/contributing.md' },
            { text: 'Code of Conduct',           link: '/code_of_conduct.md' }
        ],

        footer: {
            message: 'Built with love by the Xenode Studio team.'
        }
    },

    // Metadata for Google SEO:
    head: [
        ['meta', {
            name: 'google-site-verification',
            content: 'rk5w0mlpKvSpex5z5XJ4lhOn2nVFHLZPso7G8XzMh5M'
        }]
    ]
}