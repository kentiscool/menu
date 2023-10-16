import React from 'react'
import { Box } from '@radix-ui/themes'

import styles from './GenericContainer.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
}

const GenericContainer: React.FC<Props> = ({ children, className }) => {
  return <Box className={`${styles.container} ${className}`}>{children}</Box>
}

export default GenericContainer
