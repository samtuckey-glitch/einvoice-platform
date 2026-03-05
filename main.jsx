
# InvoiceFlow — Working Preview (Vite + React)

This project is a runnable preview built from your uploaded React code for an e‑invoicing platform (PEPPOL BIS 3.0 for Singapore). It supports CSV ingestion, AI‑like column mapping, validation, and XML export.

## Prerequisites
- Node.js 18+ and npm

## Run locally
```bash
npm install
npm run dev
```
Then open the URL shown in your terminal (typically http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Notes
- Fonts are imported from Google Fonts in a CSS `@import` — internet access required to load them.
- Sample CSV is included in-app ("Load Sample Data") for quick testing.
- The XML emitted follows UBL 2.1 with PEPPOL BIS 3.0 Singapore customisation.
