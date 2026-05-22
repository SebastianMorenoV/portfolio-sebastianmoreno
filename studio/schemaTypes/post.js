export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title / Headline',
      type: 'localeString',
    },
    {
      name: 'content',
      title: 'Post Content',
      type: 'localeText',
      description: 'The content of your post',
    },
    {
      name: 'date',
      title: 'Date Published',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'link',
      title: 'Original Post Link',
      type: 'url',
      description: 'Link to the original LinkedIn/Twitter post',
    },
    {
      name: 'image',
      title: 'Attached Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'Twitter / X', value: 'twitter'},
          {title: 'Blog', value: 'blog'},
        ],
        layout: 'radio'
      },
      initialValue: 'linkedin'
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'platform',
      media: 'image',
    },
  },
}
