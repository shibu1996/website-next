import React from 'react';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DynamicFAIconProps {
  iconClass: string; // e.g., "fas fa-car"
  fallbackClass?: string; // e.g., "fas fa-star"
  className?: string; // CSS classes like "text-4xl"
  style?: React.CSSProperties; // Inline styles
}

// Converts "fas fa-car" → "faCar"
const iconLibrary = solidIcons as Record<string, any>;

const getIconFromClass = (iconClass: string): any => {
  const match = iconClass.match(/^fas fa-(.+)$/);
  if (!match) return null;

  const iconKey =
    'fa' +
    match[1].replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase()); // kebab-case to PascalCase
  return iconLibrary[iconKey] || null;
};

const DynamicFAIcon: React.FC<DynamicFAIconProps> = ({
  iconClass,
  fallbackClass = 'fas fa-star',
  className = 'text-4xl text-green-500',
  style,
}) => {
  const icon = getIconFromClass(iconClass);
  const fallbackIcon = getIconFromClass(fallbackClass);
  const iconToRender = icon || fallbackIcon;

  return <FontAwesomeIcon icon={iconToRender} className={className} style={style as any} />;
};

export default DynamicFAIcon;
