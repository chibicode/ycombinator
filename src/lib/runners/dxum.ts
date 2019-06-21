import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      containerState: 'ready',
      previouslyChangedExpressionState: 'default',
      expression: {
        type: 'call',
        state: 'default',
        priority: 1,
        func: {
          name: 'shorthandNumber',
          highlightType: 'default',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'none',
          type: 'variable',
          argPriorityAgg: [],
          funcPriorityAgg: [1],
          emphasizePriority: false,
          bound: true,
          shorthandNumber: 3,
          shorthandUnary: undefined
        },
        arg: {
          type: 'call',
          state: 'default',
          priority: 2,
          func: {
            name: 'shorthandBinary',
            highlightType: 'default',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'none',
            type: 'variable',
            argPriorityAgg: [],
            funcPriorityAgg: [2],
            emphasizePriority: false,
            bound: true,
            shorthandBinary: 'mult'
          },
          arg: {
            type: 'call',
            state: 'default',
            priority: 3,
            func: {
              type: 'variable',
              bound: true,
              emphasizePriority: false,
              name: 'magical',
              argPriorityAgg: [],
              funcPriorityAgg: [3],
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              magical: true
            },
            arg: {
              name: 'shorthandNumber',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [1, 2, 3],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 2,
              shorthandUnary: undefined
            }
          }
        }
      },
      unaryJustExecuted: undefined
    }
  ],
  speed: 1,
  showOnlyFocused: false,
  caption: undefined,
  hideControls: true,
  explanationsVisibility: 'hidden',
  hidePriorities: false,
  variableSize: 'sm',
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
