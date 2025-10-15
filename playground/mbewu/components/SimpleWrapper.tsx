'use client'

interface SimpleWrapperProps {
  children: React.ReactNode
}

export default function SimpleWrapper({ children }: SimpleWrapperProps) {
  return (
    <div className="simple-wrapper">
      {children}
    </div>
  )
}