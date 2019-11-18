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
    if(this.state.pageNumber > 1){
      this.setState({ pageNumber: this.state.pageNumber - 1 })      
    }
  }

  handleNext = () => {
    if(this.state.pageNumber + 1 !== null) {
      this.setState({ pageNumber: this.state.pageNumber + 1 })      
    }
  }

  render() {
    const { pageNumber, numPages } = this.state
    const { pdf } = this.props

    return (
      <div>
        <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <button onClick={this.handlePrevious}>&lt;</button>
        <button onClick={this.handleNext}>&gt;</button>
      </div>
    )
  }
}

export default PDFrender