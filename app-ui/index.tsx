import * as React from 'react';
import { hydrate } from 'react-dom';
import { MySSRApp } from './MySSRApp';

const preloadedState = typeof window !== 'undefined' ? (window as any).__INITIAL_STATE__ : undefined;

hydrate(<MySSRApp store={preloadedState} />, document.getElementById('app'));
