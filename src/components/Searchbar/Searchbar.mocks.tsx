import { ISearchInput } from './';

const baseStyles: ISearchInput = {
  placeholder: 'Try Reddit, Vk, Goodreads...”',
  onChange: (query: string) => {
    console.log('Search query:', query);
  },
  debounce: true,
  debounceDuration: 200,
  forceShowResults: false,
};

export const mockSearchInputProps = {
  baseStyles,
};
