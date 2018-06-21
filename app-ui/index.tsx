import * as React from 'react';
import { hydrate } from 'react-dom';
import { MySSRApp } from './MySSRApp';

hydrate(<MySSRApp />, document.getElementById('app'));
