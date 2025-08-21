// schemas/podcast.ts

export default {
    name: 'podcast',
    type: 'document',
    title: 'Podcast',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                slugify: (input: string) => input.toLowerCase().replace(/ /g, '-'),
            },
        },
        {
            name: 'episodeNumber',
            type: 'number',
            title: 'Episode Number',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'showNotes',
            type: 'array',
            title: 'Show Notes',
            of: [{ type: 'block' }],
        },
        {
            name: 'youtubeId',
            type: 'string',
            title: 'Youtube ID',
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail',
        },
        {
            name: 'audio',
            type: 'file',
            title: 'Audio',
        },
    ],
}