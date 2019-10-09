import React from "react"

export default function Entry({ entry }) {
  return (
    <a className="entry" href={entry.link} target="_blank">
      {entry.title}
    </a>
  )
}
