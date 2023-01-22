// style
import styles from './Message.module.css'
// hooks
import { useEffect, useState } from 'react'

interface Props {
  msg: string
  type: string
}

export const Message = ({ msg, type }: Props) => {
  const [showMessage, setShowMessage] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false)
    }, 2000)
  } ,[])

  return (
    <>
      {showMessage && (
        <div className={styles.componentMessage}>
          <p className={type === 'error' ? styles.error : styles.success}>{msg}</p>
        </div>
      )}
    </>
    
  )
}