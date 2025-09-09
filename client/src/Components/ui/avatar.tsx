
import React from "react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  className?: string;
  imgClassName?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt = "Avatar", fallback, className = "", imgClassName = "" }) => {
  const [imgError, setImgError] = React.useState(false);
  const showImage = src && !imgError;
  return (
    <span className={`inline-block rounded-full bg-gray-200 overflow-hidden ${className}`}
      style={{ width: 40, height: 40 }}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${imgClassName}`}
          onError={() => setImgError(true)}
        />
      ) : (
        fallback || (
          <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        )
      )}
    </span>
  );
};

export default Avatar;
