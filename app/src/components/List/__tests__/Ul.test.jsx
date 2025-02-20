/* eslint-disable react/jsx-props-no-spreading */
import { render } from '@testing-library/react'

import Ul from '../Ul'

const testId = 'list'
const renderComponent = (props = {}) => {
  const utils = render(<Ul {...props} data-testid={testId} />)
  const list = utils.queryByTestId(testId)
  return { ...utils, list }
}

describe('<Ul />', () => {
  test('should render a <ul> tag', () => {
    const { list } = renderComponent()
    expect(list).toBeInTheDocument()
    expect(list.tagName).toBe('UL')
  })

  test('should have a class attribute', () => {
    const { list } = renderComponent()
    expect(list).toHaveAttribute('class')
  })

  test('should adopt a valid attribute', () => {
    const id = 'test'
    const { list } = renderComponent({ id })
    expect(list).toHaveAttribute('id', id)
  })

  test('should not adopt an invalid attribute', () => {
    const { list } = renderComponent({ attribute: 'test' })
    expect(list).not.toHaveAttribute('attribute')
  })
})
