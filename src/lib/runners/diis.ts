import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      containerState: 'stepped',
      previouslyChangedExpressionState: 'active',
      expression: {
        arg: {
          arg: {
            name: 'c',
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'none',
            type: 'variable',
            argPriorityAgg: [1, 2],
            funcPriorityAgg: [],
            emphasizePriority: true,
            bound: true
          },
          func: {
            arg: {
              name: 'a',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [2],
              emphasizePriority: true,
              bound: false
            },
            body: {
              name: 'a',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true
            },
            type: 'function',
            meta: undefined
          },
          state: 'active',
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
      unaryJustExecuted: undefined,
      matchExists: undefined,
      activePriority: 2
    },
    {
      containerState: 'stepped',
      previouslyChangedExpressionState: 'showFuncBound',
      expression: {
        arg: {
          arg: {
            name: 'c',
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'callArg',
            type: 'variable',
            argPriorityAgg: [1, 2],
            funcPriorityAgg: [],
            emphasizePriority: true,
            bound: true
          },
          func: {
            arg: {
              name: 'a',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'funcArg',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [2],
              emphasizePriority: true,
              bound: false
            },
            body: {
              name: 'a',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'funcBound',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true
            },
            type: 'function',
            meta: undefined
          },
          state: 'showFuncBound',
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
      unaryJustExecuted: undefined,
      matchExists: undefined,
      activePriority: 2
    },
    {
      containerState: 'stepped',
      previouslyChangedExpressionState: 'betaReducePreviewBefore',
      expression: {
        arg: {
          arg: {
            name: 'c',
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'callArg',
            type: 'variable',
            argPriorityAgg: [1, 2],
            funcPriorityAgg: [],
            emphasizePriority: true,
            bound: true
          },
          func: {
            arg: {
              name: 'a',
              highlightType: 'highlighted',
              topLeftBadgeType: 'match',
              bottomRightBadgeType: 'funcArg',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [2],
              emphasizePriority: true,
              bound: false
            },
            body: {
              name: 'a',
              highlightType: 'highlighted',
              topLeftBadgeType: 'match',
              bottomRightBadgeType: 'funcBound',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true
            },
            type: 'function',
            meta: undefined
          },
          state: 'betaReducePreviewBefore',
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
      unaryJustExecuted: undefined,
      matchExists: true,
      activePriority: 2
    },
    {
      containerState: 'stepped',
      previouslyChangedExpressionState: 'betaReducePreviewAfter',
      expression: {
        arg: {
          arg: {
            name: 'c',
            highlightType: 'betaReduceCallArgHighlighted',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'callArg',
            type: 'variable',
            argPriorityAgg: [1, 2],
            funcPriorityAgg: [],
            emphasizePriority: true,
            bound: true
          },
          func: {
            arg: {
              name: 'a',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'funcArg',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [2],
              emphasizePriority: true,
              bound: false
            },
            body: {
              name: 'c',
              highlightType: 'highlighted',
              topLeftBadgeType: 'betaReduced',
              bottomRightBadgeType: 'funcBound',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandUnary: undefined
            },
            type: 'function',
            meta: undefined
          },
          state: 'betaReducePreviewAfter',
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
      unaryJustExecuted: undefined,
      matchExists: undefined,
      activePriority: 2
    },
    {
      containerState: 'stepped',
      previouslyChangedExpressionState: 'betaReducePreviewCrossed',
      expression: {
        arg: {
          arg: {
            name: 'c',
            highlightType: 'removed',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'callArg',
            type: 'variable',
            argPriorityAgg: [1, 2],
            funcPriorityAgg: [],
            emphasizePriority: true,
            bound: true
          },
          func: {
            arg: {
              name: 'a',
              highlightType: 'removed',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'funcArg',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [2],
              emphasizePriority: true,
              bound: false
            },
            body: {
              name: 'c',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'funcBound',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandUnary: undefined
            },
            type: 'function',
            meta: undefined
          },
          state: 'betaReducePreviewCrossed',
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
      unaryJustExecuted: undefined,
      matchExists: undefined,
      activePriority: 2
    },
    {
      containerState: 'done',
      previouslyChangedExpressionState: 'default',
      expression: {
        arg: {
          name: 'c',
          highlightType: 'default',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'none',
          type: 'variable',
          argPriorityAgg: [1],
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
          funcPriorityAgg: [1],
          emphasizePriority: false,
          bound: true
        },
        state: 'default',
        type: 'call',
        priority: 1
      },
      unaryJustExecuted: undefined
    }
  ],
  speed: 1,
  showOnlyFocused: false,
  caption: undefined,
  hideControls: false,
  explanationsVisibility: 'hiddenInitialPausedOnly',
  hidePriorities: false,
  variableSize: 'lg',
  containerSize: 'xxs',
  hidePlayButton: false,
  hideBottomRightBadges: false,
  skipToTheEnd: false,
  hideFuncUnboundBadgeOnExplanation: true,
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
}

export default params
