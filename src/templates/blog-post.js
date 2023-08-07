import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import { PostBio, Comments, Layout, Seo } from "@components"
import { appendComments } from "@utils/helpers"

const BlogPostTemplate = ({ data }, location) => {
  const { previous, next, site, markdownRemark: post } = data
  const siteTitle = site.siteMetadata?.title || `Title`
  const commentBox = React.createRef()

  useEffect(() => {
    appendComments(commentBox)
  }, [commentBox])

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.description}</p>
          <PostBio date={post.frontmatter.date} slug={post.fields.slug} />
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          {/* <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title}
                  </Link>
                )}
              </li>
            </ul>
          </nav> */}
          <section id="comments" className="segment comments">
            <Comments commentBox={commentBox} />
          </section>

          <p class="disclaimer">
            Encontrou algo errado?{" "}
            <a
              href="https://github.com/flavianunes/blog/issues"
              target="_blank"
              rel="noreferrer"
            >
              Deixe uma contribuição para melhorar.
            </a>
          </p>
          <hr />
        </footer>
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD [de]  MMM, YYYY", locale: "pt")
        description
      }
      fields {
        slug
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
