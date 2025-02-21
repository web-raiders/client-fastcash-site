import type { Rule } from "sanity";

export const terms = {
    name: 'terms',
    title: 'Terms',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required() 
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block'}],
            validation: (Rule: Rule) => Rule.required() 
        }
    ]
}