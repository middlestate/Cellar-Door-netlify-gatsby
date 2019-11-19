import React from 'react'
import { Document, Page } from 'react-pdf'

class PDFrender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
    }

    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  handlePrevious = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 })
  }

  handleNext = (numPages) => {
    this.setState({ pageNumber: this.state.pageNumber + 1 })
  }

  render() {
    const { pageNumber, numPages } = this.state
    const { pdf } = this.props

    return (
      <div>
        <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="pageNumber">{'Page ' + pageNumber }</div>
        <div className="pdf-buttons-container">
          <button onClick={pageNumber > 1 ? this.handlePrevious : null}>&lt;</button>
          <a href={pdf} download>
            <button>Download</button>
          </a>
          <button onClick={pageNumber < numPages ? this.handleNext : null}>&gt;</button>        
        </div>
      </div>
    )
  }
}

export default PDFrender