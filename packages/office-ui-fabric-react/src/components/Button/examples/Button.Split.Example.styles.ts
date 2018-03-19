import { memoizeFunction } from 'office-ui-fabric-react/lib-es2015/Utilities';
import { IButtonStyles } from 'office-ui-fabric-react/lib-es2015/Button';
import { HighContrastSelector } from '../../../Styling';

export const getCustomSplitButtonStyles = memoizeFunction((): IButtonStyles => {
  return {
    splitButtonMenuButton: { backgroundColor: 'white', width: '10px' },
    splitButtonMenuIcon: { fontSize: '7px' },
    splitButtonDivider: { borderLeft: '1px solid #c8c8c8', right: 12 },
    splitButtonContainer: {
      selectors: {
        [HighContrastSelector]: {
          border: 'none'
        }
      }
    }
  };
});