// React
import * as React from 'react';

// Libraries
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: { [key: string]: unknown }) {
  navigationRef.current?.navigate(name, params);
}

export function getParams() {
  return navigationRef.current?.getCurrentRoute()?.params as any;
}
