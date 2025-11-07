'use client'

import Image from 'next/image'

export default function SintMaartenLogo({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/logo.svg"
        alt="Sint Maarten Logo"
        width={64}
        height={64}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  )
}
