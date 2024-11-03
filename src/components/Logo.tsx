import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "h-8", color = "#2563eb" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0L0 20L20 40L40 20L20 0ZM20 8L32 20L20 32L8 20L20 8Z"
        fill={color}
      />
      <path
        d="M60 8L72 20L60 32L48 20L60 8Z"
        fill={color}
      />
      {/* V */}
      <path d="M90 0L102 38H112L124 0H114L106 28L98 0H90Z" fill="currentColor"/>
      {/* O */}
      <path d="M134 4C127.4 4 122 9.4 122 16V22C122 28.6 127.4 34 134 34H140C146.6 34 152 28.6 152 22V16C152 9.4 146.6 4 140 4H134ZM134 12H140C142.2 12 144 13.8 144 16V22C144 24.2 142.2 26 140 26H134C131.8 26 130 24.2 130 22V16C130 13.8 131.8 12 134 12Z" fill="currentColor"/>
      {/* L */}
      <path d="M162 0V38H190V30H170V0H162Z" fill="currentColor"/>
      {/* T */}
      <path d="M196 0V8H208V38H216V8H228V0H196Z" fill="currentColor"/>
      {/* & */}
      <path d="M248 4C241.4 4 236 9.4 236 16C236 19.6 237.4 22.8 239.8 25L236 30V38H244L246.2 34.8C247.4 35.4 248.8 36 250 36H256C262.6 36 268 30.6 268 24C268 20.4 266.6 17.2 264.2 15L268 10V2H260L257.8 5.2C256.6 4.6 255.2 4 254 4H248ZM248 12H254C256.2 12 258 13.8 258 16C258 18.2 256.2 20 254 20H248C245.8 20 244 18.2 244 16C244 13.8 245.8 12 248 12Z" fill="currentColor"/>
      {/* S */}
      <path d="M280 4C273.4 4 268 9.4 268 16V18H276V16C276 13.8 277.8 12 280 12H286C288.2 12 290 13.8 290 16C290 18.2 288.2 20 286 20H280C273.4 20 268 25.4 268 32C268 38.6 273.4 44 280 44H286C292.6 44 298 38.6 298 32V30H290V32C290 34.2 288.2 36 286 36H280C277.8 36 276 34.2 276 32C276 29.8 277.8 28 280 28H286C292.6 28 298 22.6 298 16C298 9.4 292.6 4 286 4H280Z" fill="currentColor"/>
    </svg>
  );
}