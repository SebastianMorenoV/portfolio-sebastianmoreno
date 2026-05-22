export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'localeText',
      description: 'A brief summary for the project list',
    },
    {
      name: 'role',
      title: 'Your Role',
      type: 'localeString',
      description: 'e.g., Lead Frontend Developer, Full-stack Engineer',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'localeString',
      description: 'e.g., 3 months, 2023-2024',
    },
    {
      name: 'content',
      title: 'Project Story / Content',
      type: 'localeBlock',
      description: 'Write the full story, challenges, and details here. This will be shown when the project is opened.',
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Project Gallery (Additional Images)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true }
        }
      ],
      description: 'Add as many images as you want to showcase the project in the modal.',
    },
    {
      name: 'tags',
      title: 'Tags (Technologies)',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to sort projects. Lower numbers appear first.',
    }
  ],
}
