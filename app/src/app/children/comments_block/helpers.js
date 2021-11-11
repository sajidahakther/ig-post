export function styleTags (text) {
  return text.replace(
    /(^|\s)([#@][a-z\d-]+)/gi,
    "$1<span style='color:#21618C; cursor:pointer;'>$2</span>"
  )
}
