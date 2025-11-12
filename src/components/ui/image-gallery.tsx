'use client'

import React, { useState, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { getAnimationDelay, ANIMATIONS } from "@/lib/constants"
import type { ImageGalleryProps, Work } from "@/lib/types"

interface ImageItemProps {
  work: Work
  index: number
  onClick?: (work: Work) => void
}

const ImageItem: React.FC<ImageItemProps> = ({ work, index, onClick }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleClick = useCallback(() => {
    onClick?.(work)
  }, [work, onClick])

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
  }, [])

  return (
    <div
      className="aspect-square bg-muted rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in group cursor-pointer border-2 border-border hover:border-primary"
      style={{ 
        animationDelay: getAnimationDelay(index, 50),
        transform: 'scale(1)',
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `scale(${ANIMATIONS.scaleHover})`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
        </div>
      )}
      
      {hasError ? (
        <div className="flex h-full items-center justify-center bg-muted text-muted-foreground">
          <span className="text-sm">Error cargando imagen</span>
        </div>
      ) : (
        <Image
          src={work.image}
          alt={work.alt || `Trabajo de tufting ${work.id}`}
          fill
          className={cn(
            "object-cover transition-transform duration-300 group-hover:scale-110",
            isLoading && "opacity-0"
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    </div>
  )
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  works,
  columns = 3,
  className,
}) => {
  const handleImageClick = useCallback((work: Work) => {
    // Aquí se puede implementar un lightbox o modal
    console.log('Clicked work:', work)
  }, [])

  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4"
  }[columns] || "md:grid-cols-3"

  return (
    <div className={cn("grid gap-6", gridClass, className)}>
      {works.map((work, index) => (
        <ImageItem
          key={work.id}
          work={work}
          index={index}
          onClick={handleImageClick}
        />
      ))}
    </div>
  )
}