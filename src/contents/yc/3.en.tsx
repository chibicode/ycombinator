import React from 'react'
import {
  Em,
  H3,
  InternalLink,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode3 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'

export default () => {
  let i = 0
  return (
    <>
      <P>
        <Strong>Quiz Review:</Strong> Let’s take a look at{' '}
        <InternalLink href={yc(2)}>the quiz from the last episode</InternalLink>
        :
      </P>
      {episode3[i++]()}
      <P>
        <Strong>Answer:</Strong> the above bento box represents:
      </P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥗</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">🥗</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">🥩</Emoji>
        </UlLi>
      </Ul>
      <P>Here’s the annotated version:</P>
      {episode3[i++]()}
      <H3>What will happen in the next step?</H3>
      <P>
        In the above scenario, after you eat salad <Emoji>🥗</Emoji>, the chef
        brings steak <Emoji>🥩</Emoji>. So in the next step,{' '}
        <Em>
          the steak <Emoji>🥩</Emoji> will be the only dish
        </Em>
        :
      </P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥩</Emoji>
        </UlLi>
      </Ul>
      <P>In terms of the {h('ycBentoBox')}, it will look like this.</P>
      {episode3[i++]()}
      <P>
        <Em>
          <Strong>Very Important:</Strong> Notice that the cells for the food
          you ate <Emoji>😋</Emoji> and food the chef prepared <Emoji>👨‍🍳</Emoji>{' '}
          <Strong>disappeared</Strong>.
        </Em>
      </P>
      <H3>The Next and Previous Buttons</H3>
      <P>
        To see this interactively, I’ve added the next and previous buttons.
      </P>
      <Ol>
        <OlLi>
          <Em>
            Try pressing {h('ycNext')} several times until you see {h('ycDone')}
            . The steak <Emoji>🥩</Emoji> will be the only dish.
          </Em>
        </OlLi>
        <OlLi>Then try pressing {h('ycPrevious')} a few times.</OlLi>
      </Ol>
      {episode3[i++]()}
      <P>Try this one from the last episode too!</P>
      {episode3[i++]()}
      <P>Hope you get the idea!</P>
      <EmojiSeparator emojis={['⏪', '🤗', '⏩']} />
      <H3>Quiz</H3>
      <P>Here’s a different one. What do you think will happen next?</P>
      {episode3[i++]()}
      <P>
        <Em>Choose the one you think will be the next state.</Em> It’s okay if
        you have no idea - I will explain on the next episode!
      </P>
      <Ol>
        <OlLi>
          <Emoji size="lg">🍣</Emoji>
        </OlLi>
        <OlLi>
          <Emoji size="lg">🥪</Emoji>
        </OlLi>
        <OlLi>
          <Emoji size="lg">🥗</Emoji>
        </OlLi>
      </Ol>
      <YcNextLessonButton nextEpisodeNumber={4} />
    </>
  )
}
