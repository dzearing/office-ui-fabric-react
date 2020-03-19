import * as React from 'react';
import { IFloatingPeopleSuggestionsProps } from './FloatingPeopleSuggestions.types';
import { BaseFloatingSuggestions } from '../FloatingSuggestions';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { IFloatingSuggestionOnRenderItemProps } from '../FloatingSuggestionsItem/FloatingSuggestionsItem.types';
import { SuggestionItemNormal } from './FloatingPeopleSuggestionItems/SuggestionItemDefault';

export const FloatingPeopleSuggestions = (props: IFloatingPeopleSuggestionsProps): JSX.Element => {
  const renderSuggestionItem = React.useCallback(
    (suggestionItemprops: IFloatingSuggestionOnRenderItemProps<IPersonaProps>): JSX.Element => {
      return SuggestionItemNormal({ ...suggestionItemprops.item });
    },
    []
  );

  return (
    <>
      <BaseFloatingSuggestions {...props} onRenderSuggestion={renderSuggestionItem} />
    </>
  );
};
