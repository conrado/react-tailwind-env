import * as React from 'react';

import { ThemedComponent } from '@shohamgilad/tailwind-test.ui.themed-component';

export const App = () => {

  return (
    <>
      <ThemedComponent className="p-16">This components has a className *p-16* which would have an value of 1.6rem as it was defined in the *tailwind.config.js*</ThemedComponent>
    </>
  );
};
