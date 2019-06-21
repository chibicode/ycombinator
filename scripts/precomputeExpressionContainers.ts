import util from 'util'
import glob from 'glob'
import fs from 'fs-extra'
import { ExpressionRunnerShorthandConfig } from 'scripts/lib/expressionRunnerShorthandConfig'
import buildExpressionContainers from 'scripts/lib/buildExpressionContainers'
import buildExpressionRunnerConfigFromShorthand from 'scripts/lib/buildExpressionRunnerConfigFromShorthand'
import prettierFormat from 'scripts/lib/prettierFormat'

const regenerate = () => {
  glob(
    './scripts/lib/runnerConfigs/*.ts',
    (_: any, files: readonly string[]) => {
      files.forEach(file => {
        const key = file
          .replace('./scripts/lib/runnerConfigs/', '')
          .replace('.ts', '')
        import(file.replace('./', '')).then(
          (configBase: ExpressionRunnerShorthandConfig) => {
            const config = buildExpressionRunnerConfigFromShorthand(configBase)
            const componentName = `${key[0].toUpperCase()}${key.slice(1)}`
            const expressionContainers = buildExpressionContainers(config)
            const {
              speed,
              showOnlyFocused,
              caption,
              hideControls,
              explanationsVisibility,
              hidePriorities,
              variableSize,
              containerSize,
              hidePlayButton,
              showAllShowSteps,
              hideBottomRightBadges,
              skipToTheEnd,
              hideFuncUnboundBadgeOnExplanation,
              highlightOverridesCallArgAndFuncUnboundOnly,
              bottomRightBadgeOverrides,
              highlightOverrides,
              highlightOverrideActiveAfterStart,
              argPriorityAggHighlights,
              funcPriorityAggHighlights,
              highlightFunctions,
              superFastForward,
              highlightNumber
            } = config

            const fileContents = prettierFormat(`
    import React from 'react'
    import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

    const ${componentName} = () => <ExpressionRunnerPrecomputed {...${util.inspect(
              {
                expressionContainers,
                speed,
                showOnlyFocused,
                caption,
                hideControls,
                explanationsVisibility,
                hidePriorities,
                variableSize,
                containerSize,
                hidePlayButton,
                hideBottomRightBadges,
                skipToTheEnd,
                hideFuncUnboundBadgeOnExplanation,
                highlightOverridesCallArgAndFuncUnboundOnly,
                bottomRightBadgeOverrides,
                highlightOverrides,
                highlightOverrideActiveAfterStart,
                argPriorityAggHighlights,
                funcPriorityAggHighlights,
                highlightFunctions,
                superFastForward,
                highlightNumber,
                showAllShowSteps
              },
              {
                depth: null,
                maxArrayLength: null
              }
            )}} />

    export default ${componentName}
    `)

            fs.writeFileSync(
              `src/components/Runners/${componentName}.tsx`,
              fileContents
            )

            console.log(`Generated ${componentName}`)
          }
        )
      })

      const indexContents = prettierFormat(`
${files
  .map(file => {
    const key = file
      .replace('./scripts/lib/runnerConfigs/', '')
      .replace('.ts', '')
    const componentName = `${key[0].toUpperCase()}${key.slice(1)}`
    return `export { default as ${componentName} } from 'src/components/Runners/${componentName}'`
  })
  .join('\n')}
`)

      fs.writeFileSync('src/components/Runners/index.ts', indexContents)
    }
  )
}

regenerate()