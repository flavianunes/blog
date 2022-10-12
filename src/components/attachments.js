import * as React from "react"
import { IoIosAttach } from "@react-icons/all-files/io/IoIosAttach"

const Attachments = ({ attachments }) => {
  if (attachments.length) {
    return (
      <div className="attachments">
        <p>
          Read more about the topic <IoIosAttach />
        </p>
        <ul>
          {attachments.map(attachment => {
            return (
              <li>
                <a href={attachment.link} target="_blank" rel="noreferrer">
                  {attachment.title}
                </a>
              </li>
            )
          })}
        </ul>
        <hr />
      </div>
    )
  }
}

export default Attachments
