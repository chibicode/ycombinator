/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'
import CardContext from 'src/components/CardContext'
import locale from 'src/lib/locale'
import { colors, fontSizes, ns, radii, spaces } from 'src/lib/theme'
export const jsxBabelFix = jsx

export interface CardProps {
  children: React.ReactNode
  footerButton?: React.ReactNode
  color: 'white' | 'orange' | 'yellow' | 'indigo' | 'green' | 'blue'
  slideNumber?: number
  slideCount?: number
}

export interface CardState {
  overrideColor?: CardProps['color']
}

const footerButtonBackgroundColor = (color: CardProps['color']) =>
  ({
    green: colors('green100'),
    white: colors('white'),
    orange: colors('deepOrange100'),
    yellow: colors('yellow100'),
    indigo: colors('indigo200'),
    blue: colors('blue100')
  }[color])

const backgroundColor = (color: CardProps['color']) =>
  ({
    green: colors('green50'),
    white: colors('white'),
    orange: colors('deepOrange50'),
    yellow: colors('yellow50'),
    indigo: colors('indigo50'),
    blue: colors('blue50')
  }[color])

const slideLabelBgColor = (color: CardProps['color']) =>
  ({
    green: colors('green800'),
    white: colors('indigo500'),
    orange: colors('deepOrange900'),
    yellow: colors('yellow50'),
    indigo: colors('indigo500'),
    blue: colors('blue800')
  }[color])

const emBackgroundColor = (color: CardProps['color']) =>
  ({
    green: colors('white'),
    white: colors('yellow100'),
    orange: colors('white'),
    yellow: colors('yellow200'),
    indigo: colors('white'),
    blue: colors('white')
  }[color])

const Card = ({
  children,
  color,
  slideNumber,
  slideCount,
  footerButton
}: CardProps) => {
  const [overrideColor, setOverrideColor] = useState<
    CardProps['color'] | undefined
  >(undefined)
  const finalColor = overrideColor || color
  const updateColor = (newColor: CardProps['color']) =>
    setOverrideColor(newColor)
  return (
    <>
      <CardContext.Provider
        value={{
          emBackgroundColor: emBackgroundColor(finalColor),
          updateColor
        }}
      >
        <div
          css={css`
            position: relative;
          `}
        >
          {slideNumber && slideCount && (
            <div
              css={css`
                position: absolute;
                bottom: -0.5rem;
                right: 1rem;
                font-size: ${fontSizes(0.75)};
                line-height: 1;
                color: ${colors('white')};
                background: ${slideLabelBgColor(finalColor)};
                padding: ${spaces(0.25)} ${spaces(0.5)};
                border-radius: 9999px;
              `}
            >
              <>
                {slideNumber === 1 && (
                  <>{locale === 'jp' ? 'スライド' : 'Slide'} </>
                )}
                <span
                  css={css`
                    font-weight: bold;
                  `}
                >
                  {slideNumber}
                </span>{' '}
                <span
                  css={css`
                    color: ${colors('white66')};
                  `}
                >
                  / {slideCount}
                </span>
              </>
            </div>
          )}
          <div
            css={css`
              border-radius: ${radii(0.5)};
              overflow: hidden;
              margin-bottom: ${slideNumber === undefined ? spaces(1.5) : 0};
            `}
          >
            <div
              css={css`
                padding-top: ${spaces(1)};
                padding-left: ${spaces(1)};
                padding-right: ${spaces(1)};
                padding-bottom: ${footerButton ? spaces(0.25) : spaces(0.5)};

                ${ns} {
                  padding-top: ${spaces(2)};
                  padding-left: ${spaces(2)};
                  padding-right: ${spaces(2)};
                  padding-bottom: ${footerButton ? spaces(0.75) : spaces(1.5)};
                }
                background: ${backgroundColor(finalColor)};
              `}
            >
              {children}
            </div>
            {footerButton && (
              <button
                type="button"
                css={css`
                  padding-top: ${spaces(1)};
                  padding-left: ${spaces(1)};
                  padding-right: ${spaces(1)};
                  padding-bottom: ${spaces(1)};
                  background: ${colors('white')};
                  border: none;
                  width: 100%;
                  outline: 0;
                  font-weight: bold;
                  cursor: pointer;

                  ${ns} {
                    padding-top: ${spaces(1)};
                    padding-left: ${spaces(2)};
                    padding-right: ${spaces(2)};
                    padding-bottom: ${spaces(1)};
                  }

                  &:hover {
                    background: ${colors('yellow100')};
                  }
                `}
              >
                {footerButton}
              </button>
            )}
          </div>{' '}
        </div>
      </CardContext.Provider>
      {slideNumber !== slideCount && (
        <div
          css={css`
            width: 1.25rem;
            height: 2rem;
            margin: 0 auto;
            background: ${colors('indigo200')};
          `}
        />
      )}
    </>
  )
}

Card.defaultProps = {
  color: 'white'
}

export default Card
