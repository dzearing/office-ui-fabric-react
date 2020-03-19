import { IBaseFloatingSuggestionsProps } from '../FloatingSuggestions.types';
import { Omit } from '@uifabric/utilities';
import { IPersonaProps } from '@fluentui/react/lib/Persona';

export type IFloatingPeopleSuggestionsProps = Omit<IBaseFloatingSuggestionsProps<IPersonaProps>, 'onRenderSuggestion'>;
