'use client'

import Image from 'next/image'

/**
 * PolaroidImage - A reusable polaroid-style image card component
 * 
 * @param {string} imageSrc - Path to the profile image
 * @param {string} imageAlt - Alt text for the image
 * @param {string} text - Text to display below the image (e.g., name)
 * @param {string} textFont - Font family class (e.g., 'font-league-script', 'font-manrope')
 * @param {string} textColor - Text color (e.g., '#114a70', 'text-[#114a70]')
 * @param {number} size - Base size in pixels (default: 343). All dimensions scale proportionally
 * @param {number} lineHeight - Line height in pixels (default: scales with size). Prevents text from overlapping image
 * @param {number} rotation - Rotation angle in degrees (default: 2)
 * @param {string} className - Additional CSS classes
 */
export default function PolaroidImage({
  imageSrc,
  imageAlt = 'Profile',
  text = 'Jessica Ye',
  textFont = 'font-league-script',
  textColor = '#114a70',
  size = 343,
  lineHeight,
  rotation = 2,
  className = ''
}) {
  // Calculate proportional dimensions based on base size
  // The image is always square and sized based on card width minus padding
  // Original dimensions (base size = 343px):
  // - Card width: 343px
  // - Padding: 12px
  // - Image size: cardWidth - (2 * padding) = 343 - 24 = 319px
  // - Text size: 64px
  // - Gap: 30px
  // - Border radius: 20px
  // - Image border radius: 16px
  
  const scale = size / 343
  
  const cardWidth = Math.round(size)
  const padding = Math.round(12 * scale)
  // Image size is determined by card width minus padding (always square)
  const imageSize = cardWidth - (2 * padding)
  const textSize = Math.round(64 * scale)
  const gap = Math.round(30 * scale)
  const borderRadius = Math.round(20 * scale)
  const imageBorderRadius = Math.round(16 * scale)
  // Use provided lineHeight or default to scaled value
  const textLineHeight = lineHeight !== undefined ? lineHeight : Math.round(35 * scale)
  
  // Parse text color - handle both hex codes and Tailwind classes
  const textColorStyle = textColor.startsWith('#') || textColor.startsWith('rgb')
    ? { color: textColor }
    : {}
  
  const textColorClass = textColor.startsWith('#') || textColor.startsWith('rgb')
    ? ''
    : textColor

  return (
    <div className={`flex-none ${className}`} style={{ transform: `rotate(${rotation}deg)` }}>
      <div 
        className="bg-white content-stretch flex flex-col items-center relative rounded-[20px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]"
        style={{
          width: `${cardWidth}px`,
          paddingTop: `${padding}px`,
          paddingBottom: `${padding}px`,
          paddingLeft: `${padding}px`,
          paddingRight: `${padding}px`,
          borderRadius: `${borderRadius}px`
        }}
      >
        <div 
          className="relative shrink-0"
          style={{
            width: `${imageSize}px`,
            height: `${imageSize}px`,
            borderRadius: `${imageBorderRadius}px ${imageBorderRadius}px 0 0`
          }}
        >
          <Image 
            alt={imageAlt}
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imageSrc}
            width={imageSize}
            height={imageSize}
            style={{
              borderRadius: `${imageBorderRadius}px ${imageBorderRadius}px 0 0`
            }}
          />
        </div>
        <div 
          className="flex flex-col justify-center items-center flex-grow"
          style={{
            minHeight: 0,
            marginTop: `${gap}px`
          }}
        >
          <div 
            className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap ${textFont} ${textColorClass}`}
            style={{
              fontSize: `${textSize}px`,
              lineHeight: `${textLineHeight}px`,
              ...textColorStyle
            }}
          >
            <p style={{ lineHeight: `${textLineHeight}px`, margin: 0 }}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

