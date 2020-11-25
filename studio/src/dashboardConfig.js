export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fbe069a06932fafd0d48dd0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-im5rd39q',
                  apiId: 'a77f25c1-135a-4996-9cc6-9f42e300e645'
                },
                {
                  buildHookId: '5fbe069a06932fb55dd48995',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zu7mx157',
                  apiId: 'e73a88b2-e841-412a-998d-cc1212467335'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/willowell/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zu7mx157.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
