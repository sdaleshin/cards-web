import { css, keyframes } from 'styled-components'
import { Colors } from './colors'

const shimmerAnimation = keyframes`
  100% {
    transform: translateX(100%);
    }
`

export interface ISkeletonable {
    skeleton: boolean
}

export const skeletonOnDemand = css<ISkeletonable>`
    ${(p) =>
        p.skeleton
            ? css`
                  span {
                      position: relative;
                      width: max-content;
                      overflow: hidden;
                      border-radius: 4px;
                      background-color: ${Colors.Gray90} !important;
                      color: transparent !important;
                      user-select: none;
                      cursor: default;

                      &:after {
                          position: absolute;
                          top: 0;
                          right: 0;
                          bottom: 0;
                          left: 0;
                          transform: translateX(-100%);
                          background-image: linear-gradient(
                              90deg,
                              rgba(147, 129, 129, 0) 0,
                              rgba(147, 121, 121, 0.2) 20%,
                              rgba(255, 255, 255, 0.5) 60%,
                              rgba(255, 255, 255, 0)
                          );
                          animation: ${shimmerAnimation} 2s infinite;
                          content: '';
                      }
                  }
              `
            : css`
                  span:after {
                      display: none;
                  }
              `}
`
