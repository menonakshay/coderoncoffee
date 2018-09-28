import React from 'react'
import Dropzone from 'react-dropzone'

class Upload extends React.Component {
    constructor() {
        super()
        this.onDrop = this.onDrop.bind(this)
        this.removeFile = this.removeFile.bind(this)
        this.state = { 
            files: [],
            maxFile : 3,
            maxSize : 500000
        }
    }
  
    onDrop(newFiles) {
        let addedFiles = this.state.files.concat(newFiles)
        this.setState({
            files : addedFiles
        });
    }

    removeFile(fileName) {
        let newFiles = this.state.files.filter( i => i.name !== fileName)
        this.setState({
            files : newFiles
        });
    }
  
    render() {
        console.log('this.state')
        console.log(this.state)
        let diff = this.state.maxFile - this.state.files.length
        let message = diff > 0 ? `You can add ${diff} items` : `Max limit of ${this.state.maxFile} files reached.Remove files to add more.`
        let dropzoneView = diff > 0 ? 'block' : 'none'
        return (
            <div className="row">
                <div className="dropzone col-xs-12" style={{display:dropzoneView}}>
                    <Dropzone onDrop={this.onDrop} maxSize={this.state.maxSize}>
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    </Dropzone>
                </div>

                <p className="col-xs-12">{message}</p>
                
                <div className="col-xs-12">
                    <h2>Files Added</h2>
                    <ul>
                    {
                        this.state.files.map((f,i) => (
                            <div className="row" key={i}>
                                {/* <li className="pull-left" key={f.name}>{f.name} - {f.size} bytes</li> */}
                                <a className="pull-left" href={f.preview}>{f.name}</a>
                                <button className="pull-right fa fa-trash" onClick={()=>this.removeFile(f.name)}></button>
                            </div>
                        ))
                    }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Upload;
