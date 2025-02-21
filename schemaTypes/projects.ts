import type { Rule } from "sanity";

export const projects = {
    name: 'projects',
    title: 'Projects',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required() 
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name'}
        },
        {
            name: 'client',
            title: 'Client',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'budget',
            title: 'Budget',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'industry',
            title: 'Industry',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'background_image',
            title: 'Background Image',
            type: 'object',
            fields: [
                {
                    name: 'url',
                    title: 'Image URL',
                    type: 'url'
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption'
                },
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text'
                } 
            ]
        },
        {
            name: 'project_images',
            title: 'Project Images',
            type: 'array',
            of: [{ 
                type: 'object',
                fields: [
                    {
                        name: 'url',
                        title: 'Image URL',
                        type: 'url'
                    },
                    {
                        name: 'caption',
                        type: 'string',
                        title: 'Caption'
                    },
                    {
                        name: 'alt',
                        type: 'string',
                        title: 'Alt Text'
                    } 
                ]
            }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block'}]
        }
    ]
}