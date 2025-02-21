import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'


export default defineConfig({
  name: 'default',
  title: import.meta.env.PUBLIC_SANITY_STUDIO_NAME,
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
