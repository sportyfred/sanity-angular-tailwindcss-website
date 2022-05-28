export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sportyfred/sanity-angular-tailwindcss-website'
      }
    },
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
                  buildHookId: '6291f9b218aa316756379c13',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-fji7a3ik',
                  apiId: 'bc93c1f1-6829-44d9-8ee1-39111857bef9'
                },
                {
                  buildHookId: '6291f9b2307cc56390204556',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-jqxb11w7',
                  apiId: '6e577379-274b-411e-b6d8-73773cf4ee7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-jqxb11w7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
