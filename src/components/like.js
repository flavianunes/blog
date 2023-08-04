import React, { useEffect, useState } from "react"
import { BsHeart } from "@react-icons/all-files/bs/BsHeart"
import { BsHeartFill } from "@react-icons/all-files/bs/BsHeartFill"

const Like = ({ post }) => {
  const [liked, setLiked] = useState(localStorage.getItem(`liked_${post}`))

  const icon = liked ? (
    <BsHeartFill />
  ) : (
    <button onClick={likePost}>
      <BsHeart />
    </button>
  )

  function likePost() {
    localStorage.setItem(`liked_${post}`, true)
    setLiked(true)
  }

  return icon
}

export default Like
