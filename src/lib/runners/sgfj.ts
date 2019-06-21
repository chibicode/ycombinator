import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      expression: {
        arg: {
          name: 'e',
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
            name: 'c',
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
            name: 'd',
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
        priority: 1
      },
      previouslyChangedExpressionState: 'showFuncBound',
      matchExists: undefined,
      activePriority: 1,
      unaryJustExecuted: undefined,
      containerState: 'stepped'
    },
    {
      expression: {
        arg: {
          name: 'e',
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
            name: 'c',
            highlightType: 'highlighted',
            topLeftBadgeType: 'unmatch',
            bottomRightBadgeType: 'funcArg',
            type: 'variable',
            argPriorityAgg: [],
            funcPriorityAgg: [1],
            emphasizePriority: true,
            bound: false
          },
          body: {
            name: 'd',
            highlightType: 'highlighted',
            topLeftBadgeType: 'unmatch',
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
        priority: 1
      },
      previouslyChangedExpressionState: 'betaReducePreviewBefore',
      matchExists: false,
      activePriority: 1,
      unaryJustExecuted: undefined,
      containerState: 'stepped'
    }
  ],
  speed: 1,
  showOnlyFocused: false,
  caption: undefined,
  hideControls: false,
  explanationsVisibility: 'hiddenInitialPausedOnly',
  hidePriorities: true,
  variableSize: 'lg',
  containerSize: 'xxs',
  hidePlayButton: true,
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
