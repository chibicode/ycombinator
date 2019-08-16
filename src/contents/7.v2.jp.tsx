import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import YesNoButtons from 'src/components/YesNoButtons'
// import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'
import * as R from 'src/components/Runners'
// import EmojiWithText from 'src/components/EmojiWithText'
// import EmojiForLetter from 'src/components/EmojiForLetter'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>問題の説明</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では約束通り、
                        <Em>
                          これから出す問題に答えることができたら、計算箱を返してやろう！
                        </Em>
                      </P>
                      <P>ベンケイ、問題を説明するんだ！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        わかりました。まず、
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fxde />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        前回の復習ですが、この弁当箱は、ぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={1} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rbup>
              右下には <Emoji>🅰️</Emoji> がついた
              <EmojiForLetter letter="d" />
              が「<Strong>1個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={1} />
              になる
            </R.Rbup>
            <ExpressionRunnerSeparator />
            <R.Rnug />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>それでは、ここで問題です！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <></>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                        <Em>
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          の印がたくさんありますが、
                          <Strong>それぞれ何らかの料理が入ります</Strong>
                          。(同じ料理が複数入ってもOKです)
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <CustomEmoji type="questionFoodGrey" /> には何らかの料理が入ります
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この弁当箱を、<Em>先ほどの弁当箱と合体させてみる</Em>
                        と、次のようになります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fljg />
          </>
        )
      },
      {
        title: <></>,
        content: (
          <>
            <P>
              TODO: Bento box convertible to 1. Then say if you add this box and
              run and convert you'll get 2. Then say essentially this is the
              same as math box 1 + 1. Then also do the same with 2 + 1.
            </P>
            <R.Envj>
              <CustomEmoji type="questionFoodGrey" /> には何らかの料理が入ります
            </R.Envj>
            <R.Biit></R.Biit>
            <R.Pbop>
              <CustomEmoji type="questionFoodRed" /> には何らかの料理が入ります
            </R.Pbop>
            <R.Uxbl></R.Uxbl>
          </>
        )
      },
      {
        title: <></>,
        content: <></>
      }
      // Talk about minus next
      // Then ask the question - what is the pattern for each?
      // Say: I have no clue. Do you have any hint?
      // Sure - if you use the pattern for +1 along with 1, then if you run it, you get 2
      // Same for minus.
      // Try it out by filling with random food items for +1, and fail
    ]}
  />
)
