import { Explorer } from "./quartz/components"

// forbidden tags
const excludeTags = [
  "draft",
  "hidden",
  "private",
  "non-explore",
]

const explorer = Explorer({
  // title: "Теми",
  filterFn: (node) => {
    // exclude files with forbidden tags
    for (const tag of excludeTags) {
      if (node.file?.frontmatter?.tags?.includes(tag)) return false
    }
    
    return true
  },
})

export default explorer
