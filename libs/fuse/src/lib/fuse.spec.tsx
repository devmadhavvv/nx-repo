import { render } from '@testing-library/react';

import Fuse from './fuse';

describe('Fuse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fuse />);
    expect(baseElement).toBeTruthy();
  });
});
