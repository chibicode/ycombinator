import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Oiwu = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          expression: {
            arg: {
              arg: {
                name: 'd',
                highlightType: 'active',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'callArg',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: true,
                bound: false
              },
              body: {
                arg: {
                  name: 'b',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'callArg',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: false
                },
                body: {
                  arg: {
                    name: 'b',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    name: 'd',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
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
            func: {
              arg: {
                name: 'a',
                highlightType: 'active',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'funcArg',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [1],
                emphasizePriority: true,
                bound: false
              },
              body: {
                arg: {
                  name: 'b',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'funcUnbound',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: false
                },
                body: {
                  arg: {
                    name: 'c',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'funcUnbound',
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
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [2],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          name: 'a',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [2, 3],
                          emphasizePriority: false,
                          bound: true
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
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
              type: 'function',
              meta: { focused: true }
            },
            state: 'showFuncUnbound',
            type: 'call',
            priority: 1
          },
          previouslyChangedExpressionState: 'showFuncUnbound',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        }
      ],
      speed: 1,
      showOnlyFocused: true,
      caption: { name: 'mustChangeBothFuncUnboundAndBound' },
      hideControls: true,
      explanationsVisibility: 'hidden',
      hidePriorities: false,
      variableSize: 'md',
      containerSize: 'xs',
      hidePlayButton: false,
      hideBottomRightBadges: false,
      skipToTheEnd: false,
      hideFuncUnboundBadgeOnExplanation: false,
      highlightOverridesCallArgAndFuncUnboundOnly: false,
      bottomRightBadgeOverrides: {},
      highlightOverrides: { b: 'highlighted' },
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

export default Oiwu
