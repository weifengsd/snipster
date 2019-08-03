const getLanguageFileNameForVSCode = language => {
  switch(language) {
    case 'clj':
    case 'cljs':
    case 'cljc':
    case 'edn':
      return 'clojure'
    case 'coffee':
    case 'coffeelit':
      return 'coffeescript'
    case 'cs':
      return 'csharp'
    case 'cc':
      return 'cpp'
    case 'f#':
    case 'fs':
    case 'fsi':
    case 'ml' :
    case 'mli':
    case 'fsx':
    case 'fsscript':
      return 'fsharp'
    case 'git':
    case 'gitcommit':
    case 'gitrebase':
      return 'git-commit'
    case 'hbs':
      return 'handlebars'
    case 'js':
    case 'javascript':
      return 'javascript'
    case 'jsx':
    case 'react':
      return 'javascriptreact'
    case 'make':
      return 'makefile'
    case 'md':
    case 'markdown':
    case 'gfm':
    case 'mark':
    case 'mkdown':
    case 'mdml':
    case 'mdown':
    case 'mdtext':
      return 'markdown'
    case 'm':
    case 'matlab':
      return 'matlab'
    case 'h':
    case 'objc':
    case 'objective-c':
    case 'objectivec':
    case 'oc':
      return 'objective-c'
    case 'ps1':
    case 'ps':
    case 'pwrshell':
      return 'powershell'
    case 'cshtml':
    case 'vbhtml':
      return 'razor'
    case 'rb':
    case 'so':
    case 'ror':
    case 'rubyonrails':
      return 'ruby'
    case 'sass':
    case 'scss':
      return 'scss'
    case 'sh':
    case 'bash':
    case 'shell':
      return 'shellscript'
    case 'ts':
      return 'typescript'
    case 'yml':
      return 'yaml'
    default:
      return language
  }
}

module.exports = getLanguageFileNameForVSCode