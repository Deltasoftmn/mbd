import { useState } from 'react'
import Image from 'next/image'

export default function TeamMemberCard({ member }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="bg-[#161b22] rounded-2xl overflow-hidden border border-white/5 text-center hover:border-[#10b981]/30 transition-colors">
      <div className="relative w-full aspect-square max-h-64 mx-auto overflow-hidden bg-[#0d1512]">
        {!imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : null}
        {imgError && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#10b981]/20">
            <span className="text-4xl font-bold text-[#10b981]">{member.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-white font-semibold text-lg mb-2">{member.name}</h3>
        <p className="text-white/70 text-sm">{member.role}</p>
      </div>
    </div>
  )
}
