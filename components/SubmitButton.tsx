'use client'

import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({ label, ...btnProps }) => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" isLoading={pending} {...btnProps}>
      {label}
    </Button>
  )
}

export default SubmitButton
