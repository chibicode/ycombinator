import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Rceu = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'done',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              name: 'b',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: false
            },
            body: {
              arg: {
                name: 'c',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: false
              },
              body: {
                arg: {
                  arg: {
                    name: 'c',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 2],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    name: 'b',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [2],
                    emphasizePriority: false,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  state: 'default',
                  type: 'call',
                  priority: 2
                },
                func: {
                  name: 'b',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1],
                  emphasizePriority: false,
                  bound: true
                },
                state: 'default',
                type: 'call',
                priority: 1
              },
              type: 'function',
              meta: undefined
            },
            type: 'function',
            meta: undefined
          },
          unaryJustExecuted: undefined
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: { name: 'secretCodeCaption', number: 2, letter: 'b' },
      hideControls: true,
      explanationsVisibility: 'hidden',
      hidePriorities: false,
      variableSize: 'lg',
      containerSize: 'xxs',
      hidePlayButton: false,
      hideBottomRightBadges: false,
      skipToTheEnd: false,
      hideFuncUnboundBadgeOnExplanation: false,
      highlightOverridesCallArgAndFuncUnboundOnly: false,
      bottomRightBadgeOverrides: {},
      highlightOverrides: {},
      highlightOverrideActiveAfterStart: false,
      argPriorityAggHighlights: [],
      funcPriorityAggHighlights: [],
      highlightFunctions: false,
      superFastForward: false,
      highlightNumber: undefined,
      showAllShowSteps: undefined
    }}
  />
)

export default Rceu
