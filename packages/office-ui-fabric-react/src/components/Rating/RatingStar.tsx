import { createComponent } from '../../utilities/createComponent';
import { IRatingStarProps, IRatingStarStyles, RatingStarView } from './RatingStar.view';
import { RatingStarStyles } from './RatingStar.styles';

export const RatingStar = createComponent<IRatingStarProps, IRatingStarStyles>({
  displayName: 'RatingStar',
  view: RatingStarView,
  styles: RatingStarStyles
});
