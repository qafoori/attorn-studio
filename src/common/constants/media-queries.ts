export const createQuery = (breakPoint: number, status: 'min' | 'max') => {
  return `@media screen and (${status}-width: ${breakPoint}px)`
}

export const mediaQueries = {
  min: {
    '576': createQuery(576, 'min'),
    '768': createQuery(768, 'min'),
    '992': createQuery(992, 'min'),
    '1200': createQuery(1200, 'min'),
    '1400': createQuery(1400, 'min'),
  },
  max: {
    '576': createQuery(576, 'max'),
    '768': createQuery(768, 'max'),
    '992': createQuery(992, 'max'),
    '1200': createQuery(1200, 'max'),
    '1400': createQuery(1400, 'max'),
  }
}

