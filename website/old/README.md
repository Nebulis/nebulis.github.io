## Resume

### Install tools
```bash
npm install -g resume-cli jsonresume-theme-kendall
```

### Generate
```bash
resume export index.html --theme kendall
```

### Fix CSS for pdf
- Add `languages` class to the the corresponding box
- Replace the media print css by `<link rel="stylesheet" type="text/css" href="./print.css" media="print"/>`
- TODO: a script to fix this automatically




