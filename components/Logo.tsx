'use client'

import Image from 'next/image'

export default function SintMaartenLogo({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="https://cdn.prod.website-files.com/62fbeeefbab5395307ae17a3/62fbef608337990b58b105e1_vbs-p-500.webp"
        alt="Sint Maarten Logo"
        width={200}
        height={200}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  )
}
