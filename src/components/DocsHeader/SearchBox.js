import React from 'react'
import { TextField, Box } from 'serverless-design-system'
import styled from 'styled-components'
import searchIcon from 'src/assets/images/search-icon-gray.svg'

const DocHeaderSearchBox = styled(Box)`
  .algolia-autocomplete {
    position: fixed !important;
    z-index: 1000 !important;
    right: 50px !important;
    top: 12px !important;
  }

  .searchBox {
    color: #8c8c8c !important;
    width: 310px;
    background-color: white;
    border-radius: 4px;
    &::placeholder {
      color: #8c8c8c !important;
    }
  }

  @media screen and (max-width: 1280px) and (min-width: 1026px) {
    .algolia-autocomplete {
      right: 60px !important;
    }
  }

  @media screen and (max-width: 415px) {
    .searchBox {
      width: 323px;
    }

    .algolia-autocomplete {
      right: 50px !important;
      top: 6px !important;
    }
  }

  @media screen and (max-width: 375px) {
    .searchBox {
      width: 275px !important;
    }
  }
`

const DocsSearchField = styled(TextField)`
  position: absolute;
  z-index: 1000;
  width: 311px;
  height: 32px;
  letter-spacing: 0.4px;
  background: url(${searchIcon}) no-repeat;
  background-position: right 15px center;
  background-size: 17.5px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 992px) and (max-width: 1280px) {
    margin-top: 5px;
  }

  @media screen and (max-width: 415px) {
    height: 34px;
  }
`

export default class SearchBox extends React.Component {
  componentDidMount() {
    this.initializeSearch()
  }

  initializeSearch = () => {
    if (typeof docsearch !== 'undefined') {
      docsearch({
        // eslint-disable-line
        apiKey: 'd5a39b712b86965d93534207ef5423df',
        indexName: 'serverless',
        inputSelector: '#algolia-docs-header-search',
        debug: false, // set to true to style search box
      })
    } else {
      setTimeout(() => {
        this.initializeSearch()
      }, 50)
    }
  }

  render() {
    return (
      <DocHeaderSearchBox
        display={
          this.props.isNavbarActive
            ? ['block', 'block', 'block', 'block', 'none']
            : ['none', 'none', 'block', 'block', 'none']
        }
        className={'doc-search-box'}
      >
        <DocsSearchField
          placeholder='Search documentation'
          height={[36, 36, 24]}
          width='100%'
          border='none'
          fontSize={14}
          fontFamily='Soleil'
          placeholderColor='#fff'
          px={[1, 1, 2]}
          id='algolia-docs-header-search'
          className='searchBox'
          color='#fff'
        />
      </DocHeaderSearchBox>
    )
  }
}
