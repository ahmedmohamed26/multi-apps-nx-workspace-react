import { render } from '@testing-library/react';

import PetsToys from './pets-toys';

describe('PetsToys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PetsToys />);
    expect(baseElement).toBeTruthy();
  });
});
