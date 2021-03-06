import React, { PropsWithChildren } from 'react';
import { ScrollView as AliScrollView, ScrollViewProps, getSystemInfoSync } from 'remax/ali';

export type { ScrollViewProps } from 'remax/ali';

const ScrollViewRender: React.ForwardRefRenderFunction<any, PropsWithChildren<ScrollViewProps>> = (
  props,
  ref,
) => {
  const { children, ...scrollViewProps } = props;
  return (
    <AliScrollView {...scrollViewProps} ref={ref}>
      {children}
    </AliScrollView>
  );
};

export const ScrollView = React.forwardRef(ScrollViewRender);

export const systemInfo = getSystemInfoSync();
