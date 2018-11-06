## What it does?

Actually it does nothing much. This module is just an extension of fabulous `react-dropzone`. On accepting CSV file it will give you back JSON. That's it.

## Usage

```
        <div>
          <DropZone
            getJson={jsonResult => {
              this.setState({ jsonResult });
            }}
          >
            <p>Add a file and see for yourself</p>
          </DropZone>
          {this.state.jsonResult ? (
            <div>{JSON.stringify(this.state.jsonResult)}</div>
          ) : null}
        </div>
        
```