import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import { activeFuncArg } from 'src/lib/yc/steps/stepToShowFuncUnbound'
import {
  CallExpression,
  ExecutableCall,
  ExecutableStepCall,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

export function toNeedsAlphaConvert(
  x: VariableExpression,
  conflicts: VariableNames[],
  funcSide: boolean
): StepVariable<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: FunctionExpression,
  conflicts: VariableNames[],
  funcSide: boolean
): StepFunction<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: CallExpression,
  conflicts: VariableNames[],
  funcSide: boolean
): NonExecutableStepCall<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: VariableExpression | FunctionExpression,
  conflicts: VariableNames[],
  funcSide: boolean
): StepVariable<'needsAlphaConvert'> | StepFunction<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: Expression,
  conflicts: VariableNames[],
  funcSide: boolean
): StepChild<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: Expression,
  conflicts: VariableNames[],
  funcSide: boolean
): StepChild<'needsAlphaConvert'> {
  if (isVariable(x)) {
    if (funcSide && x.bound) {
      if (conflicts.includes(x.name)) {
        return {
          ...x,
          highlightType: 'highlighted',
          topBadgeType: 'conflict',
          bottomRightBadgeType: 'funcBound'
        }
      } else {
        return {
          ...x,
          highlightType: 'active',
          topBadgeType: 'none',
          bottomRightBadgeType: 'funcBound'
        }
      }
    } else if (funcSide && !x.bound) {
      if (conflicts.includes(x.name)) {
        return {
          ...x,
          highlightType: 'highlighted',
          topBadgeType: 'conflict',
          bottomRightBadgeType: 'funcUnbound'
        }
      } else {
        return {
          ...x,
          highlightType: 'active',
          topBadgeType: 'none',
          bottomRightBadgeType: 'funcUnbound'
        }
      }
    } else {
      if (conflicts.includes(x.name)) {
        return {
          ...x,
          highlightType: 'highlighted',
          topBadgeType: 'none',
          bottomRightBadgeType: 'callArg'
        }
      } else {
        return {
          ...x,
          highlightType: 'active',
          topBadgeType: 'none',
          bottomRightBadgeType: 'callArg'
        }
      }
    }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: toNeedsAlphaConvert(x.arg, conflicts, funcSide),
      body: toNeedsAlphaConvert(x.body, conflicts, funcSide)
    }
  } else {
    return {
      ...x,
      state: 'default',
      arg: toNeedsAlphaConvert(x.arg, conflicts, funcSide),
      func: toNeedsAlphaConvert(x.func, conflicts, funcSide)
    }
  }
}

const stepToNeedsAlphaConvert = (
  x: ExecutableCall,
  conflicts: VariableNames[]
): ExecutableStepCall<'needsAlphaConvert'> => ({
  ...x,
  state: 'needsAlphaConvert',
  arg: toNeedsAlphaConvert(x.arg, conflicts, false),
  func: {
    ...x.func,
    arg: activeFuncArg(x.func.arg),
    body: toNeedsAlphaConvert(x.func.body, conflicts, true)
  }
})

export default stepToNeedsAlphaConvert
