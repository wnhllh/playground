


import React, { forwardRef } from 'react';
import { Flexbox } from 'react-layout-kit';

const CardListItem = forwardRef<HTMLElement, any>(
  (
    {
      active,
      avatar,
      border = false,
      hover = true,
      avatarType,
      avatarInfo,
      loading,
      description,
      date,
      title,
      onHoverChange,
      renderActions,
      className,
      style,
      showAction,
      classNames = {},
      paddingBlock = 8,
      gap = 8,
      inCanvas,
      paddingInline = '12px',
      ...props
    },
    ref,
  ) => {


    return (
      <Flexbox
        ref={ref}
        horizontal
        paddingBlock={paddingBlock}
        gap={gap}
        paddingInline={paddingInline}
        align={'flex-start'}
        distribution={'space-between'}
        style={style}
        {...props}
        onMouseEnter={() => {
          onHoverChange?.(true);
        }}
        onMouseLeave={() => {
          onHoverChange?.(false);
        }}
      >

        <Flexbox>
          <Flexbox horizontal distribution={'space-between'}>
            {inCanvas ? (
             title
            ) : (
              <div>{title}</div>
            )}
          </Flexbox>
          {description && <div>{description}</div>}
        </Flexbox>

        <Flexbox
            horizontal
            gap={4}
            style={{ display: showAction ? undefined : 'none' }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {renderActions}
          </Flexbox>
      </Flexbox>
    );
  },
);

export default CardListItem;