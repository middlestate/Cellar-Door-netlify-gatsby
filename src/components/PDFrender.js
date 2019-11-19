import React from 'react'
import { Document, Page } from 'react-pdf'

class PDFrender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
      isDesktop: false
    }

    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.updatePredicate = this.updatePredicate.bind(this)
  }


  /* Functions for rendered PDF name and Download button for phone/tablet screens */
  componentDidMount = () => {
    this.updatePredicate()
    window.addEventListener('resize', this.updatePredicate)
  }

  componentWillUnmount = () => {
    window.addEventListener('resize', this.updatePredicate)
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth > 768 })
  }

  /* Functions for PDF rendering on laptop/desktop screens */
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
    const { pageNumber, numPages, isDesktop } = this.state
    const { pdf, pdf_filename } = this.props

    return (
      <div className="pdf-render-container">
        {isDesktop ? (
          <div>
            <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <div className="pageNumber">{'Page ' + ' ' + pageNumber + ' ' + ' / ' + numPages }</div>
            <div className="pdf-buttons-container">
              <button onClick={pageNumber > 1 ? this.handlePrevious : null}>&lt;</button>
              <a href={pdf} download>
                <button>Download</button>
              </a>
              <button onClick={pageNumber < numPages ? this.handleNext : null}>&gt;</button>        
            </div>
          </div>
        ) : (
          <div className="pdf-mobile-only">
            <h3 className="pdf_filename" pdf_filename={pdf_filename}>{pdf_filename}</h3>
            <a href={pdf} download>
              <button>Download</button>
            </a>
          </div>
        )}
      </div>
    )
  }
}

export default PDFrender