import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      containerState: 'ready',
      previouslyChangedExpressionState: 'default',
      expression: {
        arg: {
          name: 'e',
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
            name: 'f',
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
                name: 'f',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [1, 2],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: true
              },
              func: {
                name: 'e',
                highlightType: 'initialHighlighted',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [2],
                emphasizePriority: false,
                bound: true
              },
              state: 'default',
              type: 'call',
              priority: 2
            },
            func: {
              name: 'e',
              highlightType: 'initialHighlighted',
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
  caption: { name: 'secretCodeCaption', number: 2, letter: 'e' },
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
  bottomRightBadgeOverrides: { f: '🅱️', e: '🅰️' },
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
