import React from 'react'

export default React.createContext({
  isNavbarActive: false,
  isNavbarShrinked: false,
  isWhiteHeader: false,
  toggleNavbarActiveness: () => {},
  toggleNavbarShrinkness: () => {},
})
