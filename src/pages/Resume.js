import React from "react";
import { Document, Page, } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudfare.com`

export default function Resume() {
  return (
    <div className="pdf">
      <h2>Resume</h2>
      <Document
        file={
          "https://online.flippingbook.com/view/422773771/"
        }
        onLoadError={console.error} 
        style={{width: '100vh' , height: 'auto'}} >
            
        <Page pageIndex={0} />
      </Document>
    </div>
  );
}
//     <section className='resume'>
//         <h1>Resume</h1>
//         <hr/>
//         <h2 className='col-12 d-flex'>Front end proficeinces:</h2>
//         <ul>
//             <li>Html</li>
//             <li>Css</li>
//             <li>Javascript</li>
//             <li>Jquery</li>
//             <li>Responsive design</li>
//             <li>React</li>
//             <li>Bootstrap</li>
//         </ul>
//         <h2>Back end proficeinces:</h2>
//         <ul>
//             <li>Api's</li>
//             <li>Node</li>
//             <li>Express</li>
//             <li>Mysql, sequelize</li>
//             <li>MongoDB, mongoose</li>
//             <li>Rest</li>

//         </ul>
//         <h2>Resume coming soon...</h2>
//     </section>
//  )
