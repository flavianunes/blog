import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const PostBio = ({ date, slug }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={35}
        quality={100}
        alt="Profile picture"
      />
      <div className="post-bio-info">
        <p className="author">{author?.name}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default PostBio
