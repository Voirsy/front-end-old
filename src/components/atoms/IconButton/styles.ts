import styled, { css } from 'styled-components';
import { StyledIconButtonProps } from './types';

const Button = styled.button.attrs<StyledIconButtonProps>(
  ({ theme, primaryColor, isAvatar, borderWidth, isPrimary }) => ({
    primaryColor: primaryColor || theme.colors.purple.normal,
    borderWidth: isAvatar ? 0 : borderWidth,
    isPrimary: isAvatar ? true : isPrimary,
  })
)<StyledIconButtonProps>`
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-style: solid;
  border-width: ${({ borderWidth }) => `${borderWidth}px`};
  ${({ isAdjustedToParent, buttonSize, theme }) => {
    if (isAdjustedToParent)
      return css`
        width: 100%;
        height: 100%;
      `;

    return css`
      width: ${buttonSize! * 0.75}rem;
      height: ${buttonSize! * 0.75}rem;
      @media (min-width: ${theme.breakpoints.tabletPortrait}) {
        width: ${buttonSize}rem;
        height: ${buttonSize}rem;
      }
    `;
  }}

  background-color: ${({ primaryColor, isPrimary }) => (isPrimary ? primaryColor : 'transparent')};

  border-color: ${({ primaryColor, isPrimary, theme }) =>
    isPrimary ? primaryColor : theme.colors.grayColors.dark};

  ${({ isAvatar, avatarUrl }) =>
    isAvatar &&
    avatarUrl &&
    css`
      background: url(${avatarUrl}) center no-repeat;
      background-size: cover;
    `};

  & svg {
    stroke-width: ${({ iconWidth }) => `${iconWidth}px`};
    stroke: ${({ iconColor, isPrimary, theme }) =>
      isPrimary ? iconColor || theme.colors.white : iconColor || theme.colors.grayColors.dark};
  }
`;

const Styled = { Button };

export default Styled;
