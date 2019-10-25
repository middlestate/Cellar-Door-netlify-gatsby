import React from 'react'
import { Document, Page } from 'react-pdf'

class PDF extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { pageNumber, numPages } = this.state
    const { pdf } = this.props

    return (
      <div>
        <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    )
  }
}

export default PDF