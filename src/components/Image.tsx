/**
 * A wrapper for the img tag, with useBaseUrl applied to the src prop.
 */
import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const Image = ({ src, alt, ...rest }: ImageProps) => {
  return <img src={useBaseUrl(src)} alt={alt} {...rest} />;
};
