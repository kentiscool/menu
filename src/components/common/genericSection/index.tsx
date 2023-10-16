import React from 'react'
import { Section } from '@radix-ui/themes'

import styles from './GenericSection.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
  separated?: boolean
  horizontallyPadded?: boolean
}

const GenericSection: React.FC<Props> = ({
  children,
  className,
  separated,
  horizontallyPadded = true
}) => {
  return (
    <Section
      m="0"
      className={`${styles.container} ${className} ${separated ?? null} ${
        horizontallyPadded ? styles.horizontal_padding : null
      }`}
    >
      {children}
    </Section>
  )
}

export default GenericSection
