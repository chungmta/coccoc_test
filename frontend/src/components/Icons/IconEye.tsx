import * as React from 'react';

interface Props {
  className?: string;
  fill?: string;
}
const IconEye = ({ className, fill }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
  >
    <path
      fill={fill}
      d="M12.849 7.744c0-.075-.454-1.21-1.739-2.192l.227-.226.756-1.512c.151-.378 0-.831-.303-.983-.377-.15-.83 0-.982.303l-.756 1.511c0 .076-.076.152-.076.227-.604-.302-1.36-.529-2.267-.605V2.756c0-.454-.303-.756-.756-.756-.454 0-.756.302-.756.756v1.511c-.907.076-1.663.303-2.268.605 0-.075 0-.151-.075-.227l-.756-1.511c-.152-.378-.605-.53-.983-.303-.378.152-.53.605-.302.983l.755 1.512.227.226C1.51 6.535 1.057 7.67 1.057 7.744a.646.646 0 0 0 0 .53c.075.15 1.36 3.476 5.971 3.476S13 8.349 13 8.273c-.076-.15-.076-.302-.151-.529Zm-5.972 2.57c-2.872 0-4.082-1.587-4.46-2.267.378-.68 1.588-2.268 4.46-2.268 2.873 0 4.082 1.587 4.46 2.268-.378.68-1.587 2.267-4.46 2.267Z"
    />
    <path fill={fill} d="M7 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default IconEye;
