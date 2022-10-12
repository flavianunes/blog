function appendComments(commentBox) {
  const commentScript = document.createElement("script")

  commentScript.async = true
  commentScript.src = "https://utteranc.es/client.js"
  commentScript.setAttribute("repo", "flavianunes/blog")
  commentScript.setAttribute("issue-term", "pathname")
  commentScript.setAttribute("id", "utterances")
  commentScript.setAttribute("theme", "github-light")
  commentScript.setAttribute("crossorigin", "anonymous")
  commentScript.setAttribute("label", "comments ✨💬✨")

  if (commentBox && commentBox.current) {
    commentBox.current.appendChild(commentScript)
  }
}

export { appendComments }
