import Flex from 'components/Flex'
import { css } from 'emotion'
import React from 'react'

const BorderWrapper: React.SFC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Flex
    border={2}
    className={css`
      margin: -2px;
    `}
    borderColor="darkYellow"
    flexDirection="column"
    flex={1}
  >
    {children}
  </Flex>
)

export default BorderWrapper
