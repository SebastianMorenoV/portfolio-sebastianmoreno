import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'vw0dc0l4', // El ID de tu proyecto Sanity
  dataset: 'production', // o el nombre de tu dataset
  useCdn: true, // `false` si quieres asegurar datos frescos en cada petición
  apiVersion: '2024-05-21', // usa la fecha actual o la fecha de creación del proyecto
});

// Helper para construir URLs de imágenes
const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
