import type { Rule } from "sanity";

export const faqs = {
    name: 'faqs',
    title: 'FAQs',
    type: 'document',

    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [{ type: 'block'}],
            validation: (Rule: Rule) => Rule.required()
        },
    ]
}