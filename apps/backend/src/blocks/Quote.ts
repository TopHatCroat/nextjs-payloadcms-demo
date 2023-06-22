import { Block } from 'payload/types';

const Quote: Block = {
  slug: 'quote',
  imageAltText: 'Quote block',
  fields: [
    {
      name: 'quote',
      type: 'textarea',
    },
    {
      name: 'author',
      type: 'text',
    },
  ]
};

export default Quote;
