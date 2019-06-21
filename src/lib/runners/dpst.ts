import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      containerState: 'stepped',
      previouslyChangedExpressionState: 'showFuncUnbound',
      expression: {
        arg: {
          name: 'v',
          highlightType: 'default',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'none',
          type: 'variable',
          argPriorityAgg: [2],
          funcPriorityAgg: [],
          emphasizePriority: false,
          bound: true
        },
        func: {
          arg: {
            name: 'c',
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'callArg',
            type: 'variable',
            argPriorityAgg: [1],
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
              funcPriorityAgg: [1, 2],
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
            type: 'function',
            meta: undefined
          },
          state: 'showFuncUnbound',
          type: 'call',
          priority: 1
        },
        state: 'default',
        type: 'call',
        priority: 2
      },
      unaryJustExecuted: undefined,
      matchExists: undefined,
      activePriority: 1
    }
  ],
  speed: 1,
  showOnlyFocused: false,
  caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: false },
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
}

export default params
