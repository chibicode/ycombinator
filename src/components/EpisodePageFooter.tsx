/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ExternalLink } from 'src/components/ContentTags'
import H from 'src/components/H'
import { spaces, colors, fontSizes } from 'src/lib/theme'
import locale from 'src/lib/locale'
import { githubRepo } from 'src/lib/meta'

const linkClasses = css`
  text-decoration: none;
  font-size: ${fontSizes(0.75)};
  color: ${colors('grey500')};

  &:hover,
  &:active {
    background: none;
    color: ${colors('grey600')};
  }
`

const EpisodePageFooter = () => {
  return (
    <div
      css={css`
        margin: ${spaces(2)} 0 0;
        background: ${colors('grey150')};
        text-align: center;
        padding: ${spaces(1)} 0;
        color: ${colors('grey500')};
      `}
    >
      <ExternalLink
        href={`${githubRepo}/tree/master/docs/privacy-policy${
          locale === 'jp' ? '-jp' : ''
        }.md`}
        css={linkClasses}
      >
        <H args={{ name: 'privacyPolicy' }} />
      </ExternalLink>{' '}
      &middot;{' '}
      <ExternalLink
        href={`${githubRepo}/tree/master/README${
          locale === 'jp' ? '-jp' : ''
        }.md`}
        css={linkClasses}
      >
        <H args={{ name: 'aboutThisSite' }} />
      </ExternalLink>
    </div>
  )
}

export default EpisodePageFooter
