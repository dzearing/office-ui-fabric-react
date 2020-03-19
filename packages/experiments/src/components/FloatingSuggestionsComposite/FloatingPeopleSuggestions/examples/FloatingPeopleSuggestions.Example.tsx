import * as React from 'react';
import { IFloatingSuggestionItemProps, FloatingPeopleSuggestions } from '@uifabric/experiments/lib/FloatingPeopleSuggestionsComposite';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { mru } from '@uifabric/example-data';

const _suggestions = [
  {
    key: '1',
    id: '1',
    displayText: 'Suggestion 1',
    item: mru[0],
    isSelected: true,
    showRemoveButton: true
  },
  {
    key: '2',
    id: '2',
    displayText: 'Suggestion 2',
    item: mru[1],
    isSelected: false,
    showRemoveButton: true
  },
  {
    key: '3',
    id: '3',
    displayText: 'Suggestion 3',
    item: mru[2],
    isSelected: false,
    showRemoveButton: true
  },
  {
    key: '4',
    id: '4',
    displayText: 'Suggestion 4',
    item: mru[3],
    isSelected: false,
    showRemoveButton: true
  },
  {
    key: '5',
    id: '5',
    displayText: 'Suggestion 5',
    item: mru[4],
    isSelected: false,
    showRemoveButton: true
  }
] as IFloatingSuggestionItemProps<IPersonaProps>[];

export const FloatingPeopleSuggestionsExample = (): JSX.Element => {
  React.useEffect(() => {
    setPeopleSuggestions([..._suggestions]);
  }, []);

  const [peopleSuggestions, setPeopleSuggestions] = React.useState<IFloatingSuggestionItemProps<IPersonaProps>[]>([]);

  const _onSuggestionSelected = (ev: React.MouseEvent<HTMLElement, MouseEvent>, item: IFloatingSuggestionItemProps<IPersonaProps>) => {
    _markSuggestionSelected(item);
  };

  const _onSuggestionRemoved = (
    ev: React.MouseEvent<HTMLElement, MouseEvent>,
    suggestionToRemove: IFloatingSuggestionItemProps<IPersonaProps>
  ) => {
    setPeopleSuggestions(suggestions => {
      const modifiedSuggestions = suggestions.filter(item => item.id !== suggestionToRemove.id);
      return modifiedSuggestions;
    });
  };

  const _markSuggestionSelected = (selectedSuggestion: IFloatingSuggestionItemProps<IPersonaProps>) => {
    setPeopleSuggestions(suggestions => {
      const modifiedSuggestions = suggestions.map(suggestion =>
        suggestion.id === selectedSuggestion.id ? { ...suggestion, isSelected: true } : { ...suggestion, isSelected: false }
      );
      return modifiedSuggestions;
    });
  };

  return (
    <FloatingPeopleSuggestions
      suggestions={[...peopleSuggestions]}
      isSuggestionsVisible={true}
      targetElement={null}
      onSuggestionSelected={_onSuggestionSelected}
      onRemoveSuggestion={_onSuggestionRemoved}
      suggestionsHeaderText={'People suggestions'}
      noResultsFoundText={'No suggestions'}
      onFloatingSuggestionsDismiss={undefined}
      showSuggestionRemoveButton={true}
    />
  );
};
