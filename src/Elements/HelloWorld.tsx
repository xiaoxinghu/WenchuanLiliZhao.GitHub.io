import "./style.css"

function HelloWorld() {
  const name = "World"

  return (
    <div>
      <h1 className="hello">Hello {name}</h1>
      <p className={`ddd`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis fuga molestias, explicabo reprehenderit veniam labore ab! Dolorum pariatur dolorem commodi, possimus, rerum molestias placeat, optio id soluta enim dignissimos.</p>
    </div>
  )
  
  
}

export default HelloWorld;