import React from 'react';
import { Document, Page } from 'react-pdf';

import meta from './components/documents/meta.pdf';

export default function Test() {
  return (
    <Document file={meta}>
      <Page pageNumber={1} />
    </Document>
  );
}
