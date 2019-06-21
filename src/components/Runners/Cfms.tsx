import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Cfms = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            state: 'default',
            func: {
              type: 'function',
              arg: {
                type: 'variable',
                bound: false,
                emphasizePriority: false,
                argPriorityAgg: [],
                funcPriorityAgg: [1],
                name: 't',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none'
              },
              body: {
                type: 'conditional',
                checkType: 'isZero',
                condition: {
                  type: 'variable',
                  bound: true,
                  emphasizePriority: false,
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  name: 't',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  shorthandUnary: 'pred'
                },
                priority: 1,
                state: 'default',
                trueCase: {
                  name: 'shorthandNumber',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1],
                  emphasizePriority: false,
                  bound: true,
                  shorthandNumber: 1,
                  shorthandUnary: undefined
                },
                falseCase: {
                  type: 'call',
                  state: 'default',
                  priority: 2,
                  func: {
                    type: 'variable',
                    bound: true,
                    emphasizePriority: false,
                    argPriorityAgg: [],
                    funcPriorityAgg: [2],
                    name: 't',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none'
                  },
                  arg: {
                    type: 'call',
                    state: 'default',
                    priority: 3,
                    func: {
                      name: 'shorthandBinary',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [3],
                      emphasizePriority: false,
                      bound: true,
                      shorthandBinary: 'mult'
                    },
                    arg: {
                      type: 'call',
                      state: 'default',
                      priority: 4,
                      func: {
                        type: 'variable',
                        bound: true,
                        emphasizePriority: false,
                        name: 'magical',
                        argPriorityAgg: [],
                        funcPriorityAgg: [4],
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        magical: true
                      },
                      arg: {
                        type: 'variable',
                        bound: true,
                        emphasizePriority: false,
                        argPriorityAgg: [1, 2, 3, 4],
                        funcPriorityAgg: [],
                        name: 't',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        shorthandUnary: 'pred'
                      }
                    }
                  }
                }
              }
            },
            type: 'call',
            priority: 1,
            arg: {
              name: 'question',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true
            }
          },
          unaryJustExecuted: undefined
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: { name: 'witchAppearsAgainCaption' },
      hideControls: true,
      explanationsVisibility: 'hidden',
      hidePriorities: false,
      variableSize: 'md',
      containerSize: 'xxs',
      hidePlayButton: false,
      hideBottomRightBadges: false,
      skipToTheEnd: false,
      hideFuncUnboundBadgeOnExplanation: false,
      highlightOverridesCallArgAndFuncUnboundOnly: false,
      bottomRightBadgeOverrides: {},
      highlightOverrides: { magical: 'highlighted' },
      highlightOverrideActiveAfterStart: true,
      argPriorityAggHighlights: [],
      funcPriorityAggHighlights: [],
      highlightFunctions: false,
      superFastForward: false,
      highlightNumber: undefined,
      showAllShowSteps: undefined
    }}
  />
)

export default Cfms
