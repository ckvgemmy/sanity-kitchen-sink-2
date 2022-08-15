export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62f9d42c0d269976a6423025',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-ucu9pbcn',
                  apiId: 'a9966113-b759-477c-8401-7d02fe188a6d'
                },
                {
                  buildHookId: '62f9d42cf5c5fc7b37c3138c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-c5cb8ri4',
                  apiId: 'c2e7f940-af35-420c-8555-893b63a2aacc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ckvgemmy/sanity-kitchen-sink-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-c5cb8ri4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
