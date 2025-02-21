import type { Rule } from "sanity";

export const services = {
    name: 'services',
    title: 'Services',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required() 
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title'},
        },
        {
            name: 'image',
            title: 'Image',
            type: 'object',
            fields: [
                {
                    name: 'url',
                    title: 'Image URL',
                    type: 'url'
                },
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text'
                } 
            ],
            validation: (Rule: Rule) => Rule.required() 
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block'}],
            validation: (Rule: Rule) => Rule.required() 
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string'}],
            validation: (Rule: Rule) => Rule.required() 
        },
        {
            name: 'sub_services',
            title: 'Sub Services',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'title',
                        title: 'Title',
                        type: 'string'
                    },
                    {
                        name: 'description',
                        title: 'Description',
                        type: 'array',
                        of: [{ type: 'block'}]
                    },
                ]
            }]
        }
    ]
}