import { css, cx } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import AlphaConvertContext, {
  AlphaConvertContextProps
} from 'src/components/Yc/AlphaConvertContext'
import ExpressionBetaReducePreviewContext, {
  ExpressionBetaReducePreviewContextProps
} from 'src/components/Yc/ExpressionBetaReducePreviewContext'
import ExpressionFocusContext, {
  ExpressionFocusContextProps
} from 'src/components/Yc/ExpressionFocusContext'
import { ExpressionHighlighterContextProps } from 'src/components/Yc/ExpressionHighlighterContext'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import bubbleGreySvg from 'src/images/bubble-grey.url.svg'
import bubbleSvg from 'src/images/bubble.url.svg'
import crossSvg from 'src/images/cross.url.svg'
import starSvg from 'src/images/star.url.svg'
import stripeReverseSvg from 'src/images/stripe-reverse.url.svg'
import stripeSvg from 'src/images/stripe.url.svg'
import { colors, zIndices } from 'src/lib/theme'
import { allColors } from 'src/lib/theme/colors'
import { AllExpressionStates } from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

interface BorderWrapperProps {
  children: React.ReactNode
  state: AllExpressionStates
  childVariableName?: VariableNames
  childVariableHighlightType?: ExpressionHighlighterContextProps['highlightType']
  childVariableJustAlphaConverted?: boolean
  childVariableWillBeBetaReduced?: boolean
  childWasJustBetaReduced?: boolean
}

export const readyToHighlightToColor = ({
  focused,
  state
}: {
  focused?: boolean
  state: AllExpressionStates
}) => {
  if (state === 'unboundHighlighted') {
    return focused ? 'grey100' : 'indigo50'
  } else {
    return focused ? 'white' : 'indigo50'
  }
}

const stateToColor = ({
  state
}: {
  state: AllExpressionStates
}): keyof typeof allColors | undefined => {
  switch (state) {
    case 'justHighlighted':
      return 'yellow100'
    case 'boundJustHighlighted':
      return 'yellow100'
    case 'unboundJustHighlighted':
      return 'grey100'
    case 'boundHighlighted':
      return 'white'
    case 'unboundHighlighted':
      return 'grey100'
    case 'highlighted':
      return 'white'
  }
}

const background = ({
  state,
  focused,
  conflictingVariableNames,
  childVariableName,
  variableSize,
  childVariableHighlightType,
  childVariableJustAlphaConverted,
  betaReducePreview,
  childVariableWillBeBetaReduced,
  justBetaReduced
}: {
  state: BorderWrapperProps['state']
  focused?: ExpressionFocusContextProps['focused']
  conflictingVariableNames?: AlphaConvertContextProps['conflictingVariableNames']
  childVariableName?: BorderWrapperProps['childVariableName']
  variableSize: ExpressionRunnerContextProps['variableSize']
  childVariableHighlightType?: BorderWrapperProps['childVariableHighlightType']
  childVariableJustAlphaConverted?: BorderWrapperProps['childVariableJustAlphaConverted']
  betaReducePreview?: ExpressionBetaReducePreviewContextProps['betaReducePreview']
  childVariableWillBeBetaReduced?: boolean
  justBetaReduced?: boolean
}) => {
  if (betaReducePreview) {
    if (
      (betaReducePreview === 'before' &&
        (childVariableHighlightType === 'callArg' ||
          childVariableHighlightType === 'funcArg')) ||
      childVariableWillBeBetaReduced
    ) {
      if (childVariableWillBeBetaReduced) {
        return css`
          background-image: url(${starSvg});
          background-size: ${variableSize === 'lg' ? 2 : 1}rem
            ${variableSize === 'lg' ? 2 : 1}rem;
          background-position: center center;
        `
      } else if (childVariableHighlightType === 'funcArg') {
        return css`
          background-color: ${colors('yellow100')};
        `
      } else {
        return css`
          background-color: ${colors('white')};
        `
      }
    } else if (
      ((betaReducePreview === 'after' || betaReducePreview === 'crossed') &&
        (childVariableHighlightType === 'callArg' ||
          childVariableHighlightType === 'funcArg')) ||
      justBetaReduced
    ) {
      if (justBetaReduced && betaReducePreview === 'after') {
        return css`
          background-image: url(${starSvg});
          background-size: ${variableSize === 'lg' ? 2 : 1}rem
            ${variableSize === 'lg' ? 2 : 1}rem;
          background-position: center center;
        `
      } else if (justBetaReduced && betaReducePreview === 'crossed') {
        return css`
          background-color: ${colors('white')};
        `
      } else if (
        childVariableHighlightType === 'callArg' &&
        betaReducePreview === 'after'
      ) {
        return css`
          background-color: ${colors('yellow100')};
        `
      } else {
        return css`
          background-color: ${colors('white')};
        `
      }
    } else {
      return css`
        background: ${colors(
          readyToHighlightToColor({
            focused,
            state
          })
        )};
      `
    }
  } else if (childVariableJustAlphaConverted) {
    return css`
      background-image: url(${childVariableHighlightType === 'funcBodyUnbound'
        ? bubbleGreySvg
        : bubbleSvg});
      background-size: ${variableSize === 'lg' ? 2 : 1}rem
        ${variableSize === 'lg' ? 2 : 1}rem;
      background-position: center center;
    `
  } else if (
    conflictingVariableNames &&
    conflictingVariableNames.length &&
    childVariableName &&
    conflictingVariableNames.includes(childVariableName) &&
    (childVariableHighlightType === 'callArg' ||
      childVariableHighlightType === 'funcBodyUnbound')
  ) {
    return css`
      background-image: url(${childVariableHighlightType === 'callArg'
        ? stripeReverseSvg
        : stripeSvg});
      background-size: ${variableSize === 'lg' ? 2 : 1}rem
        ${variableSize === 'lg' ? 2 : 1}rem;
      background-position: center center;
    `
  } else {
    return css`
      background: ${colors(
        stateToColor({
          state
        }) ||
          readyToHighlightToColor({
            focused,
            state
          })
      )};
    `
  }
}

const Cross: React.SFC<{}> = () => (
  <div
    className={css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: ${zIndices('cross')};
      background-image: url(${crossSvg});
      background-size: 100% 100%;
    `}
  />
)

const BorderWrapper: React.SFC<BorderWrapperProps> = ({
  children,
  state,
  childVariableName,
  childVariableHighlightType,
  childVariableJustAlphaConverted,
  childVariableWillBeBetaReduced,
  childWasJustBetaReduced
}) => (
  <ExpressionBetaReducePreviewContext.Consumer>
    {({ betaReducePreview, wasJustBetaReduced }) => (
      <ExpressionBetaReducePreviewContext.Provider
        value={{
          betaReducePreview,
          wasJustBetaReduced: wasJustBetaReduced || childWasJustBetaReduced
        }}
      >
        <ExpressionRunnerContext.Consumer>
          {({ variableSize }) => (
            <ExpressionFocusContext.Consumer>
              {({ focused }) => (
                <AlphaConvertContext.Consumer>
                  {({ conflictingVariableNames }) => (
                    <Flex
                      className={cx(
                        css`
                          margin: -2px;
                          border: 2px solid ${colors('indigo300')};
                          align-items: center;
                          flex: 1;
                          position: relative;
                        `,
                        background({
                          state,
                          betaReducePreview,
                          focused,
                          conflictingVariableNames,
                          childVariableName,
                          variableSize,
                          childVariableHighlightType,
                          childVariableJustAlphaConverted,
                          childVariableWillBeBetaReduced,
                          justBetaReduced:
                            wasJustBetaReduced || childWasJustBetaReduced
                        })
                      )}
                    >
                      {betaReducePreview === 'crossed' &&
                        (childVariableHighlightType === 'callArg' ||
                          childVariableHighlightType === 'funcArg') && (
                          <Cross />
                        )}
                      {children}
                    </Flex>
                  )}
                </AlphaConvertContext.Consumer>
              )}
            </ExpressionFocusContext.Consumer>
          )}
        </ExpressionRunnerContext.Consumer>
      </ExpressionBetaReducePreviewContext.Provider>
    )}
  </ExpressionBetaReducePreviewContext.Consumer>
)

export default BorderWrapper
