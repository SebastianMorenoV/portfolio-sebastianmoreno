export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'workStatus',
      title: 'Work Status',
      type: 'localeString',
      description: 'e.g. "Open to work", "Working at Google", "Available for freelance"',
    },
    {
      name: 'statusColor',
      title: 'Status Color',
      type: 'string',
      description: 'Tailwind color class or hex code for the status badge (e.g. "bg-green-500")',
      initialValue: 'bg-green-500'
    },
    {
      name: 'bioStart',
      title: 'Bio Start (Text before Highlight)',
      type: 'localeString',
    },
    {
      name: 'bioHighlight',
      title: 'Bio Highlight (Highlighted Text)',
      type: 'localeString',
    },
    {
      name: 'bioEnd',
      title: 'Bio End (Text after Highlight)',
      type: 'localeString',
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Format: Include country code without +, e.g., 5211234567890',
    }
  ],
}
