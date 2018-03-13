import {
  createComponent
} from '../../utilities/createComponent';
import { IRatingProps, RatingState as state } from './Rating.state';
import { IRatingViewProps, IRatingStyles, RatingView as view } from './Rating.view';
import { getStyles as styles } from './Rating.styles';
import { RatingStar } from './RatingStar';

export const Rating = createComponent<IRatingProps, IRatingStyles, IRatingViewProps>({
  displayName: 'Rating',
  state,
  styles,
  view,
  defaultProps: {
    ratingStarAs: RatingStar
  }
});
