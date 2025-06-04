import React from 'react'

const variantStyles: Record<BookCoverVariant, string> = {
    extraSmall: "book-cover_extra_small",
    small: "book-cover_small",
    medium: "book-cover_meduim",
    regular: "book-cover_regular",
    wide: "book-cover_wide"
}

interface Props {
    className?: string;
    variant: "wide" | "small";
    coverColor: string;
    coverUrl: string;
}

const BookCover = ({className, variant, coverUrl, coverColor}: Props) => {
  return (
    <div>BookCover</div>
  )
}

export default BookCover