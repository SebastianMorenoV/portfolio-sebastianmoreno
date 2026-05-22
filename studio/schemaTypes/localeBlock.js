export default {
  name: 'localeBlock',
  title: 'Localized Portable Text',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'es',
      title: 'Español',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}
