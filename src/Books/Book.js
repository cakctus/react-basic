import React from "react"

const Book = ({ book, children }) => {
  // (props)
  const { img, title, writer } = book

  const click = (title) => {
    alert(title)
  }

  function copy() {
    alert(writer)
  }

  return (
    <div className="article" onMouseOver={() => console.log(title)}>
      <article>
        <img className="article__image" src={img} alt="" />
        <p
          onClick={() => {
            click(title)
          }}
        >
          {title}
        </p>
        <p onCopy={copy}>{writer}</p>
        {children}
      </article>
    </div>
  )
}

export default Book
