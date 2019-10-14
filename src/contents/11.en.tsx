import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Hr,
  Highlight,
  Ul,
  UlLi,
  Bold,
  Italic
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import Emoji from 'src/components/Emoji'
import TwoColGrid from 'src/components/TwoColGrid'
import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import YesNoButtons from 'src/components/YesNoButtons'
import { TwoPlusFour, Conclusion } from 'src/contents/2.en'

export const TrueCaseExplanation = () => (
  <>
    <R.Dqwh>
      <InlineBorder type="condition" /> が <EmojiNumber number={0} /> なら…
    </R.Dqwh>
    <ExpressionRunnerSeparator />
    <R.Vwvb>
      <InlineBorder type="trueCase" /> に入っている{' '}
      <CustomEmoji type="blankNumberYellow" /> が残る
    </R.Vwvb>
  </>
)

export const FalseCaseExplanation = () => (
  <>
    <R.Glbk>
      <InlineBorder type="condition" /> が <EmojiNumber number={0} /> 以外なら…
    </R.Glbk>
    <ExpressionRunnerSeparator />
    <R.Rtza>
      <InlineBorder type="falseCase" /> に入っている{' '}
      <CustomEmoji type="blankNumberRed" /> が残る
    </R.Rtza>
  </>
)

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>Welcome to the advanced levels!</>,
        content: (
          <>
            <P>
              <Bold>Welcome to the advanced levels:</Bold> Previously, the
              villagers in Lambda Village got{' '}
              <H args={{ name: 'plusOneFeature' }} /> and{' '}
              <H args={{ name: 'minusOneFeature' }} /> back.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🤗</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
              description={<>Got these two features back!</>}
            />
            <P>
              They were able to <HighlightBold>reproduce</HighlightBold> each
              feature using a lunchbox.
            </P>
            <R.Rviy>
              <H args={{ name: 'plusOneFeature', capitalize: true }} /> of a
              mathbox
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Eweo>
              <HighlightBold>Reproduce</HighlightBold> using a lunchbox
            </R.Eweo>
            <Hr />
            <R.Ditw>
              <H args={{ name: 'minusOneFeature', capitalize: true }} /> of a
              mathbox
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Bgko>
              <HighlightBold>Reproduce</HighlightBold> using a lunchbox
            </R.Bgko>
          </>
        )
      },
      {
        title: (
          <>
            Review: <H args={{ name: 'repeatFeature', capitalize: true }} />
          </>
        ),
        content: (
          <>
            <P>
              However, they still haven’t gotten{' '}
              <H args={{ name: 'repeatFeature' }} /> back. They need to{' '}
              <HighlightBold>reproduce</HighlightBold> this using a lunchbox to
              get it back.
            </P>
            <TwoColGrid
              noTopNegativeMargin
              noBottomNegativeMargin
              left={
                <>
                  <R.Bwnp>
                    Repeat <CustomEmoji type="plusOne" />
                    <br />
                    <CustomEmoji type="blankNumber" /> times
                  </R.Bwnp>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    emojis={['❓', '🍱', '❓']}
                    description={
                      <>
                        Reproduce with
                        <br />a lunchbox
                      </>
                    }
                  />
                </>
              }
              right={
                <>
                  <R.Ewfr>
                    Repeat <CustomEmoji type="minusOne" />
                    <br />
                    <CustomEmoji type="blankNumber" /> times
                  </R.Ewfr>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    emojis={['❓', '🍱', '❓']}
                    description={
                      <>
                        Reproduce with
                        <br />a lunchbox
                      </>
                    }
                  />
                </>
              }
            />
            <P>
              In case you forgot about <H args={{ name: 'repeatFeature' }} />,
              let’s do a quick review!
            </P>
            <P>
              Take a look at this mathbox and <H args={{ name: 'pressPlay' }} />
              :
            </P>
            <TwoPlusFour />
          </>
        )
      },
      {
        title: (
          <>It’s necessary for additions and subtractions of large numbers</>
        ),
        content: (
          <>
            <P>
              <Bold>(This is still a review)</Bold> For the villagers in Lambda
              Village, <H args={{ name: 'repeatFeature' }} /> was necessary to
              do additions and subtractions of large numbers.
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={
                <>
                  <H args={{ name: 'repeatFeature', capitalize: true }} /> was
                  necessary
                  <br />
                  to do additions and subtractions of
                  <br />
                  large numbers.
                </>
              }
            />
            <P>
              <Bold>Example:</Bold> If you don’t use{' '}
              <H args={{ name: 'repeatFeature' }} />, and wanted to calculate{' '}
              <EmojiNumber number={10} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={10} />, you need to use{' '}
              <CustomEmoji type="plusOne" /> <Italic>ten</Italic> times.
            </P>
            <R.Amoq>
              Use <CustomEmoji type="plusOne" /> ten times
            </R.Amoq>
            <P>
              <HighlightBold>
                しかし初級その2でもやった通り、
                <CustomEmoji type="plusOne" /> の数が増えると、
                <CustomEmoji type="plusOne" />{' '}
                の数を間違えてしまう可能性があります。
              </HighlightBold>
              そうすると、正しい計算ができません。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <CustomEmoji type="plusOne" />,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  <CustomEmoji type="plusOne" /> の数を間違えやすい
                </>
              }
            />
            <P>
              一方、繰り返しの機能を使えば、
              <EmojiNumber number={10} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={10} />{' '}
              といった計算も、以下のようにシンプルになります。
              <CustomEmoji type="plusOne" /> の数を間違えることもありません。
            </P>
            <R.Jehv>
              <CustomEmoji type="plusOne" /> を <EmojiNumber number={10} />{' '}
              回繰り返す
            </R.Jehv>
            <Conclusion />
          </>
        )
      },
      {
        title: <>どうやって再現する？</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>🔁</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  計算箱の「
                  <H args={{ name: 'repeatFeature' }} />
                  」を、
                  <br />
                  弁当箱でどう「<HighlightBold>再現</HighlightBold>」する？
                </>
              }
            />
            <P>
              ラムダ村の村人たちは、計算箱の「
              <H args={{ name: 'repeatFeature' }} />
              」を <Emoji>😈</Emoji>{' '}
              悪魔から返してもらうべく、弁当箱で繰り返しの機能を再現しようと頑張っていました。しかし…
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        うーん、
                        <Highlight>
                          どんなに考えても、計算箱の「
                          <H args={{ name: 'repeatFeature' }} />
                          」を弁当箱で再現することができない…
                        </Highlight>
                      </P>
                      <P>サヤちゃん、何か思いついた？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>サヤも、さっぱり分からないなあ…</P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>サヤちゃんでも分からないなんて…もうお手上げだ！</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              すると、悩んでいる村人たちのもとに、悪魔の助手の <Emoji>🐶</Emoji>{' '}
              ミニオンがやってきました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        みなさん、なかなかお困りのようですね。よければ、
                        <HighlightBold>ヒントを出しましょうか？</HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>おお、ミニオン！お願いだ、ヒントを教えてくれ！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        分かりました、ではまず、計算箱の「
                        <H args={{ name: 'conditionFeature' }} />
                        」について教えましょう。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        「<H args={{ name: 'conditionFeature' }} />
                        」だって？何だそりゃ？
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>条件分岐の機能</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>まず、こちらの計算箱をご覧ください。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<H args={{ name: 'conditionFeature' }} />
              」がある計算箱
            </R.Rhoa>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なんだこれは？</P>
                      <Ul>
                        <UlLi>
                          それぞれ <CustomEmoji type="blankNumberRed" />{' '}
                          <CustomEmoji type="blankNumberYellow" />{' '}
                          <CustomEmoji type="blankNumberGreen" /> が入っていて、
                        </UlLi>
                        <UlLi>
                          左側に <InlineBorder type="falseCase" />{' '}
                          <InlineBorder type="trueCase" />{' '}
                          <InlineBorder type="condition" />{' '}
                          という3種類の印がある。
                        </UlLi>
                      </Ul>
                      <P>
                        なんだか、信号機 <Emoji>🚦</Emoji> みたいだ…
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        まず、
                        <HighlightBold>
                          それぞれの <CustomEmoji type="blankNumberRed" />{' '}
                          <CustomEmoji type="blankNumberYellow" />{' '}
                          <CustomEmoji type="blankNumberGreen" />{' '}
                          には数字を入れることができます。
                        </HighlightBold>
                        同じ数字を入れても構いませんし、違う数字を入れても構いません。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumberRed" />,
                <CustomEmoji type="blankNumberYellow" />,
                <CustomEmoji type="blankNumberGreen" />
              ]}
              description={
                <>
                  それぞれには数字が入る。
                  <br />
                  同じ数字を入れても、
                  <br />
                  違う数字を入れてもOK
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        次に、
                        <InlineBorder type="falseCase" />{' '}
                        <InlineBorder type="trueCase" />{' '}
                        <InlineBorder type="condition" />{' '}
                        がどういう意味かは、具体例で説明したほうが分かりやすいと思います。
                      </P>
                      <P>
                        というわけで、
                        <HighlightBold>
                          <CustomEmoji type="blankNumberRed" />{' '}
                          <CustomEmoji type="blankNumberYellow" />{' '}
                          <CustomEmoji type="blankNumberGreen" />{' '}
                          に何か適当な数字を入れてみてください！
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        分かった。とりあえず、{' '}
                        <HighlightBold>
                          上から順に <EmojiNumber number={2} />{' '}
                          <EmojiNumber number={1} /> <EmojiNumber number={0} />{' '}
                          を入れてみたよ。
                        </HighlightBold>
                      </P>
                      <P>
                        これで、
                        <H args={{ name: 'play' }} />
                        を押すとどうなるのかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Iatt>
              <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
              <EmojiNumber number={0} /> を入れてみた
            </R.Iatt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={1} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>では、どうしてこうなったか説明しますね！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            下の部分が <EmojiNumber number={0} /> かどうか
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        「<H args={{ name: 'conditionFeature' }} />
                        」はまず、
                        <HighlightBold>
                          <H
                            args={{
                              name: 'conditionSectionName',
                              type: 'condition'
                            }}
                          />{' '}
                          に入っている数字が <EmojiNumber number={0} /> かどうか
                        </HighlightBold>
                        チェックします。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vozu />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <H
                          args={{
                            name: 'conditionSectionName',
                            type: 'condition'
                          }}
                        />{' '}
                        に入っている数字は <EmojiNumber number={0} /> だね。
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>そうですね。</P>
                      <Ul>
                        <UlLi>
                          このように
                          <H
                            args={{
                              name: 'conditionSectionName',
                              type: 'condition'
                            }}
                          />{' '}
                          に入っている数字が <EmojiNumber number={0} />{' '}
                          である場合、
                        </UlLi>
                        <UlLi>
                          <HighlightBold>
                            <H
                              args={{
                                name: 'conditionSectionName',
                                type: 'trueCase'
                              }}
                            />{' '}
                            に入っている数字が最終的に残るのです。
                          </HighlightBold>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rjfy />
            <ExpressionRunnerSeparator />
            <R.Rnug>
              <InlineBorder type="trueCase" /> に入っていた{' '}
              <EmojiNumber number={1} /> が残る
            </R.Rnug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        なるほど、だから <EmojiNumber number={1} /> が残るのか！
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、もうひとつ例を紹介します。こちらは、
                        <H args={{ name: 'yesNoQuiz' }} />{' '}
                        にしてみましょう。こちらの計算箱をご覧ください。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Plbv />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>質問:</Bold> これを
                        <H args={{ name: 'play' }} />{' '}
                        すると、最終的に以下のようになるでしょうか？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kizi />
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: false,
                            sentence: true
                          }}
                        />
                        残るのは <EmojiNumber number={4} /> ではなく、
                        <EmojiNumber number={5} /> になります。
                        <H args={{ name: 'pressPlay' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kmyl />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>どうしてこうなったか説明しましょう。</P>
                      <P>
                        こちらも、
                        <H
                          args={{
                            name: 'conditionSectionName',
                            type: 'condition'
                          }}
                        />{' '}
                        の数字が <EmojiNumber number={0} />{' '}
                        かどうかチェックします。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qcmh />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        今回は
                        <H
                          args={{
                            name: 'conditionSectionName',
                            type: 'condition'
                          }}
                        />{' '}
                        に入っているのが <EmojiNumber number={0} /> ではなく、
                        <EmojiNumber number={3} /> ですね。
                      </P>
                      <P>
                        この場合は、
                        <HighlightBold>
                          <H
                            args={{
                              name: 'conditionSectionName',
                              type: 'falseCase'
                            }}
                          />{' '}
                          に入っている数字が最終的に残ります。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Guhy />
            <ExpressionRunnerSeparator />
            <R.Seie>
              <InlineBorder type="falseCase" /> に入っていた{' '}
              <EmojiNumber number={5} /> が残る
            </R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど…
                        <InlineBorder type="falseCase" /> は、「
                        <HighlightBold>
                          ゼロ以外の数字の場合はこちら
                        </HighlightBold>
                        」という意味なんだね。
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              まとめると、この「
              <H args={{ name: 'conditionFeature' }} />
              」の法則は以下の通りです。
            </P>
            <R.Rhoa>
              「<H args={{ name: 'conditionFeature' }} />
              」がある計算箱
            </R.Rhoa>
            <P>
              <Highlight>
                まず、
                <H
                  args={{ name: 'conditionSectionName', type: 'condition' }}
                />{' '}
                の中にある <CustomEmoji type="blankNumberGreen" /> が{' '}
                <EmojiNumber number={0} /> かどうかチェックします。
              </Highlight>
            </P>
            <P>
              <Highlight>
                もし <EmojiNumber number={0} /> なら、{' '}
                <H args={{ name: 'conditionSectionName', type: 'trueCase' }} />{' '}
                の中にある <CustomEmoji type="blankNumberYellow" /> が残ります。
              </Highlight>
            </P>
            <TrueCaseExplanation />
            <P>
              <Highlight>
                もし <EmojiNumber number={0} /> でなければ、
                <H
                  args={{ name: 'conditionSectionName', type: 'falseCase' }}
                />{' '}
                の中にある <CustomEmoji type="blankNumberRed" /> が残ります。
              </Highlight>
            </P>
            <FalseCaseExplanation />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、「
                        <Highlight>
                          <EmojiNumber number={0} /> かどうか？
                        </Highlight>
                        」という「
                        <HighlightBold>条件</HighlightBold>」によって 「
                        <HighlightBold>分岐</HighlightBold>
                        」するから、「
                        <H args={{ name: 'conditionFeature' }} />
                        」なのか。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🔢</Emoji>,
                <CustomEmoji type="singleArrowReverse" />,
                <CustomEmoji type="condition" />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={0} />
              ]}
              description={
                <>
                  「
                  <Highlight>
                    <EmojiNumber number={0} /> かどうか？
                  </Highlight>
                  」という
                  <br />「<HighlightBold>条件</HighlightBold>」によって 「
                  <HighlightBold>分岐</HighlightBold>」するから 「
                  <H args={{ name: 'conditionFeature' }} />」
                </>
              }
            />
          </>
        )
      },
      {
        title: <>繰り返しの機能と関連がある</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この「
                        <H args={{ name: 'conditionFeature' }} />
                        」は、
                        <HighlightBold>
                          実は計算箱にもともと備わっていた隠れ機能
                        </HighlightBold>
                        なんです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="condition" />,
                <Emoji>✨</Emoji>
              ]}
              description={<>計算箱に備わっていた隠れ機能</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        へー、そんなこと、ラムダ村の俺らは誰も知らなかったぞ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうなんです。「
                        <H args={{ name: 'conditionFeature' }} />
                        」は
                        <Highlight>
                          あまり役に立たないので、いつしか忘れ去られてしまった
                        </Highlight>
                        のです。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに、「
                        <Highlight>
                          <EmojiNumber number={0} /> かどうか？
                        </Highlight>
                        」をチェックできても、何の役にも立たなさそうだけど…
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        しかし、この「
                        <H args={{ name: 'conditionFeature' }} />
                        」は、
                        <Highlight>
                          実は「
                          <H args={{ name: 'repeatFeature' }} />
                          」と関連がある
                        </Highlight>
                        のです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  「<H args={{ name: 'conditionFeature' }} />
                  」は、
                  <br />「<H args={{ name: 'repeatFeature' }} />
                  」と関連がある
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>え、そうなの？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        はい。ここが重要なのですが…村人のみなさんは「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現できずに苦戦していましたよね。
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>うん、どうしていいか全然分からない…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        実は、まず「
                        <H args={{ name: 'conditionFeature' }} />
                        」を弁当箱で再現することができれば、「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現できてしまうんです！
                      </P>
                      <P>その理由は、また後に説明しますが…</P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  「<H args={{ name: 'conditionFeature' }} />
                  」を
                  <br />
                  弁当箱で再現できれば…
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>🔁</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  「<H args={{ name: 'repeatFeature' }} />
                  」も
                  <br />
                  弁当箱で再現できる！
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なんと！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        だからまずは、「
                        <H args={{ name: 'conditionFeature' }} />
                        」を弁当箱で再現してみてください！
                      </P>
                      <P>
                        これが解ければ、「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現するのに一歩近づきますよ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<H args={{ name: 'conditionFeature' }} />
              」を…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <HighlightBold>弁当箱で再現できたら…</HighlightBold>
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              「<H args={{ name: 'repeatFeature' }} />
              」を
              <br />
              再現するのに一歩近づく！
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>そうか。よーし、やってみよう！</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              というわけで、次のページでは、「
              <H args={{ name: 'conditionFeature' }} />
              」を弁当箱で再現してみます。次に進みましょう！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
